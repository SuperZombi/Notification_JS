function Notification (argument) {
	return new Notifications(argument)
}

function hide_notification(el, ms){
	setTimeout(function() {
		el.style.opacity = 0;
		el.style.transform = "scale(0)";
		setTimeout(function(){el.style.display = "none";}, 500)
	}, ms);
}

class Notifications {
	constructor(element) {
	  	if (element == null){
	  		this.element = document.body
	  	}
	  	else{
	  		try{
		  		var tmp_not = document.querySelector(element)
		  		if(!tmp_not){
		  			this.element = document.body
		  			console.warn(`Element "${element}" was not found`)
		  		}
		  		else{
		  			this.element = tmp_not;
		  		}
		  	}
		  	catch{
		  		this.element = document.body
				console.warn(`Element "${element}" was not found`)
			}
	  	}
	}

	clearAll(){
		if (this.element != document.body){
			this.element.innerHTML = '';
		}
	}
	clear(){
		if (this.element != document.body){
			this.element.childNodes.forEach(function(e){
				try{
					if (e.style.display == "none"){
						e.remove()
					}
				}
				catch{}
			})
		}
	}


	async Warning(text, arg1, arg2, arg3, arg4){
		let arr = this._parse([text, arg1, arg2, arg3, arg4])
		await this.NewNotification("warning", arr.text, this.element, arr.autohide, arr.ms, arr.buttons)
	}
	async Error(text, arg1, arg2, arg3, arg4){
		let arr = this._parse([text, arg1, arg2, arg3, arg4])
		await this.NewNotification("error", arr.text, this.element, arr.autohide, arr.ms, arr.buttons)
	}
	async Success(text, arg1, arg2, arg3, arg4){
		let arr = this._parse([text, arg1, arg2, arg3, arg4])
		await this.NewNotification("success", arr.text, this.element, arr.autohide, arr.ms, arr.buttons)
	}


	_parse(args){
		let text=""; let autohide=true; let ms=5000; let buttons=null;
		if ((!args[0]) || (typeof(args[0]) != "string")){
			throw "The variable 'text' is not defined";
		}
		else{
			text = args[0]
		}
		args.forEach(function(e){
			if (typeof(e) == "object"){
				if (Array.isArray(e)){
					buttons=e;
				}
			}
			if (typeof(e) == "boolean"){
				autohide=e;
			}
			if (typeof(e) == "number"){
				ms=e;
			}
		})

		return {text: text, autohide: autohide, ms: ms, buttons: buttons}
	}


	async NewNotification(type, text, elem, autohide=true, ms=5000, buttons=null){
		let div_el = await this.NewNotice(type, text, buttons)
		elem.appendChild(div_el);
		await new Promise(resolve => setTimeout(resolve, 20));
		div_el.style.opacity = 1;
		div_el.style.transform = "scale(1)";

		div_el.onclick = function() {
			hide_notification(div_el, 0);
		}

		if (autohide){
			hide_notification(div_el, ms)
		}
		await new Promise(resolve => setTimeout(resolve, 400));
	}

	async NewNotice(what, text, buttons=null){
		let div = document.createElement('div');
		if (what == "warning") div.className = 'Message Message--orange';
		if (what == "error") div.className = 'Message Message--red';
		if (what == "success") div.className = 'Message Message--green';

		let icon = document.createElement('div');
		icon.className = 'Message-icon';
		let i = document.createElement('i');
		if (what == "warning") i.className = 'fa fa-exclamation';
		if (what == "error") i.className = 'fa fa-times';
		if (what == "success") i.className = 'fa fa-check';
		icon.appendChild(i);
		div.appendChild(icon);

		let msg_body = document.createElement('div');
		msg_body.className = 'Message-body';
		let p = document.createElement('p');
		p.innerHTML = text;
		msg_body.appendChild(p);
		if (buttons){
			for (let j=0;j<buttons.length;j++){
				let button = document.createElement('button');
				button.className = 'Message-button';
				if (typeof(buttons[j]) == "object"){
					button.innerHTML = buttons[j][0]
					button.onclick = buttons[j][1]
				}
				if (typeof(buttons[j]) == "string"){
					button.innerHTML = buttons[j]
				}
				msg_body.appendChild(button);
			}
		}
		div.appendChild(msg_body);

		let but = document.createElement('button');
		but.className = 'Message-close';
		let i2 = document.createElement('i');
		i2.className = "fa fa-times"
		but.appendChild(i2);

		div.appendChild(but);
		div.style.opacity = 0;
		div.style.transform = "scale(0)";
		return div;
	}

}

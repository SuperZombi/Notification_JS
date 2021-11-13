# Notification_JS
Quickly create a notification item

## Notifications 2.0

<details>
	<summary>What's new</summary>
	
* Get rid of jQuery
* Rewritten architecture for OOP
* Reduced file size and increased work speed
	
</details>

### Usage:

HTML:
```html
<head>
	<link href="https://superzombi.github.io/Notification_JS/notifications.css" rel="stylesheet">
	<script src="https://superzombi.github.io/Notification_JS/2.0/notifications.js"></script>
</head>
```

JavaScript:
```javascript
  notice = Notification('#notifications');
  
  async function func_name(){
	await notice.Warning("Hello world!", false)
	await notice.Error("Hello world!", false, [['OK', show_more], 'Cancel'])
	await notice.Success("Hello world!")
  }
```
<a href="/2.0/example.html">Usage Example</a>
## Methods:

### ```Warning()```, ```Error()```, ```Success()``` (text, element, autohide, ms, buttons)
  <code>text</code> - string (Required) </br>
  <code>element</code> - document.Element (default: <code>document.body</code>) </br>
  <code>autohide</code> - boolean (default: <code>true</code>) </br>
  <code>ms</code> - integer (default: <code>5000</code>) (milliseconds) </br>
  <code>buttons</code> - array ( <code>[button_name]</code> )   ( <code>[[button_name, function]]</code> )
  
### ```clear()``` - Clear non active notifications

### ```clearAll()``` - Clear all notifications
  


<details>
	<summary>Change notification width:</summary>
	
```css
.Message{
	width: 300px;
}
```

</details>

<hr>

<details>
	<summary>Notifications 1.0 (Old)</summary>
	
### Usage:

HTML:
```html
<head>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script src="notifications.js"></script>
	<link rel="stylesheet" type="text/css" href="notifications.css">
</head>
```

<details>
	<summary>CDN:</summary>
	
```html
<link href="https://superzombi.github.io/Notification_JS/notifications.css" rel="stylesheet">
<script src="https://superzombi.github.io/Notification_JS/notifications.js"></script>
```
</details>

<hr>
</br>


JavaScript:
```javascript
  //Set parent element for notifications
  notifications_element = document.getElementById('notifications')
  
  async function func_name(){
    await Warning("Hello world!", false)
    await Error("Hello world!", false, [['OK', show_more], 'Cancel'])
    await Success("Hello world!")
  }
```
</details>


<hr>

#### <a href="https://www.donationalerts.com/r/super_zombi">Support the project</a>

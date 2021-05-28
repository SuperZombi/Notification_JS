# Notification_JS
Quickly create a notification item


### Usage:

HTML:
```html
<head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script src="notifications.js"></script>
	<link rel="stylesheet" type="text/css" href="notifications.css">
</head>
```

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

### New...(text, element, autohide, ms, buttons)
  <code>text</code> - string (Required) </br>
  <code>element</code> - document.Element (default: <code>document.body</code>) </br>
  <code>autohide</code> - boolean (default: <code>true</code>) </br>
  <code>ms</code> - integer (default: <code>5000</code>) (milliseconds) </br>
  <code>buttons</code> - array ( <code>[button_name]</code> )   ( <code>[[button_name, function]]</code> )

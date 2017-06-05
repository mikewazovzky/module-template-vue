### NPM module template for Vue.js component
### Description
Use template to publish Vue.js component(s) as npm module.    
Example <flash> component included.
### Version 0.1.1 Level's colors updated
### Change log
0.0.1 Original project setup   
0.1.0 Example <flash> component added  
0.1.1 Level's colors updated
### Installation
Run
```
npm install module-template-vue --save
```
### Usage 
Import
```javascript
import Flash from 'module-template-vue'
Vue.use(Flash)
```
Use component
```xml
<flash message="Some text"></flash>
<flash :message="{ message: 'Some text', level: 'danger'}"></flash>
```
To make `flash` function available globally turn `events` flag  `on`  
```xml
<flash message="Some text" events="on"></flash>
```
... and define global `events` bus object
```javascript
window.events = new Vue(); 

window.flash = function(message) {
	window.events.$emit('flash', message);
}
```
Avalable level flags are: `['success', 'info', 'warning', 'danger']`.

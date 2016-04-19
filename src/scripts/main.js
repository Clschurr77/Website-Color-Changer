import React from 'react'
import ReactDOM from 'react-dom'
import {__newColorsDictKey, Colors, ColorDictionary} from './utils.js'
import {ColorsList, Chart, Tabs} from './ui.js'
import NotificationCenter from './notification-center.js'

(function initNotificationCenter() {
	const notificationCenter = new NotificationCenter();
	notificationCenter.registerEvent('on-color-change');
	notificationCenter.registerEvent('on-color-set-change');
	notificationCenter.registerEvent('pick-color-for');
	window.notificationCenter = notificationCenter;
})();

window.onload = function() {
	// var colors = Colors.getColorsOfDomElement(document);
	var colors = JSON.parse('{"text":{"#333333":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},null,{},{},{},{},{}],"#000000":[{},{},{},{},{},{},{}],"#ffffff":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#515151":[{},{},{},{},{},{}],"#428bca":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#577171":[{},{}],"#daddd2":[{},{}],"#a8eceb":[{},{},{},{}],"#0f7271":[{},{},{},{},{},{},{},{},{},{}],"#f7efb8":[{},{},{},{}],"#7e6e07":[{},{},{},{},{},{},{},{}],"#38595b":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#76b3b2":[{},{},{}],"#447905":[{},{},{},{},{},{},{},{}],"#2f908f":[{},{},{},{},{},{},{}],"#639a62":[{}],"#4a8080":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#555555":[{},{},{}],"#315356":[{},{},{},{}]},"background":{"#000000":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},null,{},{},{},{},{}],"#ededed":[{},{},{},{}],"#7dbf6b":[{},{},{},{},{},{},{},{},{},{}],"#dddddd":[{}],"#f5f4e7":[{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#315356":[{},{},{}],"#5aa147":[{}],"#005352":[{},{}],"#368da3":[{},{},{},{},{}],"#433e02":[{},{}],"#c6b651":[{},{},{},{}],"#ffffff":[{},{},{},{},{}],"#134803":[{},{}],"#48adad":[{}],"#faffbd":[{},{}],"#4264ca":[{},{}],"#4fccff":[{},{}],"#187492":[{},{}],"#f3f1e5":[{}]},"all":{"#333333":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},null,{},{},{},{},{},null],"#000000":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},null,{},{},{},{},{}],"#ffffff":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#515151":[{},{},{},{},{},{},null],"#428bca":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},null],"#577171":[{},{},null],"#daddd2":[{},{},null],"#a8eceb":[{},{},{},{},null],"#0f7271":[{},{},{},{},{},{},{},{},{},{},null],"#f7efb8":[{},{},{},{},null],"#7e6e07":[{},{},{},{},{},{},{},{},null],"#38595b":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},null],"#76b3b2":[{},{},{},null],"#447905":[{},{},{},{},{},{},{},{},null],"#2f908f":[{},{},{},{},{},{},{},null],"#639a62":[{},null],"#4a8080":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},null],"#555555":[{},{},{},null],"#315356":[{},{},{},{},{},{},{}],"#ededed":[null,{},{},{},{}],"#7dbf6b":[null,{},{},{},{},{},{},{},{},{},{}],"#dddddd":[null,{}],"#f5f4e7":[null,{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#5aa147":[null,{}],"#005352":[null,{},{}],"#368da3":[null,{},{},{},{},{}],"#433e02":[null,{},{}],"#c6b651":[null,{},{},{},{}],"#134803":[null,{},{}],"#48adad":[null,{}],"#faffbd":[null,{},{}],"#4264ca":[null,{},{}],"#4fccff":[null,{},{}],"#187492":[null,{},{}],"#f3f1e5":[null,{}]}}');

	// Just for development
	Object.defineProperty(colors, 'all', {
		get: function(){
			return Object.assign(new ColorDictionary(), this.text, this.background);
		}
	});

	colors.text.__proto__ = colors.background.__proto__ = ColorDictionary.prototype;
	colors.text[__newColorsDictKey] = {};
	colors.background[__newColorsDictKey] = {};

	colors.text.setNewColor('#515151', '#FF0000');

	const tabsContainerNode =  document.getElementById('tabs-container');
	const colosListContainerNode = document.getElementById('colors-list-container');

	const defaultColorsSet = 'all';
	const colorSetsNames = Object.keys(colors);
	
	ReactDOM.render(React.createElement(Tabs, {items: colorSetsNames, defaultItemName: defaultColorsSet}), tabsContainerNode);
	ReactDOM.render(React.createElement(ColorsList, {colors: colors, defaultColorsSet: defaultColorsSet}), colosListContainerNode);
	new Chart(colors, defaultColorsSet);
};

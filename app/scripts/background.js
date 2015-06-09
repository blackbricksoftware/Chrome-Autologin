'use strict';

var debug = false;
var dom = '[href*="//blackbricksoftware.com"]';

$(function(){
	if ($(dom).length>0) {
		if (debug) console.log('clicking '+dom);
		if ($(dom).is('a')) {
			$(dom)[0].click();
		} else {
			$(dom).click();
		}
	} else {
		if (debug) console.log('not found '+dom);
	}
	var refreshtime = ((Math.random()-0.5)*10+60)*1000;
	if (debug) console.log(refreshtime);
	setTimeout(function(){
		location.reload(true);
	},refreshtime);
});

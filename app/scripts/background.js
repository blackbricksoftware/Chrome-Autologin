'use strict';

var dom = '[href="http://blackbricksoftware.com/"]';

$(function(){
	if ($(dom).length>0) {
		console.log('clicking '+dom);
		if ($(dom).is('a')) {
			$(dom)[0].click();
		} else {
			$(dom).click();
		}
	} else {
		console.log('not found '+dom);
	}
	var refreshtime = ((Math.random()-0.5)*10+60)*1000;
	console.log(refreshtime);
	setTimeout(function(){
		location.reload(true);
	},refreshtime);
});

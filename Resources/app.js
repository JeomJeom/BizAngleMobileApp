//Data for creating tabs into tabgroup
var data = [
{shorttitle:'Home',title:'Home Page', image:'images/homelogo.png',url:"../handheld/homeWindow.js"},
{shorttitle:'Product',title:'Product Page', image:'images/productlogo.png',url:"../handheld/productWindow.js"},
{shorttitle:'Biz Info',title:'BizInfo Page', image:'images/bizlogo.png',url:"../handheld/bizInfoWindow.js"},
{shorttitle:'Task',title:'Task Page', image:'images/tasklogo.png',url:"../handheld/taskWindow.js"},
{shorttitle:'Setting',title:'Setting Page', image:'images/settinglogo.png',url:"../handheld/settingWindow.js"}

];
//connect the tabgroup file 
var TabModule= require('ui/common/tabGroup');
var tabGroup = new TabModule(data);
//open tabgroup
tabGroup.open();


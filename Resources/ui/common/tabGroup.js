
var ApplicationGroup = function(data){
//create tab group
	var mainTabGroup =Ti.UI.createTabGroup({color:"red"});
	mainTabGroup.navBarHidden = true; 
	mainTabGroup.tabsAtBottom = true;
	mainTabGroup.exitOnClose=true;
	
for (i=0;i<data.length;i++)
{
	
		var tabWin = Ti.UI.createWindow({
		text:data[i].shorttitle,
	    backgroundGradient : {
            type : 'linear',
            startPoint : {
                x : '0%',
                y : '0%'
            },
            endPoint : {
                x : '0%',
                y : '100%'
            },
            colors : [{
                color : '#141F33',
                offset : 0.0
            }, {
                color : '#527ACC',
                offset : 0.25
            }, {
                color : '#3D5C99',
                offset : 0.5
            }, {
                color : '#293D66',
                offset : 0.75
            },
            {
                color : '#141F33',
                offset : 1.0
            },
            ]
        },
		url:data[i].url
			
	});
	
	   var tab = Ti.UI.createTab({
		backgroundImage:"1.jpg",
		//title:data[0].shorttitle,
		icon:data[i].image,
		window:tabWin
	});
	
	mainTabGroup.addTab(tab);
}
return mainTabGroup;
};

module.exports = ApplicationGroup;

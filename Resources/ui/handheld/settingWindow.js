// WINDOW
	var settingWin = Ti.UI.currentWindow;

	var settingView = Ti.UI.createView({
		width: 300,
		height:"100%",
		width:"97.25%",
		borderColor: 'grey'
	});
 var switch1 = Ti.UI.createSwitch({
 	value: true,
 	top: 0,
 	left: '75%',
 	zIndex:9,
 	titleOn:'On',
 	titleOff:'Off',
 	
 });
// TABLE
var tbl_data = [
	{title:'App Notification', height: 50, font:{ fontSize: 24,fontWeight:"bold",},rightButton:switch1 },
	{title:'Theme', height:50, font:{ fontSize: 24,fontWeight:"bold"}},
	{title:'About Us', height:55,hasDetail:true, font:{ fontSize: 24,fontWeight:"bold"} },
	{title:'Find Us', height:50,mapDetail:true,font:{ fontSize: 24,fontWeight:"bold"} },
	{title:'Reset Data',height:60,reset:true,font:{ fontSize: 24,fontWeight:"bold"}},
	{title:'help', height: 50, font:{ fontSize: 24,fontWeight:"bold"}}
];

var table = Titanium.UI.createTableView({
	data:tbl_data
});


table.addEventListener("click",function(e){
if (e.source.title=='About Us'){
		var aboutW = Titanium.UI.createWindow({
				title:e.source.title,//Take the title from the row
				backgroundImage:"../../images/e.jpg",
				navBarHidden:true
			});
		aboutW.open();
	}
	else if (e.rowData.reset){
		var alert2 = Ti.UI.createAlertDialog({
			title: 'Reset',
			message: 'Are you sure you want to Reset Data?',
			buttonNames: ['OK','Cancel']
		}).show();
	}
else if(e.rowData.mapDetail){
 var win = Ti.UI.createWindow({
 	title: 'Find Us',
 	window: 'Contact Us',
});
 
var mapView = Titanium.Map.createView({
	top:0,
	left:0,
	height:250,
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:1.3185848, longitude:103.8455665, 
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true //Will show a blue dot at your current location
});

var sp = Titanium.Map.createAnnotation({
    latitude:1.309415,
    longitude:103.779613,
    title:"Singapore Poly School Of DMIT",
    subtitle:'We are here',
    leftButton:"images/01-backpack-cal-thumb.png",
    rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
    pincolor:Titanium.Map.ANNOTATION_PURPLE,
    animate:true,
    //leftButton: '../images/appcelerator_small.png',
    someData:1
});

var data = 
[
	{title:"Singpore Poly", leftImage:"images/01-backpack-cal-thumb.png", className:"tableRow", largeImage:"images/01-backpack-cal-large.png", annotation:sp}
];
var rowData = []; //An array that will hold our row objects created by createTableViewRow
for(var i = 0; i < data.length; i++){
	
	//Create the row
	var row = Titanium.UI.createTableViewRow({
		title:data[i].title,
		leftImage:data[i].leftImage,
		className:data[i].className,
		largeImage:data[i].largeImage,
		annotation:data[i].annotation
	});
	
	//push the row into the array
	rowData.push(row);
}

var tableView = Titanium.UI.createTableView({
	data:rowData,
	top:250,
	left:0,
	height:117
});

tableView.addEventListener("click",function(e){
	if(e.rowData.annotation){
		var selectedAnnotation = e.rowData.annotation;
		//mapView.annotations = [selectedAnnotation];//Notice the array brackets; As opposed to adding an annotation
		mapView.removeAllAnnotations();
		mapView.addAnnotation(selectedAnnotation);
		mapView.setLocation({
			latitude:selectedAnnotation.latitude,
			longitude:selectedAnnotation.longitude,
			latitudeDelta:0.03,
			longitudeDelta:0.03
		});
		mapView.selectAnnotation(selectedAnnotation);
	}
});
win.add(tableView);
win.add(mapView);
win.open();
}
else{
	
	alert("The page is coming soon");
}
});

// now assign that array to the table's data property to add those objects as rows

	
//*****************************************************************

 // SWITCH

settingView.add(switch1);
settingView.add(table);
settingWin.add(settingView);



var bizWin = Ti.UI.currentWindow;

	var tableData = [ 
	{title:"Sales Transaction Record",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},leftImage:"/../../images/graph_icon.png"}, 
    {title:"Partner Contact ",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},leftImage:"../../images/contact_icon.png"}
    ]; 

   	var bizTable = Ti.UI.createTableView({
	  data:tableData,
	  minRowHeight :60,
      top:0
	});
	bizWin.add(bizTable);
//Sales*************************************************************************************************************************************************************
//create component instance
	var self = Ti.UI.createWindow({	backgroundGradient : {
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
        }});
		var tableData = [ 
	{title: 'Apples',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}, amount:322,date:new Date(2009,02,01)}, 
	{title: 'Bananas',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},amount:156,date:new Date(2011,09,09)}, 
	{title: 'Carrots',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},amount:432,date:new Date(2007,0,01)},
	{title: 'Powder',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},amount:1032,date:new Date(2008,02,01)},  
	{title: 'Potatoes',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},amount:789,date:new Date(2006,03,28)},
	{title: 'Apples',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}, amount:322,date:new Date(2009,02,01)}, 
	{title: 'Bananas',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},amount:156,date:new Date(2011,09,09)}, 
	{title: 'Carrots',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},amount:432,date:new Date(2007,0,01)},
	{title: 'Powder',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},amount:1032,date:new Date(2008,02,01)},  
	{title: 'Potatoes',font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},amount:789,date:new Date(2006,03,28)}];
////////////////////////////////Scroll View//////////////////////	
	var scrollView = Ti.UI.createScrollView({
	  contentWidth: 'auto',
	  contentHeight: 'auto',
	  showVerticalScrollIndicator: true,
	  showHorizontalScrollIndicator: true,
	  height: '100%',
	  width: '100%',
	  top:0,
	});
	
	self.add(scrollView);
	
///////////////////////////////// create js Date object //////////////////////////////
var minDate = new Date();
minDate.setFullYear(1901);
minDate.setMonth(00);
minDate.setDate(01);
formatDate:(minDate, "yyyy-mm-dd");

var maxDate = new Date();
maxDate.getDate();
maxDate.getMonth();
maxDate.getFullYear();
formatDate:(maxDate, "yyyy-mm-dd");

var setValue = new Date();
setValue.setFullYear(2014);
setValue.setMonth(05);
setValue.setDate(30);  
//Title for Datepicker 
var from =Ti.UI.createLabel({
	text:"Select a date from:",
	font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},
	width:"100%",
	textAlign:"left",
	top: '72',
	color:"white"
});
//Title for Datepicker 
var to =Ti.UI.createLabel({
	text:"Select a date to:",
	width: "100%",
	font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},
	textAlign:"left",
	top: '190',
	color:"white"
});
//Create DatePicker
var pickerFrom = Ti.UI.createPicker({
	top: '110',
	width: "60%",
	left:"13%",
	selectionIndicator:true,
	minDate: minDate,
	calendarViewShown:true,
	//value:setValue,
	maxDate:maxDate,
	type: Ti.UI.PICKER_TYPE_DATE,
	font:{fontSize:"100"},
	useSpinner: true
});
//Create DatePicker

var pickerTo = Ti.UI.createPicker({
	top: '230',
	width: "60%",
	left:"13%",
	//value:setValue,
	selectionIndicator:true,
	formatDate:"yyyy-mm-dd",
	minDate: minDate,
	maxDate:maxDate,
	type: Ti.UI.PICKER_TYPE_DATE,
	font:{fontSize:"40"},
	useSpinner: true
});

pickerFrom.addEventListener("change",function(e){
	pickerFrom.setValue(e.value);
	
});

pickerTo.addEventListener("change",function(e){
	pickerTo.setValue(e.value);
	
});

 scrollView.add(from);
 scrollView.add(to);
 scrollView.add(pickerFrom);
 scrollView.add(pickerTo);
 
//////////////////////////////////Total Sales//////////////////////////////
var amtLabel= Ti.UI.createLabel({
		text:"Sales Amount:",
		top: '0',
		color: "white",
		font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},
		//backgroundColor:"#990033",
		height:"30",
		width:"100%",
		left:0
		
	});
	scrollView.add(amtLabel);
//Auto Display Sales Amount Here	
	var calAmt = Ti.UI.createTextField({
		  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		  hintText:"Auto Generate",
		  backgroundColor:"lightgrey",
		  font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},
		  color: 'black',
		  top: 38, 
		  left:"13%",
		  width: "50%", 
		  height: 35,
		  editable: false
	});
	scrollView.add(calAmt); 
 
////////////////////////////Search btn//////////////////////////////////////	
	var searchBtn = Ti.UI.createButton({
		title:"Generate",
		color:"white",
		font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},
		top: '36',
		right:"5%",
		height:"auto",
		width:"auto",
		value:100,
		
		backgroundImage: '../../images/custom-slider-left.png',
    	backgroundSelectedImage:'../../images/custom-slider-right.png',
	});
	scrollView.add(searchBtn);
	

searchBtn.addEventListener('click', function(e){
var totalSales = 0;
for(i=0;i<tableData.length;i++)
	{
	if(tableData[i].date>=pickerFrom.value&&tableData[i].date<=pickerTo.value)
	{
	    totalSales=tableData[i].amount+totalSales;
    }

	} 
	    alert(totalSales+"Select Date From :"+pickerFrom.value+"Select Date To :"+pickerTo.value);
	    calAmt.hintText="$ "+totalSales.toString();
	});

/////////////////////////////////Example how the past transection was//////////////
	var pastTrans = Ti.UI.createLabel({
		top: 310,
	  	text:'Past Sales Transactions',
	  	color:'white',
	  	width:"100%",
	  	font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}
	  	//backgroundColor:"#990033"
	});
	scrollView.add(pastTrans);

	
	var rowData = []; //An array that will hold our row objects created by createTableViewRow
	for(var i = 0; i < tableData.length; i++){
		
		//Create the row
		var row = Titanium.UI.createTableViewRow({
			title:tableData[i].title,			//Text to appear in the row (e.g. "This is row 1")
			url:tableData[i].leftImage,	//Image to appear to the right of the title
			font:tableData[i].font,	//A name for this row template (use this property for rows that have similar structures (but not necessarily similar data))
			date:tableData[i].date,	
			hasChild:true					//Renders an arrow on the right
		});
		
		//3. Store the created TableViewRows in a new array
		rowData.push(row);
	}
	
	var table = Ti.UI.createTableView({
	  data:rowData,
	  text:rowData[3],
	  top: 340
	});
	scrollView.add(table);

/////////////////////////////////NewOrder Button////////////////////////
	var footerLeft = Titanium.UI.createButton({
		title:"+ New Order",
		color: "white",
		marginLeft: "50%",
		bottom:0,
		width:"100%",
		backgroundColor:"#cccc66" //golden color "" 
	});
	self.add(footerLeft);
     
footerLeft.addEventListener('click', function(e){
    var newTransWindow = Ti.UI.createWindow({
        backgroundGradient : { 
			type : 'linear', 
			startPoint : { x : '0%', y : '0%' }, 
			endPoint : { x : '0%', y : '100%' }, 
			colors : [{ color : '#141F33', offset : 0.0 }, { color : '#527ACC', offset : 0.25 }, { color : '#3D5C99', offset : 0.5 }, { color : '#293D66', offset : 0.75 }, { color : '#141F33', offset : 1.0 }] 
			},
        title: "New Transaction",
        url:"bizInfo_1.js"
    });
    newTransWindow.open();
});
//Partner Contact********************************************************************************************************************************************************
 // this sets the background color of the master UIView (when there are no windows/tab groups on it)
 // create tab grou
 
// create base UI tab and root window
//
var win2 = Titanium.UI.createWindow({	backgroundGradient : {
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
        }});

 var staffSection = Ti.UI.createListSection({ headerTitle:'Staff'});
	var staffContact = [  
		{Title:'Alan',contact:'8989 2341', email:"alan@gmail.com"}, 
		{Title:'Jo',contact:'8970 7021', email:"Jo@gmail.com",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}}, 
		{Title:'Tom',contact:'9324 8792', email:"Tom@gmail.com",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}}, 
		{Title:'Candy',contact:'9023 9421', email:"alan@gmail.com",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}}, 
		{Title:'Sam',contact:'9234 1278', email:"alan@gmail.com",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}}, 
		{Title:'Oranges',contact:'8879 2492', email:"alan@gmail.com",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},   
		{Title:'Peter',contact:'8897 0912', email:"peter@gmail.com",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},  
		{Title:'Tiger',contact:'8123 6879', email:"tiger@gmail.com",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},   
		{Title:'Trix',contact:'9832 4124', email:"trix@gmail.com",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}}
	];
 
var table= Ti.UI.createTableView({
  width:"100%",

  minRowHeight:60
});
win2.add(table);
 
var alphaTable = Ti.UI.createTableView({
  //separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
  opacity:0.65,
  scrollable:false,
  right:0,
  top:0,
  width:28,
  height:"100%",
  borderRadius:13,
  color:"black"
});
// alpha table must be on top of other table
win2.add(alphaTable);
 
 
 
 
var curheader = '0';
var index = [];
var rows = [];   
var alphaRowCount = 0;
 
// loop through staffContact to add rows to table
for (var i = 0, l = staffContact.length; i < l; i++) 
{
 
  // first determine how many rows there will be
  // use substring to get only first letter
  if( staffContact[i].Title.substring(0,1) != curheader)
  {
    curheader = staffContact[i].Title.substring(0,1);
    alphaRowCount++;
  }
 
   var row = Ti.UI.createTableViewRow({title:staffContact[i].Title,font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},leftImage:"../../images/cP.png"});
   rows.push( row );
}
 
// reset curheader var
curheader = '0'; 
 
// determine Row height by dividing by Alpha Table height
var rowHeight = 200/alphaRowCount;
 
var rowIndexID = [];
 
// now loop through staffContact again to actually add the alpha rows
for (var i = 0, l = staffContact.length; i < l; i++) 
{  
 
  if( staffContact[i].Title.substring(0,1) != curheader)
  {
    curheader = staffContact[i].Title.substring(0,1);
    var alphaRow = Ti.UI.createTableViewRow({
        color:'#fff',
        width:28,
        backgroundColor:"transparent",
        backgroundSelectedColor:"transparent",
        selectedBackgroundColor: "transparent"
    });
 
    alphaRow.height = rowHeight;
 
    // define IndexRow for main Table
    rowIndexID.push( { id: i });
 
    var alphaLabel = Ti.UI.createLabel({
          top:0, 
          width:28,
          left: 0,
          font: { fontSize:10, fontFamily: 'Helvetica Neue' },
          color: '#fff',
          textAlign: 'center'
    });
    alphaLabel.text = curheader;
    alphaLabel.height = rowHeight;
    alphaRow.add(alphaLabel );
 
    index.push(alphaRow );
  }
}
 
table.setData(rows);
alphaTable.setData(index);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
bizTable.addEventListener('click', function(e){
	if(e.rowData.title=="Sales Transaction Record")
{
self.open();
}
else{
	
	win2.open();
}
});
bizWin.add(self);

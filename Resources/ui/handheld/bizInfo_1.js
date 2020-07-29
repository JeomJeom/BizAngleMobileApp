var self = Titanium.UI.currentWindow;

/////////////////////////////////////Product Name///////////////
var prodLabel = Ti.UI.createLabel({
    text: "Product Name",
    color:'white',
    top:4,
    left:'5%',
    font:{fontSize:"20"}
});
self.add(prodLabel);

var prodText = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	top: 30, 
  	width: 250, 
  	left:'5%',
  	height: "35",  	
  	hintText:'type or click "Browse"',
  	color:'black',
 	backgroundColor:' lightgrey',
 	editable:true,
 	allowEditing:true,
 	rightButton:browseBtn
});
self.add(prodText);

// link to Product Library files
	var browseBtn = Ti.UI.createButton({
		title:"Browse",
		top: '27',
		height:30,
		right:"5%",
		backgroundImage: '../../images/custom-slider-left.png',
    	backgroundSelectedImage:'../../images/custom-slider-right.png'
	});
	self.add(browseBtn);
	
	browseBtn.addEventListener("click", function(e){
		prodLibWin.open();
	});

//////////////////////////////////////Price//////////////////////////////////
var priceLabel = Ti.UI.createLabel({
    text: "Price",
    color:'white',
    left:'5%',
    top:80,
    font:{fontSize:"20"},
    textAlign: "left"
});
self.add(priceLabel);

var priceText = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	top: 110, 
  	left:'5%',
  	width: "40%", 
	height: 35, 
  	color:'black',
 	backgroundColor:' lightgrey',
});
self.add(priceText);

/////////////////////////////////////////////Qty////////////////////////
var QtyLabel = Ti.UI.createLabel({
    text: "Quatity",
    right:"30%",
    color:'white',
    top:80,
    font:{fontSize:"20"},
    textAlign: "left"
});
self.add(QtyLabel);

var QtyText = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	top: 110, 
  	right: '5%', 
  	width: "40%", 
	height: 35, 
  	color:'black',
  	hintText:'eg. 1',
 	backgroundColor:' lightgrey',
});
self.add(QtyText);

//////////////////////////////////Date of Sales///////////////////////////////
var dateSalesLabel = Ti.UI.createLabel({
    text: "Date of Sales",
    color:'white',
    top:160,
    font:{fontSize:"20"},
    left:"5%"
});
self.add(dateSalesLabel);

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
var datepicker = Ti.UI.createPicker({
  type:Ti.UI.PICKER_TYPE_DATE,
  minDate:minDate,
  maxDate:maxDate,
  value:new Date(2014,11,31),
  top:200,
  width:"97.5%",
  backgroundColor:'lightgray',
  height: 150,
  font: {
  		fontFamily:"arial",
  		fontSize:24
		}
});
self.add(datepicker);
/////////////////////////////Added Products/////////////////////////
	var prodTable = Ti.UI.createTableView({
		top: "400",
		left: 20,
		right:20,
		font:{fontSize:"20"},
		value:true
	});
	self.add(prodTable);
	
	prodTable.addEventListener('click',function(e){
		if (e.value ==true){
			e.row.hasCheck = true;
		} else {
			e.row.hasCheck = false;
		}
	});

//////////////////////////////Add ///////////////////////////////////
var addBtn = Ti.UI.createButton({
		title:"Add",
		top: '360',
		right:"5%",
		backgroundImage: '../../images/custom-slider-left.png',
    	backgroundSelectedImage:'../../images/custom-slider-right.png'
	});
	self.add(addBtn);
	addBtn.addEventListener('click', function(e){
    if (prodText.value && priceText.value&&QtyText.value&&datepicker.value !=null){
		    prodTable.appendRow({title:prodText.value,color:'black',backgroundColor:"#FFFFCC"}),
		    prodText.value ="";
		    prodText.blur();
	    } else {
	    	alert ('Fail: Please fill in all the text field');
	    }
	});	

/////////////////////////////////Footer/////////////////////////////
var footerYes = Titanium.UI.createButton({
		title:"Done",
		color: "white",
		marginLeft: "50%",
		top: "520",
		width:"50%",
		right:"0",
		backgroundColor:"#cccc66", //golden color
	});
	self.add(footerYes);
	
	footerYes.addEventListener('click', function(e){
		self.close();
	});
	
	var footerNo = Titanium.UI.createButton
	({
		title:"Delete",
		color: "white",
		marginLeft: "50%",
		top: "520",
		width:"50%",
		left:"0",
		backgroundColor:"#cccc66", //golden color
	});
	self.add(footerNo);
	footerNo.addEventListener('click', function(e){
		/*
			var alertD = Ti.UI.createAlertDialog({
			title: 'Delete',
			message: 'Do you want to delete it ?',
			buttonNames: ['OK','Cancel']
		}).show();
		
       alertD.addEventListener('click',function(e){
       	  
       });
     */
     self.close();
	});
	
///////////////////////////// New Window --- Product list////////////////////	
	var prodLibWin = Ti.UI.createWindow({
			backgroundGradient : { 
			type : 'linear', 
			startPoint : { x : '0%', y : '0%' }, 
			endPoint : { x : '0%', y : '100%' }, 
			colors : [{ color : '#141F33', offset : 0.0 }, { color : '#527ACC', offset : 0.25 }, { color : '#3D5C99', offset : 0.5 }, { color : '#293D66', offset : 0.75 }, { color : '#141F33', offset : 1.0 }] 
			},
			title:"Select Product"
		});
		
	var product = [
		  {  Title:'Alphabits' }, 
		  {  Title:'Biscuits' }, 
		  {  Title:'Cake' }, 
		  {  Title:'Candy' }, 
		  {  Title:'Green Beans' }, 
		  {  Title:'Oranges' },   
		  {  Title:'Pasta' },  
		  {  Title:'Tangerines' },   
		  {  Title:'Trix' },     
		  {  Title:'Zucchini Bread' } 
	];
 
var table = Ti.UI.createTableView({
  width:'100%',
  data:prodListRows,
  rowHeight:100
});
prodLibWin.add(table);

var alphaTable = Ti.UI.createTableView({
  opacity:0.65,
  scrollable:false,
  right:5,
  top:5,
  width:28,
  height:"90%",
  borderRadius:13,
  backgroundColor:"#000"
});
// alpha table must be on top of other table
prodLibWin.add(alphaTable);
 
 
var curheader = '0';
var index = [];
var prodListRows = [];   
var alphaRowCount = 0;
 
// loop through product to add rows to table
for (var i = 0, l = product.length; i < l; i++) 
{
 
  // first determine how many rows there will be
  // use substring to get only first letter
  if( product[i].Title.substring(0,1) != curheader)
  {
    curheader = product[i].Title.substring(0,1);
    alphaRowCount++;
  }
 
   var row = Ti.UI.createTableViewRow(
	   	{ title:product[i].Title });
	   prodListRows.push( row );
	}
 
// reset curheader var
curheader = '0'; 
 
// determine Row height by dividing by Alpha Table height
var rowHeight = 355/alphaRowCount;
 
var rowIndexID = [];
 
// now loop through product again to actually add the alpha rows
for (var i = 0, l = product.length; i < l; i++) 
{  
 
  if( product[i].Title.substring(0,1) != curheader)
  {
    curheader = product[i].Title.substring(0,1);
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
          font: {  fontSize: 10, fontFamily: 'Helvetica Neue' },
          color: '#fff',
          textAlign: 'center'
    });
    alphaLabel.text = curheader;
    alphaLabel.height = rowHeight;
    alphaRow.add( alphaLabel );
 
    index.push( alphaRow );
  }
}
 
table.setData(prodListRows);
alphaTable.setData(index); 
var previousIndex = 0;
 
alphaTable.addEventListener('touchmove', function(e)
{
    // subtract from global point to find position
    var newPointY = e.globalPoint.y - 70;
 
    // determine the index
    var newIndex = Math.ceil( newPointY/rowHeight) - 1;
 
    var rowIndex = rowIndexID[ newIndex ].id;
 
  // scroll to index on main Table, and make sure its on the TOP position
  // to make sure it doesnt jiggle, check to make sure newIndex is not the same as previousIndex
 if( rowIndex != previousIndex )
  {
    table.scrollToIndex(rowIndex,{animated:false,position:Ti.UI.iPhone.TableViewScrollPosition.TOP});
    previousIndex = newIndex;
  }
});
////////////////////listener/////////////////
table.addEventListener("click", function(e){
	//prodText.hintText = e.source.title;
	prodText.value=e.source.title;
	//Slide-open the window
	prodLibWin.close();
	
});

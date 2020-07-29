//Define current window
  var productWindow = Titanium.UI.currentWindow;
//Create Main View
   var productView = Ti.UI.createListView({width:"97.5%",height:"90%",top:5});
   
   var data =[
   {Img:"../../images/p1.jpg",pD:"null",date:"2010,1,2",title:"Air Force Nike",qty:120,unit:"kg",price:"234",hasDetail:true,header:"Sports Wear",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},
   {Img:"../../images/p2.jpg",pD:"null",date:"2010,4,8",title:"New Balance 574",qty:250,unit:"kg",hasDetail:true,font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},
   {Img:"../../images/p3.jpg",pD:"null",date:"2012,6,1",title:"Iphone Cover",qty:50,unit:"kg",hasDetail:true,header:"IT Accessories",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},
   {Img:"../../images/p4.jpg",pD:"null",date:"2010,7,2",title:"Water Bottole",qty:2540,unit:"kg",hasDetail:true,header:" Living Equipment",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},
   {Img:"../../images/p5.png",pD:"null",date:"2008,11,12",title:"Alarm o'Clock'",hasDetail:true,qty:2350,unit:"kg",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},
   {Img:"../../images/p6.jpg",pD:"null",date:"2007,5,12",title:"Baby Clothes",hasDetail:true,unit:"kg",qty:2250,header:"Clothes",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},
   {Img:"../../images/p7.jpg",pD:"null",date:"2010,11,12",title:"Apple",hasDetail:true,qty:20,unit:"kg",header:"Food & Beverage",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}},
   {Img:"../../images/p8.jpg",pD:"null",date:"2010,10,2",title:"Childhood Biscuit",hasDetail:true,qty:1250,unit:"kg",font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'}}
   ];

var searchBar = Ti.UI.createSearchBar({
	showCancel:true,
	hintText:"Search Here"
});



//Create Table view for products
   var productCatView = Ti.UI.createTableView({
   	width:"100%",
   	top:0,
   	height:500,
   	rowBorder:3,
   	rowBorderColor:"black",
   	minRowHeight :60,
   	data:data,
    search:searchBar
   });
productCatView.addEventListener("click",function(e){
	if (e.rowData.hasDetail){
		
		var newWin =Ti.UI.createWindow({
			backgroundGradient : { type : 'linear', startPoint : { x : '0%', y : '0%' }, endPoint : { x : '0%', y : '100%' }, colors : [{ color : '#141F33', offset : 0.0 }, { color : '#527ACC', offset : 0.25 }, { color : '#3D5C99', offset : 0.5 }, { color : '#293D66', offset : 0.75 }, { color : '#141F33', offset : 1.0 }, ] },
			title:e.rowData.title
		});
		var newView= Ti.UI.createView({});
		var newView1=Ti.UI.createScrollView({});
//**Edit Info************************************************************************************************************************************************************
    var productImg = Titanium.UI.createImageView({
				width:"97.5%",
				height:200,
				borderWidth:5,
			    borderColor:"grey",
				top:0,
				image:e.rowData.Img,
				bottom:0,
				zIndex:1
				
			});

var newPName = Ti.UI.createLabel({
  		top: 204,
  	text:'Product Name',
  	width:"97.5%",
  	color:'white',
  	textAlign: 'left',
  	font: {
  		fontFamily:"arial"
		}
});

var pText = Ti.UI.createTextField({
  	top: 225, width: 200, height: 35, 
  	value:e.rowData.title,
  	color:'white',
  	width:"97.5%",
 //	backgroundColor:'lightgray',
	font: {
  		fontFamily:"arial"
		}
});



var descLabel = Ti.UI.createLabel({
	top: 260,
  	text:'Product Description',
  	color:'white',
  	width:"97.5%",
  	font: {
  		fontFamily:"arial"
		}
});

var descText = Ti.UI.createTextArea({
  top: 280, width: '100%', height :70,
  value:e.rowData.pD,
  color:'white',
  width:"97.5%",
 // backgroundColor:'lightgray',
  font: {fontSize:12, fontWeight:'bold'},
  returnKeyType: Ti.UI.RETURNKEY_GO,
  font: {
  		fontFamily:"arial"
		}
  
});

// PICKER
var dateLabel = Ti.UI.createLabel({
	top: 350,
	text:'Record Date',
	color:'white',
	width:"97.5%",
	font: {
  		fontFamily:"arial",
		}
});

var datepicker = Ti.UI.createPicker({
  type:Ti.UI.PICKER_TYPE_DATE,
  minDate:new Date(2009,0,1),
  maxDate:new Date(2014,11,31),
  value:new Date(e.rowData.date),
  top:380,
  width:"97.5%",
  //backgroundColor:'lightgray',
  height: 150,
  font: {
  		fontFamily:"arial",
  		fontSize:24
		}
  
});
//Product amount property
var units = [
{title:"Kg",val:"kg"},
{title:"Gram",val:"g"},
{title:"Liter",val:"l"},
{title:"Box",val:"box"},
{title:"Package",val:"pkg"},
{title:"Piece",val:"p"},
{title:"Batch",val:"b"}
];

var unitColumn = Titanium.UI.createPickerColumn({width:70,height:100});
for(var i=0;i<units.length;i++){
	unitColumn.addRow(Ti.UI.createPickerRow({title:units[i].title,val:units[i].val}));
}

var picker = Titanium.UI.createPicker({
	selectionIndicator:true,
	useSpinner: true,//This will only affect Android
	type :Titanium.UI.PICKER_TYPE_PLAIN,
	top:573,
	left:70,
	val:e.rowData.unit,
	columns:[unitColumn],
	width:100,
	height:150
});
//QWuantity Label
var qtyLabel = Ti.UI.createLabel({
  	top: 550,
  	text:'Quantity',
  	width:"97.5%",
  	color:'white',
  	textAlign: 'left',
  	font: {
  		fontFamily:"arial"
		}
});
var qtyText = Ti.UI.createTextArea({
  //left:100,
  top:580, 
  height :35,
  value:e.rowData.qty,
  color:'white',
  width:"12%",
  left:"2.5%",
 // backgroundColor:'lightgray',
  font: {fontSize:12, fontWeight:'bold'},
  returnKeyType: Ti.UI.RETURNKEY_GO,
  font: {
  		fontFamily:"arial"
		}
  
});
//QWuantity Label
var priceLabel = Ti.UI.createLabel({
  	top: 550,
  	left:180,
  	text:'Price(*If Any)',
  	width:"97.5%",
  	color:'white',
  	textAlign: 'left',
  	font: {
  		fontFamily:"arial"
		}
});
var priceText = Ti.UI.createTextArea({
  //left:100,
  top:580, 
  height :35,
  value:e.rowData.price,
  color:'white',
  width:"30%",
  left:"180",
  //backgroundColor:'lightgray',
  font: {fontSize:12, fontWeight:'bold'},
  returnKeyType: Ti.UI.RETURNKEY_GO,
  font: {
  		fontFamily:"arial"
		}
  
});
var pCodeLabel = Ti.UI.createLabel({
  	top: 615,
  	left:180,
  	text:'Product Code ',
  	width:"97.5%",
  	color:'white',
  	textAlign: 'left',
  	font: {
  		fontFamily:"arial"
		}
});
var pCodeText = Ti.UI.createTextArea({
  //left:100,
  top:640, 
  height :35,
  color:'white',
  width:"30%",
  left:"180",
  value:makeid(),
  //backgroundColor:'lightgray',
  font: {fontSize:12, fontWeight:'bold'},
  returnKeyType: Ti.UI.RETURNKEY_GO,
  font: {
  		fontFamily:"arial"
		},
  editable:false
  
});
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
var saveBtn = Ti.UI.createButton({
	title:'Save',
	backgroundColor:"#cccc66",
	zIndex:2,
	width:"100%", height:50,bottom:0
});
newView.add(qtyLabel);
newView.add(priceLabel);
newView.add(priceText);
newView.add(qtyText);
newView.add(picker);
newView.add(pCodeLabel);
newView.add(pCodeText);
newView.add(productImg);
newView.add(newPName);
newView.add(pText);	
newView.add(descLabel);
newView.add(descText);
newView.add(dateLabel);
newView.add(datepicker);
newView1.add(saveBtn);
newView1.add(newView);
newWin.add(newView1);
saveBtn.addEventListener("click",function(e){
	
	newWin.close();
	
});
productImg.addEventListener("click",function(e){
			
		var newWin2 =Ti.UI.createWindow();
		var	productImgFull =  Ti.UI.createImageView({
			width:"100%",
			height:"100%",
			image:productImg.image
		});
		newWin2.navBarHidden = true;
		newWin2.add(productImgFull);
		newWin2.open();
			
			});

//***********************************************************************************************************************************************************************

				newWin.open();
	}
	else{
		
		alert("The page is coming soon !");
	}
}); 
var addNewBtn = Titanium.UI.createButton({
		title:"+ New Product",
		color: "white",
		marginLeft: "50%",
		bottom:0,
		width:"100%",
		backgroundColor:"#cccc66" //golden color "" 
	});
addNewBtn.addEventListener("click",function(e){

		var newWin =Ti.UI.createWindow({
			
			title:"Add A New Product",
			url:"product_1.js"
		});
				newWin.open();
	
}); 
    productWindow.add(addNewBtn);
    productView.add(productCatView);
	productWindow.add(productView);
	


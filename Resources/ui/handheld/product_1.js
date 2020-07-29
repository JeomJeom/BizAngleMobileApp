/// NEW GOAL TEXT(LABEL)
  var newPWin = Titanium.UI.currentWindow;
//Create Main View
   var newScrollView= Ti.UI.createScrollView({});
   var newPView = Ti.UI.createView({
   	backgroundGradient : { type : 'linear', startPoint : { x : '0%', y : '0%' }, endPoint : { x : '0%', y : '100%' }, colors : [{ color : '#141F33', offset : 0.0 }, { color : '#527ACC', offset : 0.25 }, { color : '#3D5C99', offset : 0.5 }, { color : '#293D66', offset : 0.75 }, { color : '#141F33', offset : 1.0 }, ] },
    height:"auto"
   	
   });
//Product Image	
var productImg = Titanium.UI.createImageView({
				width:"97.5%",
				height:200,
				borderWidth:5,
			    borderColor:"grey",
				top:0,
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
  	hintText:'Name',
  	color:'white',
  	width:"97.5%",
 	//backgroundColor:'lightgray',
	font: {
  		fontFamily:"arial"
		}
});

// NEW GOALDESCRIPTION

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
  hintText:'Product Description',
  color:'white',
  width:"97.5%",
  //backgroundColor:'lightgray',
  font: {fontSize:12, fontWeight:'bold'},
  returnKeyType: Ti.UI.RETURNKEY_GO,
  font: {
  		fontFamily:"arial"
		}
  
});
var subView = Ti.UI.createView({});
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
  value:maxDate,
  top:380,
  width:"95%",
  //backgroundColor:'lightgray',
  height:150,
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

/////////////////////////////////Footer/////////////////////////////
//Add a new product
var footerYes = Titanium.UI.createButton({
		title:"Done",
		color: "white",
		marginLeft: "50%",
		bottom:0,
		width:"50%",
		right:"0",
		zIndex:2,
		backgroundColor:"#cccc66", //golden color
	});
	newPView.add(footerYes);
//delect the adding
	var footerNo = Titanium.UI.createButton
	({
		title:"Delete",
		color: "white",
		marginLeft: "50%",
		bottom:0,
		zIndex:2,
		width:"50%",
		left:"0",
		backgroundColor:"#cccc66", //golden color
	});
	newScrollView.add(footerNo);


// Add Product Image Button
var openCameraBtn = Ti.UI.createButton({
	
	width:50, height:50,top: 144,left:'3%',
	zIndex:2,
   	backgroundImage: '../../images/camera.png',
   	backgroundSelectedImage: 'images/button8050selected.png'
});
footerYes.addEventListener("click",function(e){	
		if(pText==null){
			alert("Please enter a name of a product");
		}
		else
		{
			newPWin.close;	
		}
});
footerNo.addEventListener('click', function(e){
       newPWin.close();
	});
footerYes.addEventListener('click', function(e){
	if(pText.value!=null)
	{
		//var productWindowF=Ti.include('productWindow.js');
		//productWindowF.data.push({title:pText.value,Img:productImg.image,qty:qtyText.value,font:{fontSize:24,fontFamily:'arial',fontWeight:'bold'},date:datepicker.value});
		/*
		var row = Ti.UI.createTableViewRow({
		index:count
	});
	*/
       newPWin.close();
       
       
      }
      else{
      	alert("Please Fill Up Information");
      }
	});
openCameraBtn.addEventListener("click",function(e){
	Titanium.Media.showCamera({
		success:function(e){
          productImg.setImage(e.media);
		},
		error:function(e){
			
			alert("There was an error");
		},
		cancel:function(e){
			alert("Taking photo was cancelled");
		},
		allowEditing:true,
		mediaType:[Titanium.Media.MEDIA_TYPE_PHOTO]
	});	
});
// NEW GOAL ADDS
newPView.add(qtyLabel);
newPView.add(priceLabel);
newPView.add(priceText);
newPView.add(qtyText);
newPView.add(picker);
newPView.add(pCodeLabel);
newPView.add(pCodeText);
newPView.add(productImg);
newPView.add(newPName);
newPView.add(pText);	
newPView.add(descLabel);
newPView.add(descText);
newPView.add(dateLabel);
newPView.add(datepicker);
newPView.add(openCameraBtn);
newScrollView.add(newPView);
// NEWGOAL BUTTONS


newPWin.add(newScrollView);
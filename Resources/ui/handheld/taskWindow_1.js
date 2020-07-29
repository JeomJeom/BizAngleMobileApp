var arial = 'arial';
arial = 'arial';

var newgoalWin = Ti.UI.currentWindow;
	
var newgoalView = Ti.UI.createView({
	top:0, left:'5%',
	width: '90%',
	backgroundGradient :{ type : 'linear', startPoint : { x : '0%', y : '0%' }, endPoint : { x : '0%', y : '100%' }, colors : [{ color : '#141F33', offset : 0.0 }, { color : '#527ACC', offset : 0.25 }, { color : '#3D5C99', offset : 0.5 }, { color : '#293D66', offset : 0.75 }, { color : '#141F33', offset : 1.0 }, ] },
	height: Ti.UI.SIZE
	
});
var newgoalName = Ti.UI.createLabel({
  		top: 4, left:0,
  	text:'Goal Name',
  	color:'white',
  	textAlign: 'left',
  	font: {
  		fontFamily:arial
		}
});

var goalText = Ti.UI.createTextField({
  	top: 25, left:0, width: 200, height: 35, 
  	hintText:'Goal',
  	color:'white',
 	//backgroundColor:'lightgray',
	font: {
  		fontFamily:arial
		}
});
// NEW GOALDESCRIPTION

var descLabel = Ti.UI.createLabel({
	top: 60,left:0,
  	text:'Goal Description',
  	color:'white',
  	font: {
  		fontFamily:arial
		}
});

var descText = Ti.UI.createTextArea({
  top: 80, left:0, width: '100%', height :70,
  hintText:'Description',
  color:'white',
  //backgroundColor:'lightgray',
  font: {fontSize:12, fontWeight:'bold'},
  returnKeyType: Ti.UI.RETURNKEY_GO,
  font: {
  		fontFamily:arial
		}
  
});

// PICKER
var dateLabel = Ti.UI.createLabel({
	top: 150, left:0,
	text:'Deadline',
	color:'white',
	font: {
  		fontFamily:arial,
		}
});

var datepicker = Ti.UI.createPicker({
  type:Ti.UI.PICKER_TYPE_DATE,
  minDate:new Date(2009,0,1),
  maxDate:new Date(2014,11,31),
  value:new Date(2014,3,12),
  top:170,
  //backgroundColor:'lightgray',
  width: '100%',
  height: 150,
  font: {
  		fontFamily:arial,
  		fontSize:24
		}
});

// NEW GOAL BUTTONS

var createbtn = Ti.UI.createButton({
	title:'Create',
	width:80, height:50, top: 10, right:'5%',
   	backgroundImage: '../../images/button8050.png',
   	backgroundSelectedImage: '../../images/button8050selected.png'
});
createbtn.addEventListener("click", function(e){
	
	newgoalWin.close();
	
});


// NEW GOAL ADDS
newgoalView.add(newgoalName);
newgoalView.add(goalText);	
newgoalView.add(descLabel);
newgoalView.add(descText);
newgoalView.add(dateLabel);
newgoalView.add(datepicker);
newgoalView.add(createbtn);
newgoalWin.add(newgoalView);
// NEWGOAL BUTTONS


var arial = 'arial';
arial = 'arial';

// WINDOW
var goalWin =Titanium.UI.currentWindow;

// TABLEVIEW
var goalView = Ti.UI.createView({
	
	backgroundGradient : { type : 'linear', startPoint : { x : '0%', y : '0%' }, endPoint : { x : '0%', y : '100%' }, colors : [{ color : '#141F33', offset : 0.0 }, { color : '#527ACC', offset : 0.25 }, { color : '#3D5C99', offset : 0.5 }, { color : '#293D66', offset : 0.75 }, { color : '#141F33', offset : 1.0 }, ] }
});
var goal_data = [];
var count =-1;
for (var x = 1; x <= 3; x++){
count++;
var row = Ti.UI.createTableViewRow({
	index:count
});

// BUTTONS ADD

var button = Ti.UI.createButton({
	right: 10,
	title: 'Edit',
	font: {
		fontFamily:arial,
		fontSize: 18
	},
	backgroundImage: '../../images/button8050.png',
	backgroundSelectedImage: '../../images/button8050selected.png'
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

button.addEventListener("click",function(e){
	editgoalWin.open();		
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var button2 = Ti.UI.createButton({
	right: 80,
	title: 'delete',
	font: {
		fontFamily:arial,
		fontSize: 18
	}
});

// LABEL ADD

var task = Ti.UI.createLabel({
	text: 'Task ' + (x),
	left:30,
	font: {
		fontFamily:arial,
		fontWeight:"bold",
		fontSize: 24
	}
});




row.add(button);
row.add(task);
goal_data.push(row);

}

// CREATE ADD NEW TASK ROW

var addnew = Ti.UI.createButton({
	title:'+ New Task',
	//left:'33%',
	width:"100%",
	backgroundColor:"#cccc66",
	bottom:0,

});

// CREATE GOALTABLE
var goalTable = Ti.UI.createTableView({
	data:goal_data,
	editable:true,
	allowSelectionDuringEditing:true
});

// EDIT GOAL OPEN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var editgoalWin = Ti.UI.createWindow ({
	title:'Edit Goal',
	backgroundGradient : { type : 'linear', startPoint : { x : '0%', y : '0%' }, endPoint : { x : '0%', y : '100%' }, colors : [{ color : '#141F33', offset : 0.0 }, { color : '#527ACC', offset : 0.25 }, { color : '#3D5C99', offset : 0.5 }, { color : '#293D66', offset : 0.75 }, { color : '#141F33', offset : 1.0 }, ] }
});

var editgoalView = Ti.UI.createView({
	top:0, left:'5%',
	width: '90%',
		backgroundGradient :{ type : 'linear', startPoint : { x : '0%', y : '0%' }, endPoint : { x : '0%', y : '100%' }, colors : [{ color : '#141F33', offset : 0.0 }, { color : '#527ACC', offset : 0.25 }, { color : '#3D5C99', offset : 0.5 }, { color : '#293D66', offset : 0.75 }, { color : '#141F33', offset : 1.0 }, ] },
	height: '80%'
});

var editgoalName = Ti.UI.createLabel({
  	top: 4, left:0,
  	text:'Goal Name',
  	color:'white',
  	textAlign: 'left',
  	font: {
  		fontFamily:arial
		}
  	
});

var editgoalText = Ti.UI.createTextField({
  	top: 25, left:0, width: 200, height: 35, 
  	hintText:'Goal',
  	color:'white',
 	//backgroundColor:'lightgray',
	font: {
  		fontFamily:arial
		}
});
// NEW GOALDESCRIPTION

var editdescLabel = Ti.UI.createLabel({
	top: 60,left:0,
  	text:'Goal Description',
  	color:'white',
  	font: {
  		fontFamily:arial
		}
});

var editdescText = Ti.UI.createTextArea({
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
var editdateLabel = Ti.UI.createLabel({
	top: 150, left:0,
	text:'Deadline',
	color:'white',
	font: {
  		fontFamily:arial,
		}
});

var editdatepicker = Ti.UI.createPicker({
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
  		fontSize:18
		}
});

var editokbutton = Ti.UI.createButton({
	title: 'OK',
	width:80, height:50, right:'5%', top: 10,
   	backgroundImage: '../../images/button8050.png',
   	backgroundSelectedImage: '../../images/button8050selected.png'
});
editokbutton.addEventListener('click',function(e){
	editgoalWin.close();
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




// NEW GOAL OPEN

addnew.addEventListener("click",function(e){
		newgoalWin.open();
});
goalTable.addEventListener("click",function(e){
	if (e.source.title=='addtask'){
		newgoalWin.open();
	}
	});
	

var newgoalWin = Ti.UI.createWindow ({
	backgroundImage: 'images/bg.png',
	title:'Add new Goal/Task'
});
	
var newgoalView = Ti.UI.createView({
	top:0, left:'5%',
	width: '90%',
	height: Ti.UI.SIZE
	
});


// NEW GOAL TEXT(LABEL)
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
   	backgroundImage: 'images/button8050.png',
   	backgroundSelectedImage: 'images/button8050selected.png'
});


createbtn.addEventListener('click',function(e){
	var makegoaltext = goalText.getValue();
	
	var row = Ti.UI.createTableViewRow({
		index:count
	});
	
	var task = Ti.UI.createLabel({
	text: makegoaltext,
	left:30,
	font: {
		fontFamily:arial,
		fontSize: 24
	}
});
	row.add(task);
	row.add(button);
	goal_data.push(row);
	goalTable.setData(goal_data);
	newgoalWin.close();
	
	
});
goalView.add(goalTable);
goalView.add(addnew);
goalWin.add(goalView);
// NEW GOAL ADDS
newgoalView.add(newgoalName);
newgoalView.add(goalText);	

newgoalView.add(descLabel);
newgoalView.add(descText);

newgoalView.add(dateLabel);
newgoalView.add(datepicker);

newgoalWin.add(newgoalView);
// NEWGOAL BUTTONS

newgoalView.add(createbtn);
//PUSH ROW
editgoalView.add(editgoalName);
editgoalView.add(editgoalText);
editgoalView.add(editdescLabel);
editgoalView.add(editdescText);
editgoalView.add(editdateLabel);
editgoalView.add(editdatepicker);
editgoalView.add(editokbutton);
editgoalWin.add(editgoalView);
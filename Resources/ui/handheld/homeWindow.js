//First View
var homeView = Ti.UI.createView({
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
        }
        //eight:900
        });
 var titleView = Ti.UI.createView({
 	width:"100%",
	height:60,
	
   	top:0
   	});
	var titleLabel = Ti.UI.createLabel({
		height:"100%",
		width:"100%",
		bottom:0,
		left:120,
		text:'BizAngel',
		font:{fontSize:35,fontFamily:'algerian',fontWeight:'bold'},
		color:'white'
	});
	titleView.add(titleLabel);
//Logo View***********************************************************************************************************************************************************************  
   var homeWindow = Titanium.UI.currentWindow;
  // Add Logo View
   var homeView_logo = Ti.UI.createView({
   	//borderWidth:3,
	//borderColor:"blue",
	height:170,
   	top:60
   	});
	
	var addLogoBtn = Ti.UI.createButton({
		height:40,
		width:40,
		title:'+',
		borderWidth:5,
		color:'white',
		borderRadius:50,
		opacity:"10%",
		center:0,
		zIndex:2
			});
			
	var label = Ti.UI.createLabel({
		height:44,
		width:"100%",
		bottom:0,
		left:80,
		text:'Add Your Company Logo Here',
		font:{fontSize:15,fontFamily:'arial',fontWeight:'bold'},
		color:'white'
	});

//image view for logo	
var logoView = Titanium.UI.createImageView({
				width:"97.5%",
				height:"100%",
				//borderWidth:5,
				//borderColor:"black",
				top:0,
				bottom:0,
				zIndex:1
				
			});
//*********************************************************************************************************************************************************************
//Second Views
//Biz Info view
 var homeView_content = Ti.UI.createView({
 	//backgroundColor:"red",
 	width:"100%",
 	height:"100%",
 	top:235
 });
 
   var data =[
   {img:"../../images/h1.jpg",title:"Add Your Products",hasDetail:true,dest:'product_1.js'},
   {img:"../../images/h2.jpg",title:"Record Your Sales",hasDetail:true,dest:'bizInfo_1.js'},
   {img:"../../images/h3.jpg",title:"Set Your Business Tasks",hasDetail:true,dest:'taskWindow_1.js'},
   ];
   
   
   var rowData = [];
   
   for(var i= 0 ; i <data.length;i++){
   	
   	var img= Ti.UI.createImageView(
    {
   	image:data[i].img,
   	text:data[i].title,
   	link:data[i].dest,
   	height:200,
   	hasLink:true,
   	width:"100%"		
   	});
   	var bgBar = Ti.UI.createView({
   		height:36,
   		width:"100%",
   		link:data[i].dest,
   		text:data[i].title,
   		bottom:0,
   		hasLink:true,
   		left:0,
   		opacity: 0.8,
   		backgroundColor:"#000"	
   	});
   	var title = Ti.UI.createLabel({
   		text:data[i].title,
   		link:data[i].dest,
   		hasLink:true,
   		height:36,
   		width:"75%",
   		left:20,
   		bottom:0,
   		color:"white",
   		textAlign:"left"
   	});
var row = Ti.UI.createTableViewRow({
    text:data[i].title,
   	link:data[i].dest,
   	height:110,
   	selectionStyle:"red"

});

row.add(img);
row.add(bgBar);
row.add(title);
//row.add(amount);
rowData.push(row);
   	
   }
//Third View*********************************************************************************************************************************************************
var webView = Titanium.UI.createWebView({
	top:0,
	left:0
});
	var fbBtn = Ti.UI.createButton({
		height:140,
		width:120,
		right:2,
		top:0,
		borderWidth:5,
		borderColor:"black",
		url:"www.facebook.com",
		backgroundImage:"../../images/fb.jpg",
		color:'white'
			});
  	var twBtn = Ti.UI.createButton({
		height:100,
		width:120,
		right:2,
		top:240,
		borderWidth:5,
		borderColor:"black",
		backgroundImage:"../../images/tw.png",
		color:'white'
			});
   	var inBtn = Ti.UI.createButton({
		height:100,
		width:120,
		right:2,
		top:140,
		borderWidth:5,
		backgroundImage:"../../images/in.png",
		borderColor:"black",
		color:'white'
			});
var productCatView = Ti.UI.createTableView({
   	borderWidth:5,
	borderColor:"black",
   	width:"65%",
   	height:"95%",
   	top:0,
   	left:5,
   	selectionStyle:"red",
   	data:rowData

   });
	var webWin = Ti.UI.createWindow({
     top:0,
     left:0
	});
    homeView_content.add(fbBtn);
    homeView_content.add(twBtn);
    homeView_content.add(inBtn);
    homeView_content.add(productCatView);
//Event Listener**********************************************************************************************************************************************************

//Function for external link button
fbBtn.addEventListener("click",function(e){
	
webView.url="http://www.facebook.com";

	webWin.add(webView);
	webWin.open();
});
twBtn.addEventListener("click",function(e){
	
webView.url="https://twitter.com/";

	webWin.add(webView);
	webWin.open();
});
inBtn.addEventListener("click",function(e)
{
	
webView.url="http://instagram.com/#";

	webWin.add(webView);
	webWin.open();
});
//Function for add logo button
addLogoBtn.addEventListener("click",function(e){
	Titanium.Media.openPhotoGallery({
		success:function(e){
			logoView.setImage(e.media);
			homeView_logo.add(logoView);
			//logoView.setBackgroundColor("black");
			label.setVisible(false);
		},
		error:function(e){
			
			alert("There was an error");
		},
		cancel:function(e){
			alert("The photo gallery was cancelled");
		},
		allowEditing:true,
		mediaType:[Titanium.Media.MEDIA_TYPE_PHOTO]
	});	
});
//Function for row table view
productCatView.addEventListener("click",function(e){
			var newWin =Ti.UI.createWindow({
			backgroundGradient : { type : 'linear', startPoint : { x : '0%', y : '0%' }, endPoint : { x : '0%', y : '100%' }, colors : [{ color : '#141F33', offset : 0.0 }, { color : '#527ACC', offset : 0.25 }, { color : '#3D5C99', offset : 0.5 }, { color : '#293D66', offset : 0.75 }, { color : '#141F33', offset : 1.0 }, ] }
			
		});
	
	if(e.source.hasLink==true)
	{
             newWin.setTitle(e.source.text),
              newWin.setUrl(e.source.link),
              newWin.open();
	}			

});
homeView_content.add(productCatView);
homeView.add(titleView);
homeView.add(homeView_logo);
homeView.add(homeView_content);
homeView_logo.add(label);
homeView_logo.add(addLogoBtn);
homeWindow.add(homeView);
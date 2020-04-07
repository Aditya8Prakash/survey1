// made by Aditya Prakash

var database;
var g=0;
var btnYes1,btnYes2,btnYes3,btnYes4,btnYes5,btnYes6,btnYes7,btnYes8
var btnNo1,btnNo2,btnNo3,btnNo4,btnNo5,btnNo6,btnNo7,btnNo8;
var nameBox,use;
var name;
var c = 255;
var b1="/",c2="/",d3="/",e4="/",f5="/",g6="/",h7="/",i8="/";
var yesn=0,non=0,info;
var hour,minute,time=0,day,month,year,a=0,showtime,showdate,median="";

function setup(){
  
  database = firebase.database();
  var surveyData = database.ref('survey/data');
  surveyData.on("value", readData, showError);
  createCanvas(580,400);

nameBox = createInput("");
use = createButton('USE NAME');

btnYes1 = createButton('YES, I Had Surveys Earlier Also');
btnYes2 = createButton('YES, I Know a Person Who Knows Coding');
btnYes3 = createButton('YES, I Love Painting');
btnYes4 = createButton('YES, I Have Visited Taj Mahal');
btnYes5 = createButton('YES, I Have Seen Doremon Cartoon');
btnYes6 = createButton('YES, I Am a Doctor');
btnYes7 = createButton('YES, I Know The Latest Skim Launched By Gov.');
btnYes8 = createButton('YES, I loved It');

btnNo1 = createButton('NO, It Is My First Survey');
btnNo2 = createButton('NO, I Do Not Know Any One Who Knows Coding');
btnNo3 = createButton('NO, I Hate Painting');
btnNo4 = createButton('NO, I Have Not Visited Taj Mahal');
btnNo5 = createButton('NO, I Have Not Seen Doremon Cartoon');
btnNo6 = createButton('NO, I Am Not a Doctor');
btnNo7 = createButton('NO, I Unaware About The Latest Skim Launched By Gov.');
btnNo8 = createButton('NO, It Needs Improvenment');

btnYes1.position(-1000,0);
btnYes2.position(-1000,0);
btnYes3.position(-1000,0);
btnYes4.position(-1000,0);
btnYes5.position(-1000,0);
btnYes6.position(-1000,0);
btnYes7.position(-1000,0);
btnYes8.position(-1000,0);

btnNo1.position(-1000,0);
btnNo2.position(-1000,0);
btnNo3.position(-1000,0);
btnNo4.position(-1000,0);
btnNo5.position(-1000,0);
btnNo6.position(-1000,0);
btnNo7.position(-1000,0);
btnNo8.position(-1000,0);

info=createElement('h3');
info.position(150,150);

}

function draw(){

background(c);

if (hour>12) {
  a = hour-12;
  median = " PM";
} else if (hour<12) {
  a = hour;
  median = " AM";
}


okName();

textSize(30);
fill("red");
  text("' My Survey '",190,55);
  textSize(26);
  fill("blue");
  text("Your Answer Can Change The World",80,110);
  
    all();
  

if (g === 0) {
  fill(0);
    textSize(25);
    text("Enter your Name Here →",50,200);
    text("To get Started With Survey",50,240);

    use.position(720,295);
    nameBox.position(700,245);

    use.mousePressed( function () {
      g=1;
      name=nameBox.value();
    })

  } else {

  use.hide();
  nameBox.hide();

  }
  fill(0);
  textSize(20);
  totalAns();
  if (g===1) {
  
    text("Q.1 : Have You Ever Had a ' SURVEY ' ?",30,150);
    btnYes1.position(450,250);
    btnNo1.position(450,300)
    
    btnNo1.mousePressed(()=>{
      g = 2;
      btnNo1.hide();
      btnYes1.hide();
      non=non+1
      b1="No"
    })
    btnYes1.mousePressed(()=>{
      g = 2;
      btnNo1.hide();
      btnYes1.hide();
      yesn=yesn+1
      b1="yes"
    })

  } else  if (g === 2) {
    text("Q.2 : Do You Know a Person Who Knows Coding ?",30,150);
    btnYes2.position(450,250);
    btnNo2.position(450,300)
    
    btnNo2.mousePressed(()=>{
      g = 3;
      btnNo2.hide();
      btnYes2.hide();
      non=non+1
      c2="No"
    })
    btnYes2.mousePressed(()=>{
      g = 3;
      btnNo2.hide();
      btnYes2.hide();
      yesn=yesn+1
      c2="yes"
    })
  } else if(g===3){
    text("Q.3 : Do You Love Painting ?",30,150);
    btnYes3.position(450,250);
    btnNo3.position(450,300)
    
    btnNo3.mousePressed(()=>{
      g = 4;
      btnNo3.hide();
      btnYes3.hide();
      non=non+1
      d3="No"
    })
    btnYes3.mousePressed(()=>{
      g = 4;
      btnNo3.hide();
      btnYes3.hide();
      yesn=yesn+1
      d3="yes"
    })
  } else if (g===4){
    text("Q.4 : Have You Ever Visited Taj Mehal ?",30,150);
    btnYes4.position(450,250);
    btnNo4.position(450,300)
    
    btnNo4.mousePressed(()=>{
      g = 5;
      btnNo4.hide();
      btnYes4.hide();
      non=non+1
      e4="No"
    })
    btnYes4.mousePressed(()=>{
      g = 5;
      btnNo4.hide();
      btnYes4.hide();
      yesn=yesn+1
      e4="yes"
    })
  } else if (g===5){
    text("Q.5 : Have You Ever Seen The Famous Cartoon Doremon ?",30,150);
    btnYes5.position(450,250);
    btnNo5.position(450,300);
    
    btnNo5.mousePressed(()=>{
      g = 6;
      btnNo5.hide();
      btnYes5.hide();
      non=non+1
      f5="No"
    })
    btnYes5.mousePressed(()=>{
      g = 6;
      btnNo5.hide();
      btnYes5.hide();
      yesn=yesn+1
      f5="yes"
    })
  } else if (g===6){
    text("Q.6 : Are You a Doctor ?",30,150);
    btnYes6.position(450,250);
    btnNo6.position(450,300);
    
    btnNo6.mousePressed(()=>{
      g = 7;
      btnNo6.hide();
      btnYes6.hide();
      non=non+1
      g6="No"
    })
    btnYes6.mousePressed(()=>{
      g = 7;
      btnNo6.hide();
      btnYes6.hide();
      yesn=yesn+1
      g6="yes"
    })
  } else if (g === 7){
    text("Q.7 : Do You Know The Latest Skim of Indian Government ?",30,150);
    btnYes7.position(450,250);
    btnNo7.position(450,300);
    
    btnNo7.mousePressed(()=>{
      g = 8;
      btnNo7.hide();
      btnYes7.hide();
      non=non+1
      h7="No"
    })
    btnYes7.mousePressed(()=>{
      g = 8;
      btnNo7.hide();
      btnYes7.hide();
      yesn=yesn+1
      h7="yes"
    })
  } else if (g === 8){
    text("Q.8 : Do You Like My Survey ?",30,150);
    btnYes8.position(450,250);
    btnNo8.position(450,300);
    
    btnNo8.mousePressed(()=>{
      g = 9;
      btnNo8.hide();
      btnYes8.hide();
      non=non+1
      alert("Your Votes Has Been Registered");
      i8="No"
    })
    btnYes8.mousePressed(()=>{
      g = 9;
      btnNo8.hide();
      btnYes8.hide();
      alert("Your Votes Has Been Registered");
      yesn=yesn+1
      i8="yes"
    })
  } else if (g===9) {
    textSize(30);
    text("Thank You To Complete The Survey",50,200);
    
  }
  if (g>0) {
    info.html("Name : "+name);
  }
}

function totalAns(){
  database.ref('survey/m').set({'yes': yesn,'no':non})
}

function okName(){
  database.ref('survey/name').set({'name': name})
}

function readData(data){
}

function showError(){
  
  console.log("Error in writing to the database");
  
}

function a1(){
  database.ref('survey/a').set({'q1':b1});
  
}
function a2(){
  
  database.ref('survey/b').set({'q2':c2});

}
function a3(){
  
  database.ref('survey/c').set({'q3':d3});

}
function a4(){
  
  database.ref('survey/d').set({'q4':e4});

}
function a5(){
  
  database.ref('survey/e').set({'q5':f5});

}
function a6(){
  
  database.ref('survey/f').set({'q6':g6});

}
function a7(){
  
  database.ref('survey/g').set({'q7':h7});

}
function a8(){
  
  database.ref('survey/h').set({'q8':i8});

}
function all() {
  a1();
a2();
a3();
a4();
a5();
a6();
a7();
a8();
}

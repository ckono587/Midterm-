var list = [
  {
    name:"Bob",
    color:"red"
  },
  {
    name:"Bobber",
    color:"orange"
  },
  {
    name:"Bobbette",
    color:"green"
  },
  {
    name:"Bobbers",
    color:"blue"
  },
  {
    name:"Boberino",
    color:"purple"
  }
]

var container = document.createElement("div");
container.style.height = "100px";
container.style.width = "200px";
container.style.border = "0px solid black";
container.style.backgroundColor = list[0].color;
container.style.color = "white";

var names = document.createElement("h1");
names.innerHTML = list[0].name;
container.appendChild(names);
document.body.appendChild(container);
var bool = false;
container.addEventListener('click', function(evennt){
  if (bool == false){
    container.style.border = "5px solid black";
  bool = true;
  }else{
    container.style.border = "0px solid black";
 bool = false;
  }
  
});

var container1 = document.createElement("div");
container1.style.height = "100px";
container1.style.width = "200px";
container1.style.border = "0px solid black";
container1.style.backgroundColor = list[1].color;
container1.style.color = "white";

var names1 = document.createElement("h1");
names1.innerHTML = list[1].name;
container1.appendChild(names1);
document.body.appendChild(container1);
var bool1 = false;
container1.addEventListener('click', function(evennt){
  if (bool1 == false){
    container1.style.border = "5px solid black";
  bool1 = true;
  }else{
    container1.style.border = "0px solid black";
 bool1 = false;
  }
  
});

var container2 = document.createElement("div");
container2.style.height = "100px";
container2.style.width = "200px";
container2.style.border = "0px solid black";
container2.style.backgroundColor = list[2].color;
container2.style.color = "white";

var names2 = document.createElement("h1");
names2.innerHTML = list[2].name;
container2.appendChild(names2);
document.body.appendChild(container2);
var bool2 = false;
container2.addEventListener('click', function(evennt){
  if (bool2 == false){
    container2.style.border = "5px solid black";
  bool2 = true;
  }else{
    container2.style.border = "0px solid black";
 bool2 = false;
  }
  
});

var container3 = document.createElement("div");
container3.style.height = "100px";
container3.style.width = "200px";
container3.style.border = "0px solid black";
container3.style.backgroundColor = list[3].color;
container3.style.color = "white";

var names3 = document.createElement("h1");
names3.innerHTML = list[3].name;
container3.appendChild(names3);
document.body.appendChild(container3);
var bool3 = false;
container3.addEventListener('click', function(evennt){
  if (bool3 == false){
    container3.style.border = "5px solid black";
  bool3 = true;
  }else{
    container3.style.border = "0px solid black";
 bool3 = false;
  }
  
});

var container4 = document.createElement("div");
container4.style.height = "100px";
container4.style.width = "200px";
container4.style.border = "0px solid black";
container4.style.backgroundColor = list[4].color;
container4.style.color = "white";

var names4 = document.createElement("h1");
names4.innerHTML = list[4].name;
container4.appendChild(names4);
document.body.appendChild(container4);
var bool4 = false;
container4.addEventListener('click', function(evennt){
  if (bool4 == false){
    container4.style.border = "5px solid black";
  bool4 = true;
  }else{
    container4.style.border = "0px solid black";
 bool4 = false;
  }
  
});
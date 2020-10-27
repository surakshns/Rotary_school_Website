
(function (global) {

  var homeHtml = "home.html";

  var insertHtml = function (selector, html){
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img id='icon' src='images/icon.webp'></div>";
    insertHtml(selector, html);
  };
  document.addEventListener("DOMContentLoaded", function (event) {
    showLoading("#main");
    $ajaxUtils.sendGetRequest(homeHtml,
      function (responseText) {
      document.querySelector("#main")
      .innerHTML = responseText;
    },
  false);
});
})(window);
  var homHtml = "home.html";
  var comityHtml = "comity.html";
  var eventHtml = "event.html";
  var gallHtml = "gallery.html";
  var donorHtml = "donors.html";
  var contactHtml = "contact.html";

var insertHtml = function (selector, html){
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img id='icon' src='images/icon.webp'></div>";
  insertHtml(selector, html);
};

function hom(){
console.log("hey");

var classe = document.querySelector(".active").className;
classe = classe.replace(new RegExp("active", "g"), "");
document.querySelector(".active").className = classe;

var name = document.querySelector("#home").className;
name += " active";
document.querySelector("#home").className = name;

showLoading("#main");
$ajaxUtils.sendGetRequest(homHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;

  var classes = document.querySelector(".navbar-collapse").className;
  classes = classes.replace(new RegExp("show", "g"), " ");
  document.querySelector(".navbar-collapse").className = classes;
},
false);
};

var management=[
    {place:"SECRETARY",name:'Rtn II RAJINIKANTH .S',image:"images/image5.jpg",},
    {place:"Vice-President",name:'Rtn II Dr.LEELAVATHI JANARDHAN',image:"images/image6.jpg"},
    {place:"President",name:'Rtn II PARASMAL BAFNA',image:"images/image4.jpg"},
];
var members=[
  {place:"Members",name:'Rtn II N.C SWAMY',image:"images/image8.jpg"},
  {place:"Members",name:'Rtn II  Dr.HARISH M.K',image:'images/image7.jpg'},
  {place:"Members",name:'Rtn II K.B SUBRAHMANYA',image:'images/image2.jpg'},
  {place:"Members",name:'Rtn II H.R. DAYANADA',image:'images/image1.jpg'},
];
var staff={

}


function com(){
console.log("hey");

var classe = document.querySelector(".active").className;
classe = classe.replace(new RegExp("active", "g"), "");
document.querySelector(".active").className = classe;

var name = document.querySelector("#com").className;
name += " active";
document.querySelector("#com").className = name;

function myajax(){

console.log("hey");
showLoading("#main");
$ajaxUtils.sendGetRequest(comityHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;

  var classes = document.querySelector(".navbar-collapse").className;
  classes = classes.replace(new RegExp("show", "g"), " ");
  document.querySelector(".navbar-collapse").className = classes;
},
false);
};

var promise = myajax();
document.addEventListener('DOMContentLoaded', function() {
promise.done(function(data){
  function incerting(a){
    var card = document.querySelector(".management");
    var mem = document.querySelector(".members");
  console.log(a);
  var block = "<div class='card'><img class='card-img-top image' src='' alt='Card image cap'><div class='card-body'><h6 class='card-title text-center place'></h6><h5 class='card-title text-center name'></h5></div><div>";
  console.log(block);
  console.log(card);
  if(a==management){
    var ans=card;
  }
  else if (a==members) {
    var ans=mem;
  }
    a.map(function(item, index, array){
    ans.insertAdjacentHTML('afterbegin',block);
      console.log(ans);
      var image = ans.querySelector(".image");
      image.src=a[index].image;
      var name = ans.querySelector(".name");
      name.innerHTML=a[index].name;
      var place = ans.querySelector(".place");
      place.innerHTML=a[index].place;
    });
  };

});

})
incerting(management);
incerting(members);
};

function eve(){
console.log("hey");

var classe = document.querySelector(".active").className;
classe = classe.replace(new RegExp("active", "g"), "");
document.querySelector(".active").className = classe;

var name = document.querySelector("#eve").className;
name += " active";
document.querySelector("#eve").className = name;

showLoading("#main");
$ajaxUtils.sendGetRequest(eventHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;

  var classes = document.querySelector(".navbar-collapse").className;
  classes = classes.replace(new RegExp("show", "g"), " ");
  document.querySelector(".navbar-collapse").className = classes;
},
false);
};

function gall(){
console.log("hey");

var classe = document.querySelector(".active").className;
classe = classe.replace(new RegExp("active", "g"), "");
document.querySelector(".active").className = classe;

var name = document.querySelector("#gall").className;
name += " active";
document.querySelector("#gall").className = name;

showLoading("#main");
$ajaxUtils.sendGetRequest(gallHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;

  var classes = document.querySelector(".navbar-collapse").className;
  classes = classes.replace(new RegExp("show", "g"), " ");
  document.querySelector(".navbar-collapse").className = classes;
},
false);
};

function donor(){
console.log("hey");

var classe = document.querySelector(".active").className;
classe = classe.replace(new RegExp("active", "g"), "");
document.querySelector(".active").className = classe;

var name = document.querySelector("#donor").className;
name += " active";
document.querySelector("#donor").className = name;

showLoading("#main");
$ajaxUtils.sendGetRequest(donorHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;

  var classes = document.querySelector(".navbar-collapse").className;
  classes = classes.replace(new RegExp("show", "g"), " ");
  document.querySelector(".navbar-collapse").className = classes;
},
false);
};

function cont(){
console.log("hey");

var classe = document.querySelector(".active").className;
classe = classe.replace(new RegExp("active", "g"), "");
document.querySelector(".active").className = classe;


var name = document.querySelector("#cont").className;
name += " active";
document.querySelector("#cont").className = name;

showLoading("#main");
$ajaxUtils.sendGetRequest(contactHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;

  var classes = document.querySelector(".navbar-collapse").className;
  classes = classes.replace(new RegExp("show", "g"), " ");
  document.querySelector(".navbar-collapse").className = classes;
},
false);
};

var switchMenuToActive = function () {
  // Remove 'active' from home button
  console.log("hey");
  var classes = document.querySelector(".active").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector(".active").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#com").className;
  if (classes.indexOf("active") === -1) {
    classes += " active";
    document.querySelector("#com").className = classes;
  }
};

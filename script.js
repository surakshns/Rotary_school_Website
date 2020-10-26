
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

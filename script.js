
(function (global) {

  var homeHtml = "home.html";
  var comityHtml = "comity.html"

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
  var homeHtml = "home.html"
  var comityHtml = "comity.html";
  var eventHtml = "event.html";
  var gallHtml = "gallery.html";
  var donorHtml = "donor.html";
  var contact = "contact.html";

var insertHtml = function (selector, html){
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img id='icon' src='images/icon.webp'></div>";
  insertHtml(selector, html);
};

function home(){
console.log("hey");
showLoading("#main");
$ajaxUtils.sendGetRequest(homeHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;
},
false);
};

function com(){
console.log("hey");
showLoading("#main");
$ajaxUtils.sendGetRequest(comityHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;
},
false);
};

function eve(){
console.log("hey");
showLoading("#main");
$ajaxUtils.sendGetRequest(eventHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;
},
false);
};

function gall(){
console.log("hey");
showLoading("#main");
$ajaxUtils.sendGetRequest(gallHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;
},
false);
};

function donor(){
console.log("hey");
showLoading("#main");
$ajaxUtils.sendGetRequest(donorHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;
},
false);
};

function cont(){
console.log("hey");
showLoading("#main");
$ajaxUtils.sendGetRequest(contactHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;
},
false);
};

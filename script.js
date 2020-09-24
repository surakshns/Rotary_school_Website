const com=document.querySelector("#com");
const even=document.querySelector("#event");
const gall=document.querySelector("#gallery");
const don=document.querySelector("#donors");
const cont=document.querySelector("#contact");
(function (global) {

  var homeHtml = "home.html";
  var comityHtml = "comity.html"
  var eventHtml = "event.html"
  var galleryHtml = "gallery.html"
  var donorsHtml = "donors.html"
  var contactHtml = "contact.html"

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
  com.addEventListener("click", function (event) {
showLoading("#main");
$ajaxUtils.sendGetRequest(comityHtml,
  function (responseText) {
  document.querySelector("#main")
  .innerHTML = responseText;
},
false);
});
even.addEventListener("click", function (event) {
showLoading("#main");
$ajaxUtils.sendGetRequest(eventHtml,
function (responseText) {
document.querySelector("#main")
.innerHTML = responseText;
},
false);
});
gall.addEventListener("click", function (event) {
showLoading("#main");
$ajaxUtils.sendGetRequest(galleryHtml,
function (responseText) {
document.querySelector("#main")
.innerHTML = responseText;
},
false);
});
don.addEventListener("click", function (event) {
showLoading("#main");
$ajaxUtils.sendGetRequest(donorsHtml,
function (responseText) {
document.querySelector("#main")
.innerHTML = responseText;
},
false);
});
cont.addEventListener("click", function (event) {
showLoading("#main");
$ajaxUtils.sendGetRequest(contactHtml,
function (responseText) {
document.querySelector("#main")
.innerHTML = responseText;
},
false);
});
})(window);

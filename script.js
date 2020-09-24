(function (global) {

  var homeHtml = "home.html"

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

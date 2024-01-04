window.addEventListener("scroll", function() {
  var textElements = document.querySelectorAll(".text-animation");

  for (var i = 0; i < textElements.length; i++) {
    var textElement = textElements[i];

    if (!textElement.classList.contains("played")) {
      var scrollY = window.scrollY;
      var scrollPercent = scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      var translationX = scrollPercent * 100;
      textElement.style.transform = "translateX(-" + translationX + "%)";
      textElement.classList.add("played");
    }
  }
});

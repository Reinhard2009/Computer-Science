window.addEventListener("scroll", function() {
  var textElements = document.querySelectorAll(".text-animation");

  for (var i = 0; i < textElements.length; i++) {
    var textElement = textElements[i];

    // Check if the animation has already played.
    if (!textElement.classList.contains("played")) {

      // Get the scroll position of the window.
      var scrollY = window.scrollY;

      // Calculate the percentage of the page that has been scrolled.
      var scrollPercent = scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      // Calculate the amount of translation that should be applied to the text element.
      var translationX = scrollPercent * 100;

      // Apply the translation to the text element.
      textElement.style.transform = "translateX(-" + translationX + "%)";

      // Add the "played" class to the text element.
      textElement.classList.add("played");
    }
  }
});

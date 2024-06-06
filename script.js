function redirectToURL(url) {
  window.location.href = url;
}

/*function isAndroid() {
  console.log(navigator.userAgent);
  return /Android/i.test(navigator.userAgent);
}*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var footer = document.getElementById("footer");
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    footer.style.bottom = "10"; /* Show the text when scrolled to the bottom */
  } else {
    footer.style.bottom = "-50px"; /* Hide the text when not scrolled to the bottom */
  }
}

// Function to dynamically load CSS file based on device
/*function loadCSS() {
  if (isAndroid()) {
    console.log("Loading Android.css");
    // Load android.css for Android devices
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "Styles/Android.css";
    document.head.appendChild(link);
  } else {
    console.log("Loading Desktop.css");
    // Load desktop.css for other devices
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "Styles/Desktop.css";
    document.head.appendChild(link);
  }
}*/
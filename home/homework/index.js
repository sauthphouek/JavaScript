function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML =
      "Geolocation is not supported by this browser.";
  }
}

// show position
function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  document.getElementById("demo").innerHTML =
    "Latitude: " + latitude + "<br>Longitude: " + longitude;
  var mapLink = "https://www.google.com/maps?q=" + latitude + "," + longitude;
  console.log(mapLink);
  document.getElementById(
    "demo"
  ).innerHTML += `<a href="${mapLink}" target="_blank">View on Google Maps</a>`;
}

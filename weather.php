<script>

function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(displayPosition);
    }
  else{x.innerHTML = "Geolocation is not supported by this browser.";}
  }
  
  
  /*
function showPosition(position)
  {
     console.log(position.coords.latitude + ',' + position.coords.longitude );
  }*/
  
  function displayPosition(position) {
	alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}
  
  /*
navigator.geolocation.getCurrentPosition(function(position) {  
  var gps = (position.coords.latitude+position.coords.longitude);  
  window.GlobalVar = gps;

  continueSomeProcess();
});

function continueSomeProcess() {
   // this code will be able to access window.GlobalVar
}
  */
</script>


<?php

// http://www.html5rocks.com/en/tutorials/geolocation/trip_meter/

// http://html5doctor.com/demos/geolocation/geolocation-watchposition-example.html

// http://html5doctor.com/finding-your-position-with-geolocation/


/*
 
 http://api.worldweatheronline.com/free/v1/weather.ashx?q=London&format=json&num_of_days=5&key=jgbwmyy23kdzk9s9etjdm7n6
 
Application: weatherjobby
Key: jgbwmyy23kdzk9s9etjdm7n6
*/
?>

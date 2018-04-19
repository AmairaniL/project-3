var map;
var marker;
var current;

//top radioactive locations on Earth.
var chicago={lat: 41.8562277, lng: -87.6912785}
var xalapa={lat: 19.5438, lng: -96.9102};
var coyolillo={lat: 19.567482, lng: -96.746547};

var locations=["Xalapa", "Coyolillo"];

function myMap() {
	current={lat: 41.8562277, lng: -87.6912785};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom:12,
	center: chicago});
	marker = new google.maps.Marker({
		position:chicago,
		animation:google.maps.Animation.DROP,
	map: map });
}

function travel(location, my_locations) {
	map.panTo(location);
	map.setZoom(15);
	marker = new google.maps.Marker({
		position: location,
			animation:google.maps.Animation.BOUNCE,
		map: map
	});
	if(my_locations==locations[0]){
		document.getElementById("description").innerHTML="Xalapa, Veracruz"
	}
	else if(my_locations==locations[1]){
		document.getElementById("description").innerHTML=""
	}
	else {
		document.getElementById("description").innerHTML=null;
	}
}
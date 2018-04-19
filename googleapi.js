var map;
var marker;
var current;

//top radioactive locations on Earth.
var chicago={lat: 41.8562277, lng: -87.6912785}

function myMap() {
	current={lat: 41.8562277, lng: -87.6912785};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom:15,
	center: chicago});
	marker = new google.maps.Marker({
		position:chicago,
		animation:google.maps.Animation.DROP,
	map: map });
}


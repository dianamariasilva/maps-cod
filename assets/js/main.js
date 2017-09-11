const app = {
	Item: {
		map:undefined,
		lat: undefined, 
		lng: undefined
	},

	init: function(){
			app.Item.map = new google.maps.Map(document.getElementById("map"), {
				zoom:5,
				center: {lat:-9.1191427, lng: -77.0349046},
				mapTypeControl: false,
				zoomControl: false,
				streetViewControl: false
		});
		app.setup();
	},

	search: function(){
		if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition(app.functionSuccess, app.functionError);
			}
	},

	functionSuccess: function(posicion){
		var latitud, longitud;
		latitud = posicion.coords.latitude;
			longitud = posicion.coords.longitude;
			var miUbicacion = new google.maps.Marker({
				position: {lat:latitud, lng:longitud},
				animation: google.maps.Animation.DROP,
				map:map
			});
			app.Item.map.setZoom(17);
			app.Item.map.setCenter({lat:latitud, lng:longitud});
	},

	functionError: function(error){
		alert("Tenemos un problema con encontrar tu ubicación");
	},

	setup: function(){
		document.getElementById("encuentrame").addEventListener("click",app.search);
		// var latitud, longitud;
	},

	addLocation : function(event){
		app.search();
	}
}

function initMap(){
	app.init();
}

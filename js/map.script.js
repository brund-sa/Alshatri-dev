
//  google map 2 function custom ========================== //

	if(jQuery('#gmap_canvas2').length){
		function init_map2() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(21.6054808, 39.237297),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
			};
			// Let's also add a marker while we're at it
			map2 = new google.maps.Map(document.getElementById('gmap_canvas2'), myOptions);
			marker2 = new google.maps.Marker({
				map: map2,
				position: new google.maps.LatLng(21.6054808, 39.237297),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker.png')
			});

			marker2.setDraggable(true);		
			// marker on click show infowindow
			infowindow2 = new google.maps.InfoWindow({
				content: '<strong>Title</strong><br>Tour Eiffel, 5 Avenue Anatole France, 75007 Paris, France<br>'
			});
			google.maps.event.addListener(marker2, 'click', function() {
				infowindow2.open(map2, marker2);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map2); 
	}


//  google map 4 default function custom ========================== //

	if(jQuery('#gmap_canvas4').length){
		function init_map4() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(21.6054808, 39.237297),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles:[
					{
						"featureType": "all",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							},
							{
								"color": "#e8d7c5"
							}
						]
					},
					{
						"featureType": "landscape",
						"elementType": "all",
						"stylers": [
							{
								"color": "#e8d7c5"
							},
							{
								"lightness": -7
							}
						]
					},
					{
						"featureType": "poi.business",
						"elementType": "all",
						"stylers": [
							{
								"color": "#645c20"
							},
							{
								"lightness": 38
							},
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.government",
						"elementType": "all",
						"stylers": [
							{
								"color": "#9e5916"
							},
							{
								"lightness": 46
							},
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.medical",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.medical",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#813033"
							},
							{
								"lightness": 38
							},
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "all",
						"stylers": [
							{
								"color": "#645c20"
							},
							{
								"lightness": 39
							},
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.school",
						"elementType": "all",
						"stylers": [
							{
								"color": "#a95521"
							},
							{
								"lightness": 35
							},
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.sports_complex",
						"elementType": "all",
						"stylers": [
							{
								"color": "#9e5916"
							},
							{
								"lightness": 32
							},
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "all",
						"stylers": [
							{
								"color": "#e7a967"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#f19f53"
							},
							{
								"weight": 1.3
							},
							{
								"visibility": "on"
							},
							{
								"lightness": 16
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#f19f53"
							},
							{
								"lightness": -10
							}
						]
					},
					{
						"featureType": "transit",
						"elementType": "all",
						"stylers": [
							{
								"lightness": 38
							},
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "transit.line",
						"elementType": "all",
						"stylers": [
							{
								"color": "#813033"
							},
							{
								"lightness": 22
							}
						]
					},
					{
						"featureType": "transit.station",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "all",
						"stylers": [
							{
								"color": "#1994bf"
							},
							{
								"saturation": -69
							},
							{
								"gamma": 0.99
							},
							{
								"lightness": 43
							}
						]
					}
				]
			};
			// Let's also add a marker while we're at it
			map4 = new google.maps.Map(document.getElementById('gmap_canvas4'), myOptions);
			marker4 = new google.maps.Marker({
				map: map4,
				position: new google.maps.LatLng(21.6054808, 39.237297),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker2.png')
			});

			marker4.setDraggable(true);		
			// marker on click show infowindow

			infowindow4 = new google.maps.InfoWindow({
				content: '<strong>جدة - حي المنار ‏جدة‏، ‏السعودية‏</strong><br>'
			});

			google.maps.event.addListener(marker4, 'click', function() {
				infowindow4.open(map4, marker4);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map4);

	}

//  google map 6 default function custom ========================== //

	if(jQuery('#gmap_canvas6').length){
		function init_map6() {
			var myOptions = {
				zoom: 10,
				center: new google.maps.LatLng(21.6054808, 39.237297),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles:[{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}]
			};
			// Let's also add a marker while we're at it
			map6 = new google.maps.Map(document.getElementById('gmap_canvas6'), myOptions);
			marker6 = new google.maps.Marker({
				map: map6,
				position: new google.maps.LatLng(21.6054808, 39.237297),
				optimized: false,
				icon: new google.maps.MarkerImage('images/marker2.png')
			});

			marker6.setDraggable(true);		
			// marker on click show infowindow

			infowindow6 = new google.maps.InfoWindow({
				content: '<strong>Title</strong><br>Tour Eiffel, 5 Avenue Anatole France, 75007 Paris, France<br>'
			});

			google.maps.event.addListener(marker6, 'click', function() {
				infowindow6.open(map6, marker6);
			});
		}
		google.maps.event.addDomListener(window, 'load', init_map6);

	}

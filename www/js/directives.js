angular.module('starter.directives', [])

.directive('map', function() {
var myCenter=new google.maps.LatLng(23.730182 , 90.408583);
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center:myCenter,
          zoom:16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };	
		
       //var map = new google.maps.Map($element[0], mapOptions);
		
		var map = new google.maps.Map($element[0],  mapOptions);
		
		
		 var marker = new google.maps.Marker({
      position: myCenter,
      map: map,
      title: 'ERA InfoTech Limited'
    });

   
		
		
     
	 
		
		

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener(marker,$element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
		
		
		   $scope.onCreate({map: map});

		
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
	  
	
    }
  }
});

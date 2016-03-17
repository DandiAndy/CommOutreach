var months = ["jan", "feb", "mar", "apr"];

$(document).ready(function(){
  //click doesn't work as a function if the mouse leaves the area of the slider!!

  for(var i = 0; i < months.length; i++){
      $("#date_month_A").html($("#date_month_A").html() + "<option value=\""+i+"\">"+months[i]+"</option>")
      $("#date_month_B").html($("#date_month_B").html() + "<option value=\""+i+"\">"+months[i]+"</option>")
  }

  //2016 should be chnaged to the systems date
  //1990 should be system dtae - X
  //X needs to be defined
  for(var i = 2016; i > 1990; i--){
      $("#date_year_A").html($("#date_year_A").html() + "<option value=\""+i+"\">"+i+"</option>")
      $("#date_year_B").html($("#date_year_B").html() + "<option value=\""+i+"\">"+i+"</option>")
  }

});



angular.module('appMaps', ['uiGmapgoogle-maps']).config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyDQ6nwsBNM4OyrxLdChApNwNHl3fUcVrEE',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
  });
}).controller('mainCtrl', function($scope) {
      $scope.map = {center: {latitude: 33.33, longitude: 44.434418 }, zoom: 5 };
      $scope.options = {scrollwheel: false};
  //toggle advanced search
  $scope.advancedSearchToggle = false;

  $scope.collapseOrExpandAdvancedSearch = function(){
    $scope.advancedSearchToggle = !$scope.advancedSearchToggle;
  }


  $scope.markersToSee = [];

  $scope.newFunction = function(lat, long){

    //alert("fneifn");
    var _markers = [];

      //alert(_markers.length);
      for(var i = 0; i < 10; i++)
        _markers.push(anotherFunction(i, long, lat));


      $scope.markersToSee = _markers;

     //alert(_markers.length);

  }



  $scope.makersToSee = [];
});


function anotherFunction(i, long, lat){


    var lat_min = lat - 3, lng_min = long - 3, lat_range = 6, lng_range = 6;

    var latitude = lat_min + (Math.random() * lat_range);
    var longitude = lng_min + (Math.random() * lng_range);
    var ret = {
        latitude: latitude,
        longitude: longitude,
        title: 'm' + i,
        type: "cluster"
    };

    ret["id"] = i;
    return ret;

}

    //$scope.map.marker = new marker()
    /*
    $("#google-map").append("<ui-gmap-marker key=\"marker.id\" coords=\"marker.coords\" options=\"marker.options\" events=\"marker.events\"></ui-gmap-marker>");

    $scope.marker = {

      id: 2,
      coords: {
        latitude: lat,
        longitude: long
      },
      options: {
        draggable: false,
        title: "blah blah",
        animation: 1
      }

    }

    alert("done");

  }
  */



$(document).ready(function(){
  //newFunction(0, 0);
});

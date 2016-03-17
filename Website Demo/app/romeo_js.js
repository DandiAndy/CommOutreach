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
      $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
      $scope.options = {scrollwheel: false};
  //toggle advanced search
  $scope.advancedSearchToggle = false;

  $scope.collapseOrExpandAdvancedSearch = function(){
    $scope.advancedSearchToggle = !$scope.advancedSearchToggle;
  }


  $scope.markersToSee = [];

  $scope.newFunction = function(long, lat){

    //alert("fneifn");
    var _markers = [];

      //alert(_markers.length);
      for(var i = 0; i < 10; i++)
        _markers.push(anotherFunction(i));


      $scope.markersToSee = _markers;

     //alert(_markers.length);

  }



  $scope.makersToSee = [];
});


function anotherFunction(i){


    var lat_min = 10, lng_min = 10, lat_range = 100, lng_range = 100;

    var latitude = lat_min + (Math.random() * lat_range);
    var longitude = lng_min + (Math.random() * lng_range);
    var ret = {
        latitude: latitude,
        longitude: longitude,
        title: 'm' + i
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

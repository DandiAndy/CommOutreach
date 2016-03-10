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
});

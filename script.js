//ceci est une closure
//appelée des que le fichier qui la contient est chargé
(function (){
	helloJs();
	toggleForm(false);
	$("#form-advanced").click(function() {toggleForm(true);});
	
	
	//declarer une app
	var app= angular.module('MyMap', [])
.controller('MyMapController', ['$scope', function($scope) {
  
}])
.directive('subwayMap', function() {
  return {
    templateUrl: 'my-map.html'
  };
});
	
		
//toggle form
function toggleForm(advanced){
	var questionField= $("#search").parent();
	var dateField=$("#start").parent();
	var timeField=$("#end").parent();
	if(advanced){
		questionField.show();
		dateField.show();
		timeField.show();
	}
	else{
		questionField.hide();
		dateField.hide();
		timeField.hide();
	}
	
}
	
	//Hello
function helloJs(){
	console.log("Hello Map");
}

})();














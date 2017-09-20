var items = [];
var app = angular.module("myCv",[]);
app.controller("timelineCtrl", ["$scope", "$http", function($scope, $http){
  $http.get('assets/js/career.json')
  .then(function (response) {
    var data = response.data;
    $scope.experiences = data;
  });
  $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    items = $(".timeline-panel");
    testFunction();
  });
}]);
app.directive('onFinishRender', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      if (scope.$last === true) {
        $timeout(function () {
          scope.$emit(attr.onFinishRender);
        });
      }
    }
  }
});
$(function(){
  function isElemInView(elem)
  {
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = $(elem).offset().top;
    bounds.bottom = bounds.top + $(elem).outerHeight();
    return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
  }
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElemInView(items[i])) {
        $(items[i]).stop().animate({opacity: 1});
      }
      else
      {
        $(items[i]).stop().animate({opacity: 0});
      }
    }
  }
  $( window ).scroll(function(){
    callbackFunc()
  });
});

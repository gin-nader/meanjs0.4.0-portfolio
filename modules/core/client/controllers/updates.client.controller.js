angular.module('core').controller('updateController', ['$scope', function($scope) { 
  $scope.title = 'Status Updates'; 
  $scope.updates = [
  {
    text: "The single page application concept seems to be more appropriate for my portfolio",
    date: new Date('2016', '07', '08')
  },
  {
    text: "Trying out AngularJS with bootstrap now.",
    date: new Date('2016', '07', '08')
  },
  {
    text: "Trying to decide between Django vs. Ruby on Rails for web development. I like python, but I really like the Rails framework.",
    date: new Date('2016', '06', '29')
  },
  {
     text: "Almost have my portfolio fully up and running",
    date: new Date('2016', '06', '27')
  },
  {
    text: "test update",
    date: new Date('2016', '06', '25')
  }
  ],
  $scope.updatesTwo = [
  {
    text: "My portfolio is finally finished. It now has the URL tomginader.com",
    date: new Date('2016', '07', '27')
  }
  ];
}]);
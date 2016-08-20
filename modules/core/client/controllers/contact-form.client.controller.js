angular.module('core').controller('ContactFormController', ['$scope', '$http','$mdToast', '$animate',
	function($scope, $http, $mdToast, $animate) {

	    //3. we decide where the toast will display on the view
	    $scope.toastPosition = {
	        bottom: false,
	        top: true,
	        left: false,
	        right: true
	    };

	    //2. the method looks for the position that we want to display the toast
	    $scope.getToastPosition = function() {
	        return Object.keys($scope.toastPosition)
	            .filter(function(pos) { return $scope.toastPosition[pos]; })
	            .join(' ');
	    };

	    //1. The send button will call this method
	    this.sendMail = function() {

	    	var data = ({
                contactName : this.contactName,
                contactEmail : this.contactEmail,
                contactMsg : this.contactMsg
            });
 
            // Simple POST request example (passing data) :
            $http.post('/contact-form', data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
		      	  $mdToast.show(
		           	 $mdToast.simple()
		                .content('Thanks for your message, ' + data.contactName + '. I will get back to you soon.' )
		                .position($scope.getToastPosition())
		                .hideDelay(3000)
		        	);
		      	  var frm = document.getElementsByName('contactForm')[0];
				   frm.reset();  // Reset
				   return false; // Prevent page refresh
		      	}).
		      	error(function(data, status, headers, config) {


		      	});

	   		};
	}
]);
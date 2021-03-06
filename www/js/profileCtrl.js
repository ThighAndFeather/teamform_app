//profileCtrl
app.controller("profileCtrl", 

	// Implementation the todoCtrl 
	function($scope, Auth, $firebaseArray, $firebaseObject,$window, $stateParams,Helper,$ionicPopup) {
		Auth.$onAuthStateChanged(function(authData){
			//initialize
			if (authData) {
				$scope.authData = authData;
				ref = firebase.database().ref("users/"+$stateParams.uid+"/readOnly/info");
				$scope.profile_info = $firebaseObject(ref);
				$scope.profile_readOnly = true;
				// r_ref = firebase.database().ref("users/"+$stateParams.uid+"/readOnly");
				// fobj = $firebaseObject(r_ref);
				// $scope.profile_info.email = fobj.email
				// $scope.profile_info.name = fobj.name
				//$scope.profile_info.tags = Helper.tags;
				//$scope.profile_info.tag.c++=false;
				var id = $stateParams.uid;
				if (id != $scope.authData.uid)  $scope.button_visible = false;
				else $scope.button_visible = true;
				console.log(authData);
			}
			else {
				console.log("signed out");
			}
		});
		$scope.button_name = "EDIT";
		$scope.edit = function(){			
			if($scope.profile_readOnly) {
				$scope.profile_readOnly=false;
				$scope.button_name = "SAVE";
			}
			else{
				$scope.profile_info.$save().then(function(){
					console.log($scope.profile_info);
				});
				$scope.profile_readOnly=true;
				$scope.button_name = "EDIT";
			}
		};
		var myPopup;
		$scope.profile_edit = function(){
			myPopup = $ionicPopup.show({
				templateUrl: 'templates/manageProfileTag.html', 
				title: 'Edit your profile',
                scope: $scope
			});
		};
		$scope.closePopup = function(){
			myPopup.close();
		}
	}
);

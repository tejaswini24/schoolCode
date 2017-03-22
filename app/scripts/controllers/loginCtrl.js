'use strict';

angular.module('schoolApp')
    .controller('LoginCtrl', function($scope, ServerCall, $rootScope) {

        $scope.fnLogin = function() {
            var dataObj = {
                "Email": $scope.uname,
                "Password": $scope.pwd,
                "OldPassword": null,
                "Phone": null,
                "NewPassword": null,
                "MainUserID": 0,
                "Questions": [{
                    "SecurityQuestionID": 0,
                    "UserSecurityID": 0,
                    "SecurityAnswer": null,
                    "SecurityQuestion": null
                }]
            }
            var sucLoginCB = function(res) {
                if(res.Sucess==true){
                     sessionStorage.setItem('token',res.Token);
                     $rootScope.$broadcast('loggedIn', {});


                }else if(res.IsLockedOut==true){

                }else{

                }
               
            }
            var errLoginCB = function(res) {}
            ServerCall.getData('authentication/login', 'POST', dataObj, sucLoginCB, errLoginCB);
            //201703098223
            
        }
    });

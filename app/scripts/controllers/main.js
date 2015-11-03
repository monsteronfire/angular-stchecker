angular.module("stcheckerApp")
    .filter('fromTo', function() {
        return function(input, from, total, lessThan) {
            from = parseInt(from);
            total = parseInt(total);
            for (var i = from; i < from + total && i < lessThan; i++) {
                input.push(i);
            }
            return input;
        }
    })
    .factory('instagram', ['$http',
      function($http) {
        var userid;
        return {
          fetchPopular: function(callback, userid) {
            var userid = angular.element("input#user_id").val();

            var endPoint = "https://api.instagram.com/v1/users/"+userid+"/follows?access_token=630194682.8d0c4ad.c79f81f6f10d43d8867a5c42c90d0d43&callback=JSON_CALLBACK";

            $http.jsonp(endPoint).success(function(response) {
                callback(response.data);
                console.log(response.data);
            });
            console.log(userid);
            return userid;
          }
        }
      }
    ])
    .controller("stcheckerCtrl", function($scope, $interval, instagram) {
      $scope.followers = [];
      $scope.have = [];

      $scope.getMore = function() {
        instagram.fetchPopular(function(data) {
            for(var i=0; i<data.length; i++) {
              if (typeof $scope.have[data[i].id]==="undefined") {
                $scope.followers.push(data[i]) ;
                $scope.have[data[i].id] = "1";
              }
            }
        });
      };
    });
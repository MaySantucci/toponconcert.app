angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

        })


        .controller('ConcertsCtrl', function ($rootScope, $scope) {
            $scope.concerts = [];
            $.getJSON('http://toponconcert.com/api/V1/concert', function (data) {
                console.log($scope);
                $scope.concerts = data.concerts;
                $rootScope.$applyAsync();
                console.log(data.concerts);
            });

        })

        .controller('ConcertCtrl', function ($scope, $stateParams, $rootScope) {
            var id = $stateParams.concertId;
            $.getJSON('http://toponconcert.com/api/V1/concert/'+ id, function (data) {
                console.log($scope);
                $scope.concert = data.concert;
                $rootScope.$applyAsync();
                
                console.log(data.concert);
            });

            //@todo stampare i dati del concerto con id = $id
        })



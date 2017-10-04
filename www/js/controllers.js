angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

        })


        .controller('ConcertsCtrl', function ($scope) {
            $scope.concerts = [
                {id: 1, artist: 'Metallica', location: 'Roma', day_concert: '21/02/2018'},
                {id: 2, artist: 'Red Hot Chili Peppers', location: 'Roma', day_concert: '21/02/2018'},
                {id: 3, artist: 'Linkin Park', location: 'Roma', day_concert: '21/02/2018'},
                {id: 4, artist: 'Einaudi', location: 'Roma', day_concert: '21/02/2018'},
                {id: 5, artist: 'Allevi', location: 'Roma', day_concert: '21/02/2018'},
            ];

            function getConcerts() {
                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", "http://toponconcert.com/api/V1/concert", false);
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.send();
                return JSON.parse(xhttp.responseText);
            }

            getConcerts();

        })

        .controller('ConcertCtrl', function ($scope, $stateParams) {

            $id = $stateParams.concertId;
            console.log($id);

            //@todo stampare i dati del concerto con id = $id
        })



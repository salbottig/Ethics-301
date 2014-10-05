var app = angular.module('ethicsApp', []);


app.controller("dataCtrl",['$scope', '$http', function($scope, $http) {

    $scope.newsFeed1 = 'False';
    $scope.newsFeed2 = 'False';
    $scope.beacon = 'False';
    $scope.personalize = 'False';
    $scope.button = 'False';
    $scope.recog = 'False';
    $scope.psychology = 'False';
    $scope.conclusion = 'False';
    $scope.statusArray = []

    $scope.news1function = function(){
        $scope.newsFeed1 = 'True';
        $scope.newsFeed2 = 'False';
        $scope.beacon = 'False';
        $scope.personalize = 'False';
        $scope.button = 'False';
        $scope.recog = 'False';
        $scope.psychology = 'False';
        $scope.conclusion = 'False';
    }

    $scope.news2function = function(){
        $scope.newsFeed1 = 'False';
        $scope.newsFeed2 = 'True';
        $scope.beacon = 'False';
        $scope.personalize = 'False';
        $scope.button = 'False';
        $scope.recog = 'False';
        $scope.psychology = 'False';
        $scope.conclusion = 'False';
    }

    $scope.beaconFunc = function(){
        $scope.newsFeed1 = 'False';
        $scope.newsFeed2 = 'False';
        $scope.beacon = 'True';
        $scope.personalize = 'False';
        $scope.button = 'False';
        $scope.recog = 'False';
        $scope.psychology = 'False';
        $scope.conclusion = 'False';
    }

    $scope.personalizeFunc = function(){
        $scope.newsFeed1 = 'False';
        $scope.newsFeed2 = 'False';
        $scope.beacon = 'False';
        $scope.personalize = 'True';
        $scope.button = 'False';
        $scope.recog = 'False';
        $scope.psychology = 'False';
        $scope.conclusion = 'False';
    }

    $scope.buttonFunc = function(){
        $scope.newsFeed1 = 'False';
        $scope.newsFeed2 = 'False';
        $scope.beacon = 'False';
        $scope.personalize = 'False';
        $scope.button = 'True';
        $scope.recog = 'False';
        $scope.psychology = 'False';
        $scope.conclusion = 'False';
    }

    $scope.recogFunc = function(){
        $scope.newsFeed1 = 'False';
        $scope.newsFeed2 = 'False';
        $scope.beacon = 'False';
        $scope.personalize = 'False';
        $scope.button = 'False';
        $scope.recog = 'True';
        $scope.psychology = 'False';
        $scope.conclusion = 'False';
    }
    $scope.psychFunc = function(){
        $scope.newsFeed1 = 'False';
        $scope.newsFeed2 = 'False';
        $scope.beacon = 'False';
        $scope.personalize = 'False';
        $scope.button = 'False';
        $scope.recog = 'False';
        $scope.psychology = 'True';
        $scope.conclusion = 'False';
    }
    $scope.conclusionFunc = function(){
        $scope.newsFeed1 = 'False';
        $scope.newsFeed2 = 'False';
        $scope.beacon = 'False';
        $scope.personalize = 'False';
        $scope.button = 'False';
        $scope.recog = 'False';
        $scope.psychology = 'False';
        $scope.conclusion = 'True';
    }

    $scope.updateStatus = function(){
       $scope.statusArray.push($scope.statusUpdate);
       $scope.statusUpdate = '';
    }



}]);


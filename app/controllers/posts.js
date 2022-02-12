MyApp.controller('PostsCtrl', function ($scope, $rootScope, Post) {
    //$rootScope.loading = true;
    $scope.posts = Post.find().then(function (posts) {
        //$rootScope.loading = false;
        $scope.posts = posts;
        console.log($scope.posts);
        //$scope.mainSearch = {};
        /*$scope.search = function (item) {
            if ($scope.globalSearch == undefined) {
                return true;
            } else {
                if (
                    item.name.toLoweCase().indexOf($scope.SearchText.toLoweCase()) != -1 ||
                    item.ingredients.toLoweCase().indexOf($scope.SearchText.toLoweCase()) != -1) {
                    return true;
                }
            }
            return false;
        };*/
        $scope.getIngredients = function () {
            let ingredientsResult = [];
            let result = [];
            let uniqueResult = [];
            console.log($scope.posts);
            for (let i = 0; i < $scope.posts.length; i++) {
                for (let j = 0; j < $scope.posts[i].length; j++) {
                    ingredientsResult = $scope.posts[i].ingredients[j];
                }
            }
            uniqueResult = [...new Set([ingredientsResult])];
            uniqueResult.sort();
            console.log(uniqueResult);
            return uniqueResult;
        };
        $scope.reduceTxtLength = function (param) {
            return param.substring(200);
        };
    }, function (msg) {
        alert(msg);
    });
});
// here we define our unique filter
MyApp.filter("unique", function () {
    // we will return a function which will take in a collection
    // and a keyname
    return function (collection, keyname) {
        // we define our output and keys array;
        var output = [],
            keys = [];

        // we utilize angular's foreach function
        // this takes in our original collection and an iterator function
        angular.forEach(collection, function (item) {
            // we check to see whether our object exists
            var key = item[keyname];
            // if it's not already part of our keys array
            if (keys.indexOf(key) === -1) {
                // add it to our keys array
                keys.push(key);
                // push this item to our final output array
                output.push(item);
            }
        });
        // return our array which should be devoid of
        // any duplicates
        return output;
    };
});
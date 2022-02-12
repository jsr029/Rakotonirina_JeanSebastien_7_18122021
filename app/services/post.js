MyApp.factory('Post', function ($http, $q, $timeout) {
    var factory = {
        posts: false,
        find: function (options) {
            var deferred = $q.defer();
            if (factory.posts !== false) {
                deferred.resolve(factory.posts);
            } else {
                $http.get('https://jsr029.github.io/Rakotonirina_JeanSebastien_7_18122021/json/recipes.json')
                    .success(function (data, status) {
                        factory.posts = data;
                        $timeout(function () {
                            deferred.resolve(factory.posts); //pour pouvoir les stocker en mémoire
                        }, 2000);

                    })
                    .error(function (data, status) {
                        deferred.reject('Impossible de récupérer les recettes');
                    });

            }
            return deferred.promise;
        }, //autrefois getPosts
        get: function (id) {
            var deferred = $q.defer();
            var post = {};
            var posts = factory.find().then(function (posts) {
                angular.forEach(posts, function (value, key) {
                    if (value.id == id) {
                        post = value;
                    }
                });
                deferred.resolve(post);
            }, function (msg) {
                deferred.reject(msg);
            });
            return deferred.promise;
        }, //autrefois getPost
        add: function (comment) {
            var deferred = $q.defer();
            //...
            deferred.resolve();
            return deferred.promise;
        }
    };
    return factory;
});

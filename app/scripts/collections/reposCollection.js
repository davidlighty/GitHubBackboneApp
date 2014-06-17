/*global GitHubRepoApp, Backbone*/
GitHubRepoApp.Collections = GitHubRepoApp.Collections || {};
(function() {
    'use strict';
    GitHubRepoApp.Collections.ReposCollection = Backbone.Collection.extend({
        model: GitHubRepoApp.Models.Repo,
        url: 'https://api.github.com/orgs/7geese/repos',
        // sort Attributes to help create a dynamic sort (not implemented)
        sortAttribute:'forks_count',
        sortDirection:-1,
        // main sorting function
        comparator: function(a, b) {
            var a = a.get(this.sortAttribute),
                b = b.get(this.sortAttribute);
            if (a == b) return 0;
            if (this.sortDirection == 1) {
                return a > b ? 1 : -1;
            } else {
                return a < b ? 1 : -1;
            }
        },
        initialize: function() {
            console.log('ReposCollection::Init');
            this.fetch({
                success: this.fetchSuccess,
                error: this.fetchError
            });
        },
        fetchSuccess: function(collection, response) {
            console.log("Success. Models: " + collection.models);
        },
        fetchError: function(collection, response) {
            console.log("Error: " + response);
        }
    });
})();
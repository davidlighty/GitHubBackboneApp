/*global GitHubRepoApp, Backbone, JST*/
GitHubRepoApp.Views = GitHubRepoApp.Views || {};
(function() {
    'use strict';
    GitHubRepoApp.Views.ReposView = Backbone.View.extend({
        el: $('.repo-list'),
        initialize: function() {
            console.log('ReposView::Init');
            var self = this;
            this.collection = new GitHubRepoApp.Collections.ReposCollection();
            // Don't call render until our xhr is finished
            this.collection.fetch().done(function() {
                self.render();
            });
        },
        render: function() {
            console.log('ReposView::Render');
            var self = this;
            console.log(this.collection.models);
            _.each(this.collection.models, function(repo) {
                console.log('repo::' + repo.toJSON());
                self.renderRepo(repo);
            }, this);
        },
        // Not much logic for each item to render, but pushed to it's own function call.
        renderRepo: function(repo) {
            console.log('ReposView::RenderRepo');
            var repoView = new GitHubRepoApp.Views.RepoView({
                model: repo
            });
            this.$el.append(repoView.render().el);
        }
    });
})();
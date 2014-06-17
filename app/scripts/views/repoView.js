/*global GitHubRepoApp, Backbone, JST*/

GitHubRepoApp.Views = GitHubRepoApp.Views || {};

(function () {
    'use strict';

    GitHubRepoApp.Views.RepoView = Backbone.View.extend({

        template: JST['app/scripts/templates/repoView.ejs'],

        tagName: 'li',

        id: '',

        className: 'repo-item',

        events: {},

        initialize: function () {
            console.log('RepoView::Init');
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();

/*global GitHubRepoApp, $*/


window.GitHubRepoApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var reposView = new GitHubRepoApp.Views.ReposView();
    }
};

$(document).ready(function () {
    'use strict';
    GitHubRepoApp.init();
});

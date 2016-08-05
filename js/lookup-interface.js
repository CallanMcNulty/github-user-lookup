var getRepos = require('./../js/lookup.js').getRepos;

displayRepoList = function(repos) {
  $("#repos").empty();
  repos.forEach(function(repo) {
    $("#repos").append("<li>"+repo.name+"</li>");
  });
};

$(document).ready(function() {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    getRepos($("#username").val(), displayRepoList);
  });
});

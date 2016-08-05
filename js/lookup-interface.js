var getRepos = require('./../js/lookup.js').getRepos;

$(document).ready(function() {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    getRepos();
  });
});

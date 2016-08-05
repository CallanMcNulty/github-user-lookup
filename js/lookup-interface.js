var getRepos = require('./../js/lookup.js').getRepos;

displayRepoList = function(repos) {
  $("#repos").empty();

  if(typeof repos.message==="string") {
    $("#repos").text("No matching user found");
  } else {
    repos.forEach(function(repo) {
      $("#repos").append("<li>"+repo.name+"</li>");
      if(repo.description!=null && repo.description!="") {
        $("#repos").append("<ul><li>"+repo.description+"</li></ul>");
      }
    });
  }
};

$(document).ready(function() {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    getRepos($("#username").val(), displayRepoList);
  });
});

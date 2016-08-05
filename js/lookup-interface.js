var getRepos = require('./../js/lookup.js').getRepos;
var getUserInfo = require('./../js/lookup.js').getUserInfo;

displayRepoList = function(repos) {
  $("#repo-list").empty();
  $("#error").empty();
  if(typeof repos.message==="string") {
    $("#profile-info").empty();
    $("#error").text("No matching user found");
  } else {
    $("#repo-list").append(
      "<h3>Repositories:</h3>"+
      "<ul id='repos'></ul>"
    );
    repos.forEach(function(repo) {
      $("#repos").append("<li><a href='"+repo.svn_url+"'>"+repo.name+"</a></li>");
      if(repo.description!=null && repo.description!="") {
        $("#repos").append("<ul><li>"+repo.description+"</li></ul>");
      }
    });
  }
};
displayUserInfo = function(user) {
  $("#profile-info").empty();
  $("#profile-info").append(
    "<h3>"+(user.name?user.name:user.login)+"</h3>"+
    "<a href='"+user.html_url+"'>View on GitHub</a><br><br>"+
    "<img src='"+user.avatar_url+"'></img>"+
    (user.bio?"<p>"+user.bio+"</p>":"")+
    "<br><br>"+
      (user.location?"<p><strong>Location: </strong>"+user.location+"</p>":"")+
      (user.email?"<p><strong>Email: </strong>"+user.email+"</p>":"")+
      (user.company?"<p><strong>Company: </strong>"+user.company+"</p>":"")+
    "<hr>"
  );
};

$(document).ready(function() {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    getRepos($("#username").val(), displayRepoList);
    getUserInfo($("#username").val(), displayUserInfo);
  });
});

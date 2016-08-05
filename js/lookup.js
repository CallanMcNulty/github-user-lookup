var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username, displayRepoList){
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayRepoList(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    displayRepoList(error.responseJSON);
  });
};

# GitHub User Lookup

#### Allows a user to find information on a particular GitHub, August 5, 2016

#### By Callan McNulty

## Description

This web will use the GitHub API to get data pertaining to a particular user including names and descriptions of repositories when supplied a GitHub username by the user.

## Setup/Installation Requirements

* Clone repository from GitHub
* Install Node Package Manager and Bower if they are not currently installed
* To install dependencies
  * Open terminal and navigate to cloned directory
  * Enter the command npm install
  * Enter the command bower install
* Follow instructions on GitHub.com to create a personal access token
* Create a file in the cloned directory with the name .env
* In that file, insert the following line with your access token in the specified position: exports.apiKey = "YOUR_ACCESS_TOKEN_HERE";
* Save the file
* To start the server:
  * Enter the command gulp build --production
  * Enter the command gulp serve
  * App will be hosted on http://localhost:3000/
* After the above steps have been run, the server can always be started by entering the command: gulp serve

## Support and contact details

I can be contacted for support at jabberwocky222@gmail.com

## Technologies Used

* Javascript
* Node.js
* GitHub API
* HTML
* CSS w/ SASS preprocessor

Copyright (c) 2016 Callan McNulty

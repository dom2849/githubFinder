import GithubClient from './githubClient.js';

let githubClient = new GithubClient();

function stuff() {
    let response = githubClient.getRepositories('Dom2849').then(response => console.log(response));
}

stuff();

import GithubClient from './githubClient.js';
import UserInterfaceHelper from './UserInterfaceHelper.js'

let githubClient = new GithubClient();
let uiHelper = new UserInterfaceHelper();

function stuff() {
    let response = githubClient.getUser('dom').then(response => console.log(response));
}
uiHelper.clearUserProfile();
uiHelper.clearRepositories();

let repo = {
    title: 'asdf',
    url : "https://clockify.me/tracker",
    stars: 12,
    watchers: 12,
    forks: 0
}
let repo1 = {
    title: 'HELO LHELO HELLO',
    url : "https://clockify.me/tracker",
    stars: 12,
    watchers: 12,
    forks: 0
}

// uiHelper.addRepository(repo)
// uiHelper.addRepository(repo1);
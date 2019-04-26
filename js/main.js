import GithubClient from './githubClient.js';
import UserInterfaceHelper from './UserInterfaceHelper.js'

let githubClient = new GithubClient();
let uiHelper = new UserInterfaceHelper();

function stuff() {
    let response = githubClient.getUser('dom').then(response => console.log(response));
}

// uiHelper.addProfileImage('https://avatars0.githubusercontent.com/u/37960125?v=4');
// uiHelper.addProfileLink('https://github.com/dom2849');
// stuff();
// uiHelper.addProfileStatistic('123', 'hilight');
// uiHelper.addUserData('12');

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

uiHelper.addRepository(repo)
uiHelper.addRepository(repo1);

// uiHelper.addUserProfileStatistics(list, 'hilight');

// let collection = {
//     items : list,
// }


// uiHelper.appendListItems(null, collection)
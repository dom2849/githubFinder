import GithubClient from './githubClient.js';
import UserInterfaceHelper from './UserInterfaceHelper.js'

let githubClient = new GithubClient();
let uiHelper = new UserInterfaceHelper();

function stuff() {
    let response = githubClient.getUser('Dom2849').then(response => console.log(response));
}

uiHelper.addProfileImage('https://avatars0.githubusercontent.com/u/37960125?v=4');
uiHelper.addProfileLink('https://github.com/dom2849');
stuff();


let list = [1,2,3,4,5,6,5,4,3,2,1];

// uiHelper.addUserProfileStatistics(list, 'hilight');

// let collection = {
//     items : list,
// }


// uiHelper.appendListItems(null, collection)
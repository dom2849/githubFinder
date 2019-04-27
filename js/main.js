import GithubClient from './githubClient.js';
import UserInterfaceHelper from './UserInterfaceHelper.js'

const enterKeyCode = 13;
const numberOfRepositoriesToDisplay = 5;

const githubClient = new GithubClient();
const uiHelper = new UserInterfaceHelper();
const userInput = document.querySelector('.github-search__input');

clearAll();
loadEventListeners();

function loadEventListeners() {
    userInput.addEventListener('keyup', handleKeyUp);
    document.querySelector(".github-search__icon").addEventListener('click', getUser);
}

function handleKeyUp(event) {
    if (event.code !== 'Enter' || event.keyCode !== enterKeyCode) return; 
    getUser();
}

async function getUser() {
    clearAll();
    let userName = userInput.value;

    try {
        let profileDetails = await githubClient.getUser(userName);
        let repositories = await githubClient.getRepositories(userName);
        console.log(repositories);
        
        addProfileDetails(profileDetails);
        addRepositories(repositories);
        showAll();
    }
    catch (error) {
        console.log(error);
    }
}

function clearAll() {
    uiHelper.clearRepositories();
    uiHelper.clearUserProfile();
}

function showAll(){
    uiHelper.showRepositories();
    uiHelper.showUserProfile();
}

function addProfileDetails(profileDetails) {
    console.log(profileDetails);
    uiHelper.addProfileImage(profileDetails.avatar_url);
    uiHelper.addProfileLink(profileDetails.html_url);
    addProfileStatistics(profileDetails);
    addUserInformation(profileDetails);
}

function addProfileStatistics(profileDetails) {
    uiHelper.addProfileStatistic(`Public Repositories: ${profileDetails.public_repos}`);
    uiHelper.addProfileStatistic(`Public Gists: ${profileDetails.public_gists}`);
    uiHelper.addProfileStatistic(`Followers: ${profileDetails.followers}`);
    uiHelper.addProfileStatistic(`Following: ${profileDetails.following}`);
}

function addUserInformation(profileDetails) {
    let name = removeNullIfNecessary(profileDetails.name);
    let userCompany = removeNullIfNecessary(profileDetails.company);
    let userBlog = removeNullIfNecessary(profileDetails.blog);
    let location = removeNullIfNecessary(profileDetails.location);
    let creationDate = removeNullIfNecessary(profileDetails.created_at);
    uiHelper.addUserData(`User: ${profileDetails.login}`);
    uiHelper.addUserData(`Name: ${name}`);
    uiHelper.addUserData(`Company: ${userCompany}`);
    uiHelper.addUserData(`Website/Blog: ${userBlog}`);
    uiHelper.addUserData(`Location: ${location}`);
    uiHelper.addUserData(`Member since: ${creationDate}`);

}

function removeNullIfNecessary(data) {
    return (data === null || data === '') ? 'Not found' : data;
}

function addRepositories(repositories){
    let stoppingIndex = (repositories.length > numberOfRepositoriesToDisplay) ? numberOfRepositoriesToDisplay : repositories.length;
    
    for (let i = 0; i<stoppingIndex; i++){
        let simplififiedRepository = simplifyRepository(repositories[i]);
        uiHelper.addRepository(simplififiedRepository);
    }
}

function simplifyRepository(repository){
    let simplifiedRepository = {
        name: repository.name,
        url: repository.html_url,
        stars: repository.stargazers_count,
        watchers: repository.watchers,
        forks: repository.forks
    }
    return simplifiedRepository;
}

// uiHelper.addRepository(repo)
// uiHelper.addRepository(repo1);
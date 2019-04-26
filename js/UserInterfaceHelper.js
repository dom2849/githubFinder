export default function UserInterfaceHelper(){

}

UserInterfaceHelper.prototype.clearUserProfile = function(){
    let userProfile = document.querySelector(".user");
    userProfile.style.display = 'none';
    clearList('.user__stats');
    clearList('.user__information');
}

UserInterfaceHelper.prototype.clearRepositories = function(){
    let repositories = document.querySelector(".repositories");
    repositories.style.display = 'none';
    clearList('.repositories__list');
}

// The class of the list to clear
function clearList(htmlListToClear){
    let list = document.querySelector(htmlListToClear);
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
}

UserInterfaceHelper.prototype.showUserProfile = function(){
    let userProfile = document.querySelector(".user");
    userProfile.style.display = '';
}

UserInterfaceHelper.prototype.addProfileImage = function(profileUrl){
    let image = document.querySelector(".user__image");
    image.src = profileUrl;
}

UserInterfaceHelper.prototype.addProfileLink = function(profileUrl){
    let viewProfile = document.querySelector(".user__view-profile");
    viewProfile.href = profileUrl;
}

UserInterfaceHelper.prototype.addProfileStatistic = function(statistic, statisticClassList){
    let userStats = document.querySelector(".user__stats");
    let listItem = createListItem(statistic, statisticClassList);
    userStats.appendChild(listItem);
}

UserInterfaceHelper.prototype.addUserData = function(userData){
    let userInformation = document.querySelector(".user__information");
    let listItem = createListItem(userData, '');
    userInformation.appendChild(listItem);
}

UserInterfaceHelper.prototype.addRepository = function(repository, repositoryClassList){
    let repositories = document.querySelector(".repositories__list");
    let listItem = createListItem('', 'repository__information');
    let repositoryLink = createRepositoryLink(repository);
    let repositoryStatistics = createRepositoryStatistics(repository);

    listItem.appendChild(repositoryLink);
    listItem.appendChild(repositoryStatistics);

    repositories.appendChild(listItem);
}

function createRepositoryLink(repository){
    let repositoryLink = document.createElement("a");
    repositoryLink.classList = "repository__link";
    repositoryLink.textContent = repository.title;
    repositoryLink.href = repository.url;
    return repositoryLink;
}

function createRepositoryStatistics(repository){
    let repositoryStatistics = document.createElement("ul");
    repositoryStatistics.classList = 'horizontal-list repository__stats';
    let stars = createListItem('Stars: ' + repository.stars, 'hilight');
    let watchers = createListItem('Watchers: ' + repository.watchers, 'hilight');
    let forks = createListItem('Forks ' + repository.forks, 'hilight');
    repositoryStatistics.appendChild(stars);
    repositoryStatistics.appendChild(watchers);
    repositoryStatistics.appendChild(forks);

    return repositoryStatistics;
}


function createListItem(content, classList){
    let listItem = document.createElement('li');
    listItem.textContent = content;
    listItem.classList = classList;
    return listItem;
}


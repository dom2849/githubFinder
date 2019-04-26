export default function UserInterfaceHelper(){

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


function createListItem(content, classList){
    let listItem = document.createElement('li');
    listItem.textContent = content;
    listItem.classList = classList;
    return listItem;
}


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

UserInterfaceHelper.prototype.addUserProfileStatistics = function(userStatsList, listItemClass){
    let userStats = document.querySelector(".user__stats");
    appendListItems(userStats, userStatsList, listItemClass);
}

UserInterfaceHelper.prototype.addUserInformation = function(userInformationList, listItemClass){
    let userInformation = document.querySelector(".user__information");
    appendListItems(userInformation, userInformationList, listItemClass );
}


function appendListItems(htmlElementToAppendTo, listItems, listItemClassList){
    listItems.forEach(element =>{
        let listItem = createListItem(element, listItemClassList);
        htmlElementToAppendTo.appendChild(listItem);
    })
}

function createListItem(content, classList){
    let listItem = document.createElement('li');
    listItem.textContent = content;
    listItem.classList = classList;
    return listItem;
}


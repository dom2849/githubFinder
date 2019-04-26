import { config } from './config.js'

export default function GithubClient() {

}

GithubClient.prototype.getUser = async function (username) {
    let userUrl = `https://api.github.com/users/${username}?client_id=${config.githubClientId}&client_secret=${config.githubSecretId}`

    return getData(userUrl);
}

GithubClient.prototype.getRepositories = function (username) {
    let userRepositoriesUrl = `https://api.github.com/users/${username}/repos?&sort=updated&order=desc&client_id=${config.githubClientId}&client_secret=${config.githubSecretId}`

    return getData(userRepositoriesUrl);
}

async function getData(url) {
    let response = await fetch(url);
    if (!response.ok) throw new Error("URL not found");

    return await response.json();
}
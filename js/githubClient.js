import { config } from './config.js'

export default function GithubClient() {

}


GithubClient.prototype.getUser = async function (user) {
    let userUrl = `https://api.github.com/users/${user}?client_id=${config.githubClientId}&client_secret=${config.githubSecretId}`

    return getData(userUrl);
}

GithubClient.prototype.getRepositories = function (user) {
    let repositoriesUrl = `https://api.github.com/search/repositories?q=user:dom2849&sort=updated&order=desc?client_id=${config.githubClientId}&client_secret=${config.githubSecretId}`

    return getData(repositoriesUrl);
}

async function getData(url) {
    let response = await fetch(url);
    if (!response.ok) throw new Error("URL not found");

    return await response.json();
}
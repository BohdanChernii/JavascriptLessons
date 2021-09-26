import {  fetchUserData, fetchRepositories } from "./gateways.js";
import { renderRepos,  cleanRepoList, renderuserData } from "./repos.js";
import { hideSpinner, showSpinner } from "./spinner.js"
const defaultUserAvatar = "https://avatars3.githubusercontent.com/u10001";
const defaultUser = {
  avatar_url: defaultUserAvatar,
  name: "",
  location: "",
};

renderuserData(defaultUser);
const showUserBtn = document.querySelector(".name-form__btn");
const userNameInput = document.querySelector(".name-form__input");

const onSearchUser = () => {

showSpinner();
renderuserData(defaultUser);
  const userName = userNameInput.value;
  fetchUserData(userName)
    .then((userData) => {
      renderuserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((repoList) => {

       renderRepos(repoList)
       hideSpinner();
    })
    .catch((err) => {
        alert(err.message)
    })
    .finally(()=>{
        hideSpinner();
    })
};
showUserBtn.addEventListener("click", onSearchUser);
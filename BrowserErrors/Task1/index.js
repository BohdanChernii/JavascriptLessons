import { fetchData, fetchReprositories } from "./gateways.js";
import { renderuserData } from "./user.js";
import { renderRepos,  cleanRepoList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spinner.js"
const defaultUser = {
  avatar_url: "https://api.github.com/usercontent.com/u10001",
  name: "",
  location: "",
};

renderuserData(defaultUser);
const showUserBtn = document.querySelector(".name-form__btn");
const userNameInput = document.querySelector(".name-form__input");

const onSearchUser = () => {
    showSpinner();
    cleanRepoList()
  const userName = userNameInput.value;
  fetchData(userName)
    .then((userData) => {
      renderuserData(userData);
      return userData.repros_url;
    })
    .then((url) => fetchReprositories(url))
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

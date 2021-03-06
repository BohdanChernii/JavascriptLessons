import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderRepos, cleanRepoList, renderuserData } from "./repos.js";
import { hideSpinner, showSpinner } from "./spinner.js";
const defaultUserAvatar = "https://avatars3.githubusercontent.com/u10001";
const defaultUser = {
  avatar_url: defaultUserAvatar,
  name: "",
  location: "",
};

const showUserBtn = document.querySelector(".name-form__btn");
const userNameInput = document.querySelector(".name-form__input");

renderuserData(defaultUser);

const onSearchUser = async () => {
  showSpinner();
  cleanRepoList();
  const userName = userNameInput.value;
  try{
    const userData = await fetchUserData(userName);
    renderuserData(userData);
    const repoList = await fetchRepositories(userData.repos_url);
    renderRepos(repoList);
  }
catch(err){
alert(err.message);
}
finally{
  hideSpinner();
}
};

// const onSearchUser = () => {
// showSpinner();
//   const userName = userNameInput.value;
//   fetchUserData(userName)
//     .then((userData) => {
//       renderuserData(userData);
//       return userData.repos_url;
//     })
//     .then((url) => fetchRepositories(url))
//     .then((repoList) => {

//        renderRepos(repoList)
//        hideSpinner();
//     })
//     .catch((err) => {
//         alert(err.message)
//     })
//     .finally(()=>{
//         hideSpinner();
//     })
// };
showUserBtn.addEventListener("click", onSearchUser);

const listELem = document.querySelector('.repo-list'); 
const userName = document.querySelector('.user__name')
const userLocation = document.querySelector('.user__location')
const userAvatar = document.querySelector('.user__avatar')


export const renderuserData = data => {
  const{avatar_url, name, location} = data;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = location ?`from ${location}`:'';
}
export  const cleanRepoList = ()=> {
    listELem.innerHTML = ''; 
 }

export const renderRepos = (repoList) => {
  listELem.innerHTML = ''; 
  const repoListElems = repoList.map(({name}) => {
    const listElem = document.createElement("li");
    listElem.classList.add("repo-list__item");
    listElem.textContent = name;
    return listElem;
  });
 
  listELem.append(...repoListElems);
};

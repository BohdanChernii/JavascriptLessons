const listELem = document.querySelector('.repo-list'); 
export  const cleanRepoList = ()=> {
    listELem.innerHTML = ''; 
 }

export const renderRepos = (repoList) => {
  const repoListElems = repoList.map((name) => {
    const listElem = document.createElement("li");
    listElem.classList.add("repo-list__item");
    listElem.textContent = name;
    return listElem;
  });
 cleanRepoList()
  listELem.append(...repoListElems);
};

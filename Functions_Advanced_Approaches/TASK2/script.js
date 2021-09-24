const favourites = ['id-6', 'id-17']
const tree = {
  id: "id-17",
  name: "Products",
  nodes: [
    {
      id: "id-2",
      name: "Food",
      nodes: [
        {
          id: "id-6",
          name: "Food",
          nodes: [],
        }
      ]
    },
    {
        id: "id-17",
        name: "Food",
        nodes: [],
      }
  ],
};

export const markFavorites = (tree, favourites) =>{
    const  isFavorite = favourites.includes(tree.id);
    return{
        ...tree,
        isFavorite,
        nodes:tree.nodes.map(el => markFavorites(el,favourites))
    }
}
console.log(markFavorites(tree, favourites))


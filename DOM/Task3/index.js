export const getItemsList = () => {
    const technology = document.querySelectorAll('.technology')
    console.dir(technology)
    return technology

}
getItemsList()

export const getItemsArray = () => {
    const tool = document.querySelectorAll('.tool')
    console.dir(Array.from(tool))
    return Array.from(tool)
}
getItemsArray()


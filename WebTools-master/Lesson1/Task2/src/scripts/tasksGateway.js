 const baseUrl = 'https://614b503de4cc2900179eb033.mockapi.io/registrationForm';

export const getTasksList = () => {
return fetch(baseUrl)
.then((response) => response.json())
}
export const createTask = (taskData) => {
    return fetch(baseUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
}

export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData)
    })
}
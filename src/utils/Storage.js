const get = (key) => {
    return JSON.parse(localStorage.getItem(key)) || []
}

const set = (key, todos) => {
    localStorage.setItem(key, JSON.stringify(todos))
}

export {
    get,
    set
}
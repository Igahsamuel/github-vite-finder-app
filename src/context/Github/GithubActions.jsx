// import axios from 'axios'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

// const github = axios.create({
//     baseURL: GITHUB_URL,
//     headers: {
//         Authorization: `token ${GITHUB_TOKEN}`
//     }
// })

export const searchUsers = async(text) => {
    const params = new URLSearchParams({
        q:text
    })
    const response = await fetch( `${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`
        }
    })
    const {items} = await response.json()
    return items
}

// getuser and getuserrepos
export const getUser = async(login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`
        }
    })
    const data = await response.json()
    return data
}

export const getUserRepos = async(login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`
        }
    })
    const data = await response.json()
    return data
}

import { customAxiosWithAuth } from './api'

export async function deleteCommentFromRepair(commentId, repairId) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/comments/p/${repairId}/c/${commentId}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createCommentForRepair(comment, repairId) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post(`/comments/p/${repairId}`, comment)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function getCommentFromRepair(commentId, repairId) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get(`/comments/p/${repairId}/c/${commentId}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateCommentOfIdFromrepair(comment, commentId, repairId) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/comments/p/${repairId}/c/${commentId}`, comment)
    } catch(err) {
        console.log(err.message)
    }
}
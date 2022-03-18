import request from '@/utils/request'

export function getQuestions() {
    return request({
        url: '/v1/answer/recommend',
        method: 'get',
    })
}

export function getlikelist() {
    return request({
        url: '/v1/answer/likelist',
        method: 'get',
    })
}

export function likeAnswer(data) {
    return request({
        url: '/v1/answer/like',
        method: 'post',
        data
    })
}

export function searchAnswer(data) {
    return request({
        url: '/v1/answer/search',
        method: 'post',
        data
    })
}


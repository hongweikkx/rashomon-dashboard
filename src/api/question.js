import request from '@/utils/request'

export function getQuestions() {
    return request({
        url: '/v1/answer/recommend',
        method: 'get',
    })
}
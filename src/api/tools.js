import request from '@/utils/request'

export function getTools() {
    return request({
        url: '/v1/tool/list',
        method: 'get',
    })
}

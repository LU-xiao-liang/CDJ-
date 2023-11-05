import requests from "./requests"



// 注册接口
export const reqtRegister = async (data) => {
    const result = await  requests({
        method: 'post',
        url: '/api/user/register',
        data
    })
    return result.data
}



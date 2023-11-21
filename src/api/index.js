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


// 登录接口   {studentNumder:'xxxx',pass:'xxxx'}
export const reqtLogin = async (data) => {
    const result = await requests({
        method: 'post',
        url: '/api/user/login',
        data
    })
    return result.data
}

// 获取文章列表接口
export const reqtArticleList = async (num) => {
    const result = await requests({
        method: 'get',
        url: `/api/content/list?num=${num}`,
    })
    return result.data
}


// 发布文章接口
// { userID,title,simple,userText }
export const reqtPublishArticle = async (data) => {
    const result = await requests({
        method: 'post',
        url: '/api/content/issue',
        data
    })
    return result.data  
}
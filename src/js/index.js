/**编写与后台交互的接口 */ 

const domain = `http://yapi.smart-xwork.cn/mock/84769/flora-test`


/**获取评论列表 */
const getCommentList = async ()=>{ 
    let res  
    let err 
    res = await  axios.get(`${domain}/list`).catch(e=>{ 
        err = e 
    })  

    return !err && res.status === 200 ?  res.data : err 
    
}


window? window.getCommentList = getCommentList : void 0 



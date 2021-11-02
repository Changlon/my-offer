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


/** 评论接口 */
const addComment = async ({name,msg})=>{ 
    let res , err 
    res = await axios.post(`${domain}/add`,JSON.stringify({name,msg}))  
        .catch(e=>{
        err = e 
    })

    return !err && res.status==200? res : err 
}


// console.log(addComment({name:'f',msg:'mmmsssggg'}))

window? void ( 

 (window.getCommentList = getCommentList )
 && 
 (window.addComment = addComment)
 && 0

): void 0 



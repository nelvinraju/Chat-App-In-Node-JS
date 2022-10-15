
const generatemessage =(username,text) =>{
    return{
        username,
        text,
        createdAt:new Date().getTime()
    }
}

const generateLocationMessage =(username,text) =>{
    return{
        username,
        text,
        createdAt:new Date().getTime()
    }
}

module.exports={
    generatemessage,
    generateLocationMessage
}
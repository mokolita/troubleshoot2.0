
 checkStatus =(res) =>{
        
    if(res.status == 401){
        this.token = null
        const msg = await res.json()
        throw {
            type: "Authorizaiton Error",
            msg: msg.error
        }
    }else if(res.status < 200 || res.status > 299){
        const msg = await res.json()
        let errorMsg = msg.error.detail
        if(!errorMsg){ errorMsg = msg.error }
        throw {
            type: "Fetch Error",
            msg: errorMsg
        }
    }
}

export default checkStatus 
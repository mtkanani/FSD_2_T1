var fs=require('fs')
fs.writeFile("Text.txt","Hello",(e)=>{
    if(e){
        console.log(e);
    }
    else{
        fs.appendFile("Text.txt","HIII",(e)=>{
            if (e) {
                console.log(e)
            } else {
                fs.readFile('Text.txt',"utf-8",(e,d)=>{
                    if (e) {
                        console.log(e)
                    } else {
                        console.log("append")
                    }
                })
            }
        })
    }
})
setTimeout(()=>(fs.readFile('Text.txt','utf-8',(e,d)=>{
    if(e){
        console.log(e)
    }
    else{
        console.log(d)
    }
})),5000)
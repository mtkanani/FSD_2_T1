const msg=function() 
{
    console.log("Hello")    
}
setTimeout(msg,5000)

setTimeout(()=>{
    console.log('1')
},1000);
setTimeout(() => {
    console.log('3')
}, 3000);
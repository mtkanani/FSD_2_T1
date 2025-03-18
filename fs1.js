var fs=require('fs')
//fs.mkdirSync('node');
fs.writeFileSync("node/rw.txt","Hello")
fs.writeFileSync("node/rw.txt","Hello")
fs.appendFileSync("node/rw.txt","\n how are you?")
data=fs.readFileSync("node/rw.txt","utf-8")
//console.log(data)
fs.renameSync('node/rw.txt','node/write.txt')
fs.writeFileSync('node/write.txt','test')
fs.unlinkSync('node/write.txt')
fs.writeFileSync("node/sort.txt","50 -1 99 100 20 41 0 62 35")
data=fs.readFileSync("node/sort.txt",'utf-8')
d=data.split(" ").sort((a,b)=>a-b);
//console.log(d)
let arr=[]
for(i=0;i<d.length;i++){
    arr[i]=parseInt(d[i])

}
console.log(arr)
// var fs=require("fs")
// fs.writeFileSync("fs.txt","Nitya")
// console.log("completed SFS")

var fs=require("fs")
  fs.writeFile("fs1.txt","HI,NANKU",(err)=>{
     if (err) {
         console.error(err);

      }
      else{
             console.log("Written")
      }
 }
 )
     console.log("completed write")

var fs=require("fs")
fs.appendFile("fs1.txt","HI,NANKU",(err)=>{
if (err) {
    console.error(err);
    }
    else{
        console.log("Append")
    }
}
)
console.log("completed app")
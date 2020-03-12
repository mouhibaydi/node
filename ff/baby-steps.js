let s=0 
let args=Number(process.argv.map((el,i)   => i>=2 && (s+= Number(el))  ))
 console.log(s)
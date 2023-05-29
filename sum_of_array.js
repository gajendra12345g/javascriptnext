const arr=[1,2,3,4,5,]
const sumt=(arr)=>{
    return arr.reduce((sum,num)=>{return sum+num},0);
}
console.log(sumt(arr));  
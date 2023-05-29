const str=["gajendra","singh","rajpoot"]

const find=(array)=>{
    return array.filter(string=>string.length===5)
}

console.log(find(str))
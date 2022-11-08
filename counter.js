const counter = (string) => {
    const len = string.length;
    if (len >= 1 && len <= 10) {
        return len;        
    } else {
        throw 'Out of counter bound';
    }
    
}

const reversed = (str='')=>{
    let reverse = '';
    const len = str.length;
    for(let i=len-1; i>=0; i--){
        reverse+= str[i];
    }
    return reverse;
}
module.exports = counter, reversed;
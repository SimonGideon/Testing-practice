const counter = (string) => {
    const len = string.length;
    if (len >= 1 && len <= 10) {
        return len;        
    } else {
        throw 'Out of counter bound';
    }
    
}
module.exports = counter;
function process(str){
    logResults(distinctBuffer(str,4),distinctBuffer(str,14))
}

function distinctBuffer(str, n){
    for(let i = 0; i < str.length - n; i++){
        if(distinctChars(str.substring(i,i+n))){
            return i + n
        }
    }
    return -1    
}

function distinctChars(str){
    let chars = new Set()
    for(let i =0; i < str.length; i++){
        chars.add(str.charAt(i))
    }
    return chars.size === str.length
}
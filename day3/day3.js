function process(str){
    lines = str.split('\n')
    let sum = 0
    lines.forEach(line => {
        let middle = line.length/2
        let a = line.substring(0,middle)
        let b = line.substring(middle,line.length)
        let set = [...new Set(a.split(''))]
        set.forEach(c => {
            if(b.includes(c)){
                if(c.toLowerCase() == c){
                    sum += c.charCodeAt(0)-'a'.charCodeAt(0)+1
                }else{
                    sum += c.charCodeAt(0)-'A'.charCodeAt(0)+27
                }
            }
        })
    });

    let sum2 = 0

    for(let i = 0; i < lines.length/3; i++){
        let a = new Set(lines[i*3].split(''))
        let b = new Set(lines[i*3+1].split(''))
        let c = new Set(lines[i*3+2].split(''))
        for(let i = 0; i < 27; i++){
            let lower = String.fromCharCode('a'.charCodeAt(0)+i)
            let upper = String.fromCharCode('A'.charCodeAt(0)+i)
            if(a.has(lower) && b.has(lower) && c.has(lower)){
                console.log(i+1)
                sum2 += i+1
            }else if(a.has(upper) && b.has(upper) && c.has(upper)){
                console.log(i+27)
                sum2 += i+27
            }
        }
    }
    logResults(sum,sum2)
}
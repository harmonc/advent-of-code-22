function process(str){
    lines = str.split('\n')
    result = 0
    result2 = 0
    lines.forEach(line => {
        let pairs = line.split(',')
        let a = pairs[0].split('-')
        let b = pairs[1].split('-')
        a = a.map(x => parseInt(x))
        b = b.map(x => parseInt(x))
        if(fullyContains(a,b) || fullyContains(b,a)){
            result += 1
        }

        if(partialContains(a,b)){
            result2 += 1
        }
    });
    logResults(result, result2)
}

function fullyContains(a, b){
    return a[0]<=b[0] && a[1]>=b[1]
}

function partialContains(a, b){
    return inRange(a[0],b) || inRange(a[1],b) || inRange(b[0],a) || inRange(b[1],a)
}

function inRange(num, range){
    return num >= range[0] && num <= range[1]
}
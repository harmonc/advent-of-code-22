function process(str){
    lines = str.split('\n\n')

    let stacks = getStacks(lines[0])
    let instructs = getInstructions(lines[1])

    //Part One
    instructs.forEach(x =>{
        for(let i = 0; i < x[0]; i++){
            let e = stacks[x[1]-1].pop()
            stacks[x[2]-1].push(e)
        }
    })
    let result = ''
    stacks.forEach(x=>
        result += x[x.length-1])

    stacks = getStacks(lines[0])
    instructs = getInstructions(lines[1])

    //Part Two
    instructs.forEach(x =>{
        let temp = []
        for(let i = 0; i < x[0]; i++){
            let e = stacks[x[1]-1].pop()
            temp.unshift(e)
        }
        temp.forEach(e =>stacks[x[2]-1].push(e))
    })
    let result2 = ''
    stacks.forEach(x=>
        result2 += x[x.length-1])
    logResults(result,result2)
}

function getInstructions(str){
    instructs = str.split('\n')
    let instructData = []
    instructs.forEach(x => {
        let str = x.replace('move ','')
        str = str.replace(' from ',',')
        str = str.replace(' to ',',')
        let ns = str.split(',')
        ns = ns.map(x=>parseInt(x))
        instructData.push(ns)
    });
    return instructData
}

function getStacks(str){
    currentState = str.split('\n')
    let stacks = []
    let nums = currentState[currentState.length-1]
    for(let i = 0; i < nums.length; i++){
        let stack = []
        if(nums[i]!=' '){
            for(let j = currentState.length-2; j>=0; j--){
                let c = currentState[j][i]
                if(c!=' '){
                    stack.push(c)
                }
            }
            stacks.push(stack)
        }
    }
    return stacks;
}
function process(str){
    let elves = str.split('\n\n')
    let totals = []
    
    //Part One
    elves.forEach(element => {
        let nums = element.split('\n')
        let total = 0
        nums.forEach(n => total += parseInt(n))
        totals.push(total)
    });
    let result = Math.max(...totals)

    //Part Two
    let top_n = []
    let n = 3
    for(let i = 0; i < n; i++){
        let max = Math.max(...totals)
        totals = totals.filter(x=>x!==max)
        top_n.push(max)
    }
    let result2 = top_n.reduce((prev,current)=>prev += current)

    logResults(result,result2)
  }
function process(str){
    let rounds = str.split('\n')
    total = 0
    total2 = 0
    rounds.forEach(function(value){
        let pair = value.split(' ')
        let opponent = pair[0].charCodeAt(0)-'A'.charCodeAt(0)
        let player = pair[1].charCodeAt(0)-'X'.charCodeAt(0)

        //Part One
        total += player+1
        if(opponent === player){
            total += 3
        }else if((opponent+1)%3==player){
            total += 6
        }

        //Part Two
        switch(player){
            case 0: //Need to lose
                total2 += (opponent+2)%3+1
                break;
            case 1: //Need to draw
                total2 += 3 + opponent+1
                break;
            case 2: //Need to win
                total2 += 6 + (opponent+1)%3+1
                break;
        }
    })
    logResults(total,total2)
}
class Cell {
    constructor(){
        this.state = 1
        this.neightbors = []
        this.neightborsState = []
    }

    updateNeightborsStateList() {
        this.neightborsState = []
        for(let neightbor in this.neightbors) {
            const nn = neightbor.state
            this.neightborsState.push(nn)
        }

    }

    nextState() {
   
        let alives = 0

        
       
        for(let neightbor of this.neightbors) {
            if(neightbor.state === 1)
                alives ++
        }

        const isCellAlive = this.state === 1

    

        if(!isCellAlive) {
            if(alives === 3)
                this.state = 1
            return;
        }

        if(alives < 2) {
            this.state = 0
            return
        }
        if(alives === 2 || alives === 3){
            this.state = 1
            return
        }
            
        if(alives > 3)
            this.state = 0
        
    }
}


async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

function getRandomLife() {
    return (Math.random()*30 ) < 28 ? 0 : 1
}

// 3 x 3 

const width = 120
const height = 30

const cells = []
for(let i = 0 ; i < height; i++) {
    const row = []
    for(let j = 0 ; j < width ; j ++) {
        const cell = new Cell()
        cell.state = getRandomLife()
  
        row.push(cell)
    }

    cells.push(row)
}

for(let i = 0 ; i < height; i++) {
    for(let j = 0 ; j < width ; j ++) {
        const curr = cells[i][j]

        cells[i]?.[j - 1] &&  curr.neightbors.push(cells[i][j - 1])
        cells[i]?.[j + 1] && curr.neightbors.push(cells[i][j + 1])
        cells?.[i-1]?.[j] && curr.neightbors.push( cells[i-1][j])
        cells?.[i+1]?.[j] && curr.neightbors.push(cells[i+1][j])
        cells?.[i-1]?.[j+1] && curr.neightbors.push(cells[i-1][j+1])
        cells?.[i-1]?.[j-1] && curr.neightbors.push(cells[i-1][j-1])
        cells?.[i+1]?.[j+1] && curr.neightbors.push(cells[i+1][j+1])
        cells?.[i+1]?.[j-1] && curr.neightbors.push(cells[i+1][j-1])

   
    }

}


// game loop

async function main() {

    console.log("===============FIRST============")
    for(let i = 0 ; i < height; i++) {
        let rowString = ''
        for(let j = 0 ; j < width ; j ++) {
            rowString += ` ${cells[i][j].state === 0 ? '_' : '*'}`
        }

        console.log(rowString)

    
    }

    console.log("===========================")

while(true) {
    console.clear()
    let alives = 0
    for(let i = 0 ; i < height; i++) {
        let rowString = ''
        for(let j = 0 ; j < width ; j ++) {
            const curr = cells[i][j] 
            curr.nextState()
            rowString += ` ${curr.state === 0 ? '_' : '*'}`

            if(curr.state === 1)
                alives ++
        }

        console.log(rowString)

    
    }
    console.log("===========================")
    console.log(`${(alives/(width*height)).toFixed(2)}`)
    console.log("===========================")
    await sleep(0.2)

}
}

main()






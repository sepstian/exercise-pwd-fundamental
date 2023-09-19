class Player {
    constructor (_name){
        this.name = _name
        this.health = 100
        this.power = 10
        this.cost = 1000
        this.mana = 20
    }

    skill = () => {
        if(this.mana == 30){
            this.mana -= 30
            this.power += 5
            this.health += 15
        }
    }

    specialItem = () =>{
        if(this.cost == 5000){
            this.cost -= 5000
            this.health +=50
        }
    }

    hit = (power) => {
        this.health -= power
    }

    useItem = (item) => {
        if(item < 0.5){
            this.health += 10
            this.cost += 1000
            this.mana += 10
            
        }else{
            this.cost += 1000
            this.power += 10
        }
    }
    showStatus = () => {
        return `Player ${this.name} (Health = ${this.health} || Mana = ${this.mana}|| Power = ${this.power} || Cost = ${this.cost})`
    }
}

class shootingGame {
    constructor (_player1, _player2){
        this.player1 = _player1
        this.player2 = _player2
    }
    getRandomItem = () => {
        return Math.random()
    }
    start = () => {
        let tanding = "";
        while (true){
            tanding += `MULAI --> \n${this.player1.showStatus()}\n${this.player2.showStatus()}\n`
            this.player1.useItem(this.getRandomItem());
            this.player2.useItem(this.getRandomItem());
            tanding += `AFTER GET ITEM -->\n${this.player1.showStatus()}\n${this.player2.showStatus()}\n`
            this.player1.specialItem()
            this.player2.specialItem()
            this.player1.skill()
            this.player2.skill()
            tanding += `AFTER USE SKILL/SPESIAL ITEM -->\n${this.player1.showStatus()}\n${this.player2.showStatus()}\n`
            this.player1.hit(this.player2.power)
            this.player2.hit(this.player1.power)
            tanding += `AFTER WAR -->\n${this.player1.showStatus()}\n${this.player2.showStatus()}\n`
            if(this.player2.health <= 0){
                tanding += (`${this.player1.name} is WINNER\n`)
                return tanding += (`${this.player2.name} EXECUTE`)
            }
            if(this.player1.health <= 0){
                tanding += `${this.player2.name} is WINNER\n`
                return tanding += (`${this.player1.name} EXECUTE`)
            }
        }
    }
}



let player1 = new Player ("Johnson")
let player2 = new Player ("Karrie")
let shooting = new shootingGame(player1, player2);
console.log(shooting.start());

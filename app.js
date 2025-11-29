const prompt = require('prompt-sync')();
const spectators = [];
const sessions = [];
const ticket = [];

function spectators(){

}

function sessions(){

}

function tickets(){
    const objTickets ={
        id : ticketId++,
        price : price,

    }
}



function mainMenu() {
    while (true) {
        console.log(`
    =============================
          CINEMA MANAGEMENT
    =============================

    1. Add Spectator
    2. Add Session
    3. Create Ticket
    4. Show Spectators
    5. Show Sessions
    6. Show Tickets
    0. Exit

    ============================
            `);

    const choice = prompt("choose an option: ")
            switch(choice){
                case "1":
                    break;
            }
    }
}
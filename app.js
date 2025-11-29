const prompt = require('prompt-sync')();
const spectators = [];
const sessions = [];
const ticket = [];

function spectatorsss(){
    const name = prompt("enter Spectator name: ");
    let objSpectator = {name : name}
    spectators.push(objSpectator);

   }
  

 
function session(){

}

// function ticket(){
//     const objTickets ={
//         id : ticketId++,
//         price : price,

//     }
// }

mainMenu();

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
                    spectatorsss();
                    break;
            }
    }
}
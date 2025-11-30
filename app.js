const prompt = require('prompt-sync')();
const spectators = [];
const sessions = [];
const tickets = [];

let spectatorId = 1;
let sessionId = 1;
let ticketId = 1;



function spectatorsss() {
    const name = prompt("enter Spectator name: ");
    let objSpectator = { name: name, id: spectatorId++ }
    spectators.push(objSpectator);
    console.log("✔ Spectator added!");
}



function session() {
    const movieName = prompt("enter the movie name: ");
    const SessionTime = Number(prompt("enter session time:"));
    const room = Number(prompt("enter room number: "));
    const category = prompt("enter movie category: ");

    const sessionObj = { sessionId: sessionId++, movieName: movieName, SessionTime: SessionTime, room: room, category: category };
    sessions.push(sessionObj);

    const allowed = ["action", "comedy", "romance", "anime", "drama", "horror"];
    if (!allowed.includes(category)) {
        console.log("invalid category");
    }
}

function CreateTicket() {

    const spectatorID = prompt("Enter spectator ID: ");
    const sessionID = prompt("Enter session ID: ");

    let foundSpectator = null;
    let foundSession = null;

    for (let i = 0; i < spectators.length; i++) {
        if (spectators[i].id === Number(spectatorID)) {
            foundSpectator = spectators[i];
            break;
        }
        if (!foundSpectator) {
            console.log("spectator not found!");
            return;
        }
    }
    for (const element of sessions) {
        if (element.sessionId === Number(sessionID)) {
            foundSession = element;
            break;
        }
        if (!foundSession) {
            console.log("session not found");
            return;
        }
    }
    const basePrice = 40;
    let finalPrice = basePrice;

    if (foundSession.category === "action") { finalPrice = basePrice + 10 };
    if (foundSession.category === "drama") finalPrice += 20;
    if (foundSession.category === "anime") finalPrice += 15;
    if (foundSession.category === "comedy") finalPrice += 9;
    if (foundSession.category === "horror") finalPrice += 19;

    const objTickets = {
        id: ticketId++,
        movie: foundSession.movieName,
        price: finalPrice,
        category: foundSession.category
    };
    tickets.push(objTickets);

    console.log("✔ Ticket created successfully!");
    console.log(objTickets);
}

function displayMovies() {
    
    if (sessions.length === 0) {
        console.log("no movies available at the moment.");
        return;
    }
     console.log("available Movies:");

    sessions.forEach(session => {
        console.log(`Movie Name : ${session.movieName}`);
        console.log(`Session ID : ${session.sessionId}`);
        console.log(`Time       : ${session.SessionTime}`);
        console.log(`Room       : ${session.room}`);
        console.log(`Category   : ${session.category}`);
        console.log('-----------------------------');
    });

}

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
        switch (choice) {
            case "1":
                spectatorsss();
                break;
            case "2":
                session();
                break;
            case "3":
                CreateTicket();
                break;
            case "5":
                displayMovies();
                break;
            case "0":
                console.log("bye");
                return;
        }
    }
}
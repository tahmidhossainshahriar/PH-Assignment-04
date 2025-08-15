function  bestTeam( player1, player2 ) {
          // You have to write your code here
 if (typeof player1 !== 'object' || typeof player2 !== 'object') {
    return "Invalid";
  }

  const score1 = player1.foul + player1.cardY + player1.cardR;
  const score2 = player2.foul + player2.cardY + player2.cardR;

  if (score1 < score2) {
    return player1.name;
  } else if (score2 < score1) {
    return player2.name;
  } else {
    return "Tie";
  }
}


// চেক করার জন্য
const team1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
const team2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };
console.log(bestTeam(team1, team2));

const team3 = { name: "Germany", foul: 12, cardY: 0, cardR: 0 };
const team4 = { name: "Sweden", foul: 7, cardY: 4, cardR: 1 };
console.log(bestTeam(team3, team4));

const team5 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const team6 = { name: "France", foul: 10, cardY: 2, cardR: 1 };
console.log(bestTeam(team5, team6));

const team7 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const team8 = "France";
console.log(bestTeam(team7, team8));

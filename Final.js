function totalFine( fare ) {
          // You have to write your code here
 if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let fine = fare + (fare * 20 / 100) + 30;
    return fine;
}


function  onlyCharacter( str ) {
          // You have to write your code here
if (typeof str !== 'string') {
    return "Invalid";
  }

  const cleanedString = str.replaceAll(' ', '');
  const result = cleanedString.toUpperCase();

  return result;
}



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


function  isSame(arr1 , arr2 ) {
          // You have to write your code here
 if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}


function  resultReport( marks ) {
          // You have to write your code here
 if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let totalMarks = 0;
  let passCount = 0;
  let failCount = 0;

  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }

  for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
    if (marks[i] >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  const finalScore = Math.round(totalMarks / marks.length);

  return {
    finalScore: finalScore,
    pass: passCount,
    fail: failCount,
  };
}
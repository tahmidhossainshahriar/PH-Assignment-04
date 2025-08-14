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

// চেক করার জন্য
console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));
function  onlyCharacter( str ) {
          // You have to write your code here
if (typeof str !== 'string') {
    return "Invalid";
  }

  const cleanedString = str.replaceAll(' ', '');
  const result = cleanedString.toUpperCase();

  return result;
}

// চেক করার জন্য
console.log(onlyCharacter(" h e l l o wor ld "));
console.log(onlyCharacter("Cy bar- At tack "));
console.log(onlyCharacter("hackme1@ru.c n"));
console.log(onlyCharacter("Serv er :: Do wn"));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));
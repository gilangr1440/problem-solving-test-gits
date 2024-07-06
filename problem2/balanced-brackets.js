function BalancedBrackets(string) {
  const stringArr = string.split(" ");
  let parenthesesOpen = "",
    parenthesesClose = "",
    squareBracketsOpen = "",
    squareBracketsClose = "",
    curlyBracesOpen = "",
    curlyBracesClose = "";

  for (let i = 0; i < string.length; i++) {
    if (stringArr[i] == "(") {
      parenthesesOpen += stringArr[i];
    } else if (stringArr[i] == "[") {
      squareBracketsOpen += stringArr[i];
    } else if (stringArr[i] == "{") {
      curlyBracesOpen += stringArr[i];
    } else if (stringArr[i] == "}") {
      curlyBracesClose += stringArr[i];
    } else if (stringArr[i] == "]") {
      squareBracketsClose += stringArr[i];
    } else if (stringArr[i] == ")") {
      parenthesesClose += stringArr[i];
    }
  }

  // this section aims to determine whether the number of opening and closing brackets is the same
  if (parenthesesOpen.length == parenthesesClose.length && squareBracketsOpen.length == squareBracketsClose.length && curlyBracesOpen.length == curlyBracesClose.length) {
    // this section aims to determine whether the opening brackets and the closing brackets are the same type
    if (string.includes("( ]" || "( }" || "[ )" || "[ }" || "{ )" || "{ ]")) {
      return "NO";
    } else {
      return "YES";
    }
  } else {
    return "NO";
  }
}

console.log(BalancedBrackets("{ [ ( ) ] }"));
console.log(BalancedBrackets("{ [ ( ] ) }"));
console.log(BalancedBrackets("{ ( ( [ ] ) [ ] ) [ ] }"));

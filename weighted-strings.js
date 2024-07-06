function WeightedStrings(string, queries) {
  const combination = (string) => {
    const removeDup = string.filter((value, index) => string.indexOf(value) === index);
    let result = [];
    let temp = "";

    for (let i = 0; i < removeDup.length; i++) {
      for (let j = 0; j < string.length; j++) {
        if (removeDup[i] == string[j]) {
          temp += string[j];
        }
        if (!result.includes(temp) && temp != "") {
          result.push(temp);
        }
      }
      temp = "";
    }

    return result;
  };

  const weight = (arr) => {
    const alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const alphabetWeight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    const result = [];
    const combinationStrArr = combination(arr);

    for (let i = 0; i < combinationStrArr.length; i++) {
      let temp = combinationStrArr[i].split("");
      let total = 0;
      for (let j = 0; j < temp.length; j++) {
        total += alphabetWeight[alphabetArr.indexOf(temp[j])];
      }
      result.push(total);
      total = 0;
    }

    return result;
  };

  const strArr = string.split("").sort();
  const theWeight = weight(strArr);
  const result = [];

  for (let val of queries) {
    if (theWeight.includes(val)) {
      result.push("Yes");
    } else {
      result.push("No");
    }
  }

  return result;
}

console.log(WeightedStrings("abbcccd", [1, 3, 9, 8]));
console.log(WeightedStrings("bbccc", [3, 4, 8, 10, 3]));
console.log(WeightedStrings("javascript", [4, 2, 6, 8, 2]));

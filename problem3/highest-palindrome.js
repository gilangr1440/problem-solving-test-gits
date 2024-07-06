function HighestPalindrome(number, k, i) {
  if (i > number.toString().length / 2) {
    return number;
  }
  return number.toString()[i] == number.toString()[number.toString().length - i - 1] ? HighestPalindrome(number, k, i + 1) : -1;
}

console.log(HighestPalindrome(3943, 1, 0));
console.log(HighestPalindrome(932239, 2, 0));
console.log(HighestPalindrome(2002, 2, 0));

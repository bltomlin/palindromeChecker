function checkBtn() {
  let value = document.getElementById("text-input").value;
  if (value === "") {
    alert('Please input a value');
  } else {
    let strip_value = removeNonAlphanumeric(value);
    palindomeChecker(strip_value);
  }
}

function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
};

function palindomeChecker(str) {
  let lStr = str.toLowerCase()
  let splitString = lStr.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  if (joinArray === lStr) {
    document.getElementById("result").innerHTML = document.getElementById("text-input").value + ' is a palindrome'
  } else {
    document.getElementById("result").innerHTML = document.getElementById("text-input").value + ' is not a palindrome'
  }
}

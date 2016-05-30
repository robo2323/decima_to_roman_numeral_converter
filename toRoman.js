function convertToRoman(num) {

  var romArr = [];
  arr = num.toString().split("").reverse();

  for (j = 0; j <= arr.length; j++) {

    if (j === 0 && arr[j] == 4) {
      romArr.push("IV");
    } else if (j === 0 && arr[j] == 9) {
      romArr.push("IX");
    } else if (j === 1 && arr[j] == 4) {
      romArr.push("XL");
    } else if (j === 1 && arr[j] == 9) {
      romArr.push("XC");
    } else if (j === 2 && arr[j] == 4) {
      romArr.push("CD");
    } else if (j === 2 && arr[j] == 9) {
      romArr.push("CM");
    } else {

      for (i = 0; i < arr[j] % 5; i++) {

        if (j === 0) {
          romArr.push("I");
        } else if (j === 1) {
          romArr.push("X");
        } else if (j === 2) {
          romArr.push("C");
        } else if (j >= 3) {
          romArr.push("M");
        }
      }
      for (i = 0; i < Math.floor(arr[j] / 5); i++) {
        if (j === 0) {
          romArr.push("V");
        } else if (j === 1) {
          romArr.push("L");
        } else if (j === 2) {
          romArr.push("D");
        }
      }
    }
  }
  return romArr.reverse().join("");
}

convertToRoman(12);

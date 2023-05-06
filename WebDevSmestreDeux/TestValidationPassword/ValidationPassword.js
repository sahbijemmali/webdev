function check() {
  let input = document.getElementById("password").value;
  let testLong = false;
  let testMaj = false;
  let testSpec = false;
  let TestNumb = false;
  //test longueur
  if (input.length > 8) {
    testLong = true;
    document.getElementById("test-long").style.color = "green";
  } else {
    document.getElementById("test-long").style.color = "red";
  }

  for (let index = 0; index < input.length; index++) {
    let char = input[index];
    // code ascii: caractere < 0-9 < A-Z < a-z
    //string.charCodeAt(0)
    //test majuscule
    if ('A'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
      testMaj = true;
    } else if (char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0)) {
      TestNumb = true; //test numero
    } else if (char.charCodeAt(0) < '0'.charCodeAt(0)) {
      testSpec = true;
    } else {
      continue;
    }
  }
  if (testMaj) {
    document.getElementById("test-maj").style.color = "green";
  } else {
    document.getElementById("test-maj").style.color = "red";
  }
  if (testSpec) {
    document.getElementById("test-spec").style.color = "green";
  } else {
    document.getElementById("test-spec").style.color = "red";
  }
  if (TestNumb) {
    document.getElementById("test-numb").style.color = "green";
  } else {
    document.getElementById("test-numb").style.color = "red";
  }
}

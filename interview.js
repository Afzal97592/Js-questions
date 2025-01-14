function pattern(n) {
  for (let i = 0; i < n; i++) {
    let res = "";
    //  space
    for (let j = 0; j < n - (i + 1); j++) {
      res += "  ";
    }
    // star
    for (let k = 0; k < 2 * i + 1; k++) {
      res += "* ";
    }
    // space
    // useImpretiveHandler
    for (let l = 0; l < n - (i + 1); l++) {
      res += "  ";
    }
    console.log(res);
  }
}
pattern(5);

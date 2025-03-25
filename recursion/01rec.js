function main() {
  let num = 3;
  fun1(num);
}
main();

function fun1(num) {
  if (num > 0) {
    // console.log(num);
    // fun1(num - 1);

    fun1(num - 1);
    console.log(num);
  }
}

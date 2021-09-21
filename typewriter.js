// const sentence = "hello there from lighthouse labs";

// //looping through characters *version 1*
// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   console.log(char);
// };
// /*console.log will add a new line character (\n) to the end of the string. However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.*/

// //version 2
// const sentence = "hello there from lighthouse labs";
// use process.stdout.write 
// for (const char of sentence) {
//   process.stdout.write(char);
// };
// //prints hello there from lighthouse labs


// //use a set timeout within the loop to have a delayed release for the entire string.
// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000)
// }

//Delaying Each Character Separately
const sentence = "hello there from lighthouse labs";
let timer = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char), timer}
  , 
  timer += 50)
}

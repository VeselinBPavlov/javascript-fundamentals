function countOccurrences(str, text) {
    let counter = 0;
     let index = text.indexOf(str);

     while (index > -1) {
         counter++;
         index = text.indexOf(str, index + 1);
     }

    console.log(counter);
}

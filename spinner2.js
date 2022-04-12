const spinnerChars = [
  '\r|      ', '\r/     ',
  '\r-      ', '\r\\    ',
  '\r|      ', '\r/     ',
  '\r-      ', '\r\\    '];

//loops through array
for (let i = 0; i < (spinnerChars.length * 2) - 2; i++) {
  
  setTimeout(() => {
    
    process.stdout.write(spinnerChars[i]);
    //increments each character by 200ms
  }, 200 * i);
}

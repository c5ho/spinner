const blades = [ '|', '/', '-', '|', '/', '-', '\\', '|', '\n'];

let delay = 100;
for (let blade of blades) {
  setTimeout(() => {
    process.stdout.write('\r'+blade);
  }, delay)
delay +=200;
}



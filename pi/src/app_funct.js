
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours} ${minutes}`;
    document.getElementById('reloj').innerText = timeString;
}
setInterval(updateClock, 1000)
updateClock(); // Initial update
// jajajaja obama soccer

const closeBtn = document.getElementById("sel");
const minimizeBtn = document.getElementById("so");

closeBtn.addEventListener("click", close_app);
minimizeBtn.addEventListener("click", minimize_app);

function close_app() {
  app.window.close();
}

function minimize_app() {
  app.window.minimize();
}

function expandInput() {
  var input = document.getElementById("formula");
  if (input.value === "") {
      input.style.width = "100px"; // Set a fixed width when the input is empty
  } else {
      input.style.width = "100px"; // Reset the width to auto
      input.style.width = input.scrollWidth + "px"; // Set the width based on the scroll width
  }
}


const cuadradoResult = document.getElementById('cuadradoResult');

let textInput = document.getElementById('formula');
let textInputMIN = document.getElementById('min');
let textInputMAX = document.getElementById('max');

var indicator = 0;

console.log('sexo es', indicator);
if (indicator == 0){
  textInput.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
      event.preventDefault();
      indicator = 1;


        if (event.key === 'Enter') {
          const arg3 = textInputMAX.value;
          const arg2 = textInputMIN.value;
          const arg1 = textInput.value;
          indicator2 = 0;
          if (!(arg2 == null || (typeof arg2 === "string" && arg2.trim().length === 0)) && !(arg3 == null || (typeof arg3 === "string" && arg3.trim().length === 0)) && !(arg1 == null || (typeof arg1 === "string" && arg1.trim().length === 0)) && indicator == 1){
            indicator2 = 0;

            const arg3 = textInputMAX.value;
            const arg2 = textInputMIN.value;
            const arg1 = textInput.value;

            const args = [arg1, arg2, arg3]; // replace with your actual arguments

            api.runPythonScript(args);

          };
          }
        }
      }
    );

};

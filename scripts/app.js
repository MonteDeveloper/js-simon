const elSimonNumbersBox = document.getElementById("my-simonNumbersBox");
let listOfSimonNumbers = [];

main();

function main(){
    let rndNumber;
    let colors = [
        "Orange",
        "Purple",
        "Green",
        "Blue",
        "Pink"
    ]
    let randomArrayIndex;

    elSimonNumbersBox.innerHTML = "";
    for (let index = 0; index < 5; index++) {
        rndNumber = Math.floor(Math.random() * 999) + 1;

        randomArrayIndex = Math.floor(Math.random() * colors.length);
        randomColor = colors.splice(randomArrayIndex, 1)[0];

        elSimonNumbersBox.innerHTML += `
            <div class="border rounded my-simonNumber my-bg${randomColor}">
                ${rndNumber}
            </div>
        `;

        listOfSimonNumbers.push(rndNumber);
    }

    startCountdown(30);
}

function startCountdown(seconds){
    const elCountdown = document.getElementById("my-countdown");

    elCountdown.innerHTML = seconds;

    if(seconds >= 1){
        setTimeout(() => {
            startCountdown(seconds - 1)
        }, 1000);
    }else{
        elSimonNumbersBox.innerHTML = "";

        setTimeout(() => {
            endGame();
        }, 1000);
    }
}

function endGame(){
    let listOfUserNumbers = [];
    let userNumber;

    for (let n = 5; n > 0; n--) {
        userNumber = prompt(`Inserisci un numero (ancora ${n}):`);
        listOfUserNumbers.push(userNumber);
    }

    console.log(listOfUserNumbers, listOfSimonNumbers);
    if(areArraysEqual(listOfUserNumbers, listOfSimonNumbers)){
        alert("Hai vinto!");
    }else{
        alert("Hai perso!");
    }

    main();
}

function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    } 
 
    let sortedArr1 = arr1.sort();
    let sortedArr2 = arr2.sort();
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] != sortedArr2[i]) {
            return false;
        }
    }
    return true;
}
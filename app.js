function montyHall(switchDoor) {

    let carBehindDoor = Math.floor(Math.random() * 3); //generate random numbers 0,1,2 

    let doorSelected = Math.floor(Math.random() * 3);
    let revealedDoor = [0, 1, 2].find((door) => door !== carBehindDoor && door !== doorSelected); //if we assume car is not behind door of choice one and 
    if (switchDoor) {
        return carBehindDoor === [0, 1, 2].find((door) => door !== doorSelected && door !== revealedDoor) // and if we assume selected door isn't one with a car and the host has already reveled the other door so switching gives us double the odds

    }
    else {
        return carBehindDoor === doorSelected
    }
}


// Now to test the statistical outcome of our theory we will simulate the game few times 

function simulateGame(num, switchDoor) {

    let gamesWon = 0;

    for (let i = 0; i < num; i++) {

        gamesWon += montyHall(switchDoor)
    }
    return gamesWon;

}

// const doors = document.querySelectorAll('button')
// console.log(doors)
// doors.forEach(door => {door.addEventListener('click', () => 

// console.log(simulateGame(1000, switchDoor = false))})


const btnOne = document.querySelector('.btn-1')

btnOne.addEventListener('click', () => {
    // console.log(simulateGame(1000, switchDoor = true))
    btnOne.textContent = `${simulateGame(1000, switchDoor = false)} % Stick!`

})

const btnTwo = document.querySelector('.btn-2')
btnTwo.addEventListener('click', () => {
    btnTwo.textContent = 'RevealedDoor'

})

const btnThree = document.querySelector('.btn-3')

btnThree.addEventListener('click', () => {
    // console.log(simulateGame(1000, switchDoor = true))
    btnThree.textContent = `${simulateGame(1000, switchDoor = true)} % Switch!`

})






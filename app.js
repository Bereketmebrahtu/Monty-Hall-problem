 function montyHall(switchDoor) {

     let carBehindDoor = Math.floor(Math.random() * 3); //generate random numbers 0,1,2 
     console.log(carBehindDoor)
     let doorSelected = Math.floor(Math.random() * 3);
     let revealDoor = [0,1,2].find((door) => door !== carBehindDoor && door !== doorSelected); //check for car in 
     if(switchDoor) {
         return carBehindDoor === [0,1,2].find((door) => door !== carBehindDoor && door !== revealDoor) // and if we assume selected door isn't one with a car and the host has already reveled the other door so switching gives us double the odds

     }
     else  {
return carBehindDoor === doorSelected
     }
 }


// Now to test the statistical outcome of our theory we will simulate the game few times 
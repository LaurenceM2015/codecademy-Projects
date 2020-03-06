

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start'); // Task 54:

// Task 51:
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

// ACT Game Part 2: Building a Winner.

// Task 50:
const isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
}


// Task 46, 47, 49
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0){
     gameOver('win'); 
  }
}

// Task 38: 
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else { (choreDoor === 2)
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
  
}


door1.onclick = () => {
  if(!isClicked(doorImage1)) {
    doorImage1.src= openDoor1; 
    playDoor();
  }
}

door2.onclick = () =>{
  if(!isClicked(doorImage2)) {
    doorImage2.src= openDoor2; 
    playDoor();
  }
}

door3.onclick = () =>{
  if(!isClicked(doorImage3)) {
    doorImage3.src= openDoor3; 
    playDoor();
  }
}

// Task 54: Game Over function
const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
}

randomChoreDoorGenerator();


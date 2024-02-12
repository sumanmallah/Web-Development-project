let themeButton = document.getElementById("theme-button");
const toggle = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggle);


const addSignature = (person) => {
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lname').value;

  const signaturesDiv = document.querySelector('.signatures');
  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${name}  ${lastname} signed the petition.`;
  signaturesDiv.appendChild(newSignature);
  toggleModal(person);
};

const signNowButton = document.getElementById('sign-now-button');
//signNowButton.addEventListener('click', addSignature);
///////////////////////////////////////////////////////////////////////////
// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {
  
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs[0].value
  }
  const email = document.getElementById('email');
  // TODO: Loop through all inputs
  for(let i = 0; i < petitionInputs.length;i++){
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
    else{
    petitionInputs[i].classList.remove('error');
    }
  }
  if(!email.value.includes('.com')){
    containsErrors = true;
    email.classList.add('error');
  }
  else{
    email.classList.remove('error');
  }
  if (containsErrors == false) {
  addSignature(person);
  for (let i = 0; i < petitionInputs.length; i++) {
    petitionInputs[i].value = "";
    containsErrors = false;
  }
  }



  // TODO: Validate the value of each input



  // TODO: Call addSignature() and clear fields if no errors

}

signNowButton.addEventListener('click', validateForm);
// week 8 step 1
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}
//step 2
// Select every element with the class "revealable"
let revealableContainers = document.querySelectorAll('.revealable');

// Define the reveal function
function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    // Check if the container should be revealed
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      // Add the "active" class to the revealableContainer's classlist
      revealableContainers[i].classList.add('active');
    } else {
      // Remove the "active" class from the revealableContainer's classlist
      revealableContainers[i].classList.remove('active');
    }
  }
}

// Add the reveal function as an event listener to the window with the event type 'scroll'
window.addEventListener('scroll', reveal);


const toggleModal = (person) => {
  let intervalId = setInterval(scaleImage,500);
  let modal = document.getElementById("thanks-modal"); // Represents the entire background
  let modalContent = document.getElementById("thanks-content-modal"); // Contains the text the users will see
  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name} !`;
  setTimeout(() => {
    clearInterval(intervalId);
    modal.style.display = "none";
  }, 5000);
}

let scaleFactor = 1;
let modalImage = document.getElementById("modal-img");
const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}





document.addEventListener('DOMContentLoaded', function () {
    const images = Array.from({ length: 22 }, (_, i) => `image-${String(i + 1).padStart(2, '0')}`);
    const body = document.body;
    const imageRoler = document.getElementById('image-roler');
    let counter = 0;
    let intervalId;

    // Function to update the background image and highlight avatar
    const updateBackgroundAndHighlight = (index) => {
        // Update the background image
        body.style.backgroundImage = `url("../assets/${images[index]}.webp")`;
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center center';
        body.style.backgroundAttachment = 'fixed';
        body.style.transition = 'background-image 1s ease-in-out';

        // Remove highlight from all avatars
        document.querySelectorAll('.avatar').forEach((avatar) => {
            avatar.style.border = 'none';
        });

        // Highlight the corresponding avatar
        const avatars = document.querySelectorAll('.avatar');
        if (avatars[index]) {
            avatars[index].style.border = '2px solid yellow';
        }
    };

    // Start the auto-rotation of images
    const startAutoRotation = () => {
        intervalId = setInterval(() => {
            updateBackgroundAndHighlight(counter);
            counter = (counter + 1) % images.length; // Loop back to the start
        }, 5000);
    };

    // Stop the auto-rotation of images
    const stopAutoRotation = () => {
        clearInterval(intervalId);
    };

    // Function to create image avatars
    const createImageAvatars = () => {
        images.forEach((image, index) => {
            const avatarDiv = document.createElement('div');
            avatarDiv.classList.add('avatar');

            const avatarImg = document.createElement('img');
            avatarImg.src = `../assets/${image}.webp`;
            avatarDiv.appendChild(avatarImg);

            imageRoler.appendChild(avatarDiv);

            // Add click event to manually update background and highlight
            avatarDiv.addEventListener('click', () => {
                stopAutoRotation(); // Stop the auto-rotation
                updateBackgroundAndHighlight(index); // Update manually
                counter = index; // Sync counter with the clicked avatar
                startAutoRotation(); // Restart auto-rotation
            });
        });
    };

    // Create avatars on page load
    createImageAvatars();

    // Set initial background and highlight
    updateBackgroundAndHighlight(counter);

    // Start the auto-rotation
    startAutoRotation();
    const messageInput = document.getElementById('message');
    let messageLength = messageInput.value.length;
    const messageCount = document.getElementById('message-count');
    const fromInput = document.getElementById('from-name');
    const toInput = document.getElementById('to-name');
    const subjectInput = document.getElementById('subject-name');

    const validateButton = document.getElementById('validateButton');

    const fromError = document.getElementById('from-error');
    const toError = document.getElementById('to-error');
    const fromErrorLength = document.getElementById('from-error-length');
    const toErrorLength = document.getElementById('to-error-length');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    let subjectValue;
    //const messageLength = messageInput.value.trim().length;

    //select messages
    const generateMessage = () =>{
        messages = ['Birthday','Christmas', 'Happy New Year'];
        const spanofGreetings = subjectInput;

        messages.forEach(element => {
            const para = document.createElement('span');
            para.style.marginRight = "3px"
            para.textContent = element;
            spanofGreetings.appendChild(para);

          
            getGreetingsMessage(element);
            para.addEventListener('click',function(){
                getGreetingsMessage(element);
            })


            
        });
        
    }

    generateMessage();
    
    

    function getGreetingsMessage(msg){
       
        // const injectMessageId = document.getElementById('message');
        const birthDay = [
        "Happy birthday! 🎉 May your day be filled with joy, laughter, and all the things that bring you happiness. You deserve every wonderful moment life has to offer, and I hope this year brings you exciting adventures and beautiful memories. Cheers to another year of greatness, fun, and dreams coming true. Enjoy your special day to the fullest!",
        "Warmest Christmas wishes to you! 🎄✨ May your holiday season be filled with love, laughter, and all the magic that makes this time of year special. I hope your home is full of joy, your heart full of peace, and your days full of cherished moments. Merry Christmas, and here's to beautiful memories that last a lifetime!",
        "Happy New Year! 🎉🥂 May this new year bring you endless joy, new adventures, and wonderful opportunities. I hope you achieve your dreams, enjoy every moment, and find happiness in everything you do. Cheers to new beginnings, fresh starts, and a year filled with health, love, and success. Let’s make 2025 an amazing year together!"];

        if(msg === 'Birthday'){

            subjectValue = 'Happy Birthday'

            messageInput.textContent = birthDay[0];
            messageLength = birthDay[0].length;
            initialMessageLengthCheck(birthDay[0].length)
        }
        else if(msg === 'Christmas'){
            subjectValue = 'Merry Christmas'
            messageInput.textContent = birthDay[1];
           messageLength = birthDay[1].length;
           initialMessageLengthCheck(birthDay[1].length)
        }
        else{
            subjectValue = 'Happy New Year'
            messageInput.textContent = birthDay[2];
            initialMessageLengthCheck(birthDay[2].length)
            messageLength = birthDay[2].length;
        }


       
    

 
        
       

    }

   function initialMessageLengthCheck(initmessageLength){
            // Validate Message Input
        messageCount.textContent = `${initmessageLength}/350`;
    if (initmessageLength === 0) {
        messageError.textContent = 'Message cannot be empty.';
        isValid = false;
    } else if (initmessageLength > 350) {
        messageError.textContent = 'Message cannot exceed 350 characters.';
        isValid = false;
    } else {
        messageError.textContent = '';
    }
    }
    
    // document.getElementById('navigateButton').addEventListener('click', function () {
       
    // });

    document.getElementById('backButton').addEventListener('click', function () {
        const baseUrl = `${window.location.protocol}//${window.location.host}`;
        const newPage = `${baseUrl}`;
        window.location.href = newPage;
    });

    const loadingScreen = document.getElementById('loading-screen');
        // Simulate a delay (e.g., for loading content)
        setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide the loader
        }, 3000); // Adjust delay as needed




// Function to validate inputs
const validateInputs = () => {
    let isValid = true;

   

    // Validate From Input
    if (fromInput.value.trim() === '') {
        fromError.textContent = 'From name is required.';
        isValid = false;
    } else {
        fromError.textContent = '';
    }

    // Validate To Input
    if (toInput.value.trim() === '') {
        toError.textContent = 'Recipient name is required.';
        isValid = false;
    } else {
        toError.textContent = '';
    }

    if(fromInput.value.length > 20){
        fromErrorLength.textContent = 'From name length is too long.';
        isValid = false;
    }
    else {
        fromErrorLength.textContent = '';
    }


    if(toInput.value.length > 20){
        toErrorLength.textContent = 'Recipient name length is too long.';
        isValid = false;
    }
    else {
        toErrorLength.textContent = '';
    }
    // Validate Subject Input
    if (subjectInput.textContent.trim() === '') {
        subjectError.textContent = 'Subject is required.';
        isValid = false;
    } else {
        subjectError.textContent = '';
    }

    // Validate Message Input

    if (messageLength === 0) {
        messageError.textContent = 'Message cannot be empty.';
        isValid = false;
    } else if (messageLength > 350) {
        messageError.textContent = 'Message cannot exceed 350 characters.';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    return isValid;
};

// Update character count in real-time
messageInput.addEventListener('input', () => {
    const messageLengths = messageInput.value.length;
    messageCount.textContent = `${messageLengths}/350`;

    // Update error message if character limit is exceeded
    if (messageLength > 350) {
        messageError.textContent = 'Message cannot exceed 350 characters.';
    } else {
        messageError.textContent = '';
    }
});

const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const alertButton = document.getElementById('alertButton');

// Function to show the custom alert
function showAlert(message) {
    alertMessage.textContent = message; // Set the alert message
    customAlert.classList.remove('hidden'); // Show the alert modal
}

// Function to hide the custom alert
alertButton.addEventListener('click', function () {
    customAlert.classList.add('hidden'); // Hide the alert modal
});

// Handle form submission
validateButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateInputs()) {
        //alert('Form is valid! Proceeding...');

        const formData = {
            from: fromInput.value.trim(),
            to: toInput.value.trim(),
            subject: subjectValue,
            message: messageInput.value.trim(),
            backgroundImageId:counter
        };

        // Add additional data
        formData.timestamp = new Date().toISOString(); // Add timestamp
        formData.greetingType = 'Birthday'; // Example additional data

        // Store the form data in localStorage
        localStorage.setItem('greetingCardData', JSON.stringify(formData));





        const baseUrl = `${window.location.protocol}//${window.location.host}`;
        const newPage = `${baseUrl}/magic_card_page`;
        window.location.href = newPage;
    } else {
        showAlert('Please correct the errors before proceeding.');
    }
});

});

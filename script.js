document.addEventListener('DOMContentLoaded', function () {
    const images = Array.from({ length: 22 }, (_, i) => `image-${String(i + 1).padStart(2, '0')}`);
    const body = document.body;
    //const imageRoler = document.getElementById('image-roler');
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
      
    };

    // Start the auto-rotation of images
    const startAutoRotation = () => {
        intervalId = setInterval(() => {
            updateBackgroundAndHighlight(counter);
            counter = (counter + 1) % images.length; // Loop back to the start
        }, 5000);
    };

    // Stop the auto-rotation of images
    // const stopAutoRotation = () => {
    //     clearInterval(intervalId);
    // };

    // Function to create image avatars
    // const createImageAvatars = () => {
    //     images.forEach((image, index) => {
    //         const avatarDiv = document.createElement('div');
    //         avatarDiv.classList.add('avatar');

    //         const avatarImg = document.createElement('img');
    //         avatarImg.src = `../assets/${image}.webp`;
    //         avatarDiv.appendChild(avatarImg);

    //         imageRoler.appendChild(avatarDiv);

    //         // Add click event to manually update background and highlight
    //         avatarDiv.addEventListener('click', () => {
    //             stopAutoRotation(); // Stop the auto-rotation
    //             updateBackgroundAndHighlight(index); // Update manually
    //             counter = index; // Sync counter with the clicked avatar
    //             startAutoRotation(); // Restart auto-rotation
    //         });
    //     });
    // };

    // Create avatars on page load
    // createImageAvatars();

    // Set initial background and highlight
    updateBackgroundAndHighlight(counter);

    // Start the auto-rotation
    startAutoRotation();


    //select messages
    // const generateMessage = () =>{
    //     messages = ['Birthday','Christmas', 'Happy New Year'];
    //     const spanofGreetings = document.getElementById('greetings-message');

    //     messages.forEach(element => {
    //         const para = document.createElement('span');
    //         para.style.marginRight = "3px"
    //         para.textContent = element;
    //         spanofGreetings.appendChild(para);
            
    //     });
        
    // }

    // generateMessage();


       // Function to send a POST request to the API and store the response in local storage
       async function fetchAndStoreUserInfo() {
        const apiUrl = "https://vinmagic.bydeb.in/V1/createInfo";

        try {
            // Send the POST request to the API with all necessary headers
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8', // Matches API Content-Type
                    'Access-Control-Allow-Origin': '*', // Allow all origins
                    'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT, PATCH, OPTIONS', // Allow supported methods
                    'Access-Control-Max-Age': '3600', // Cache preflight for 1 hour
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' // Allow necessary headers
                }
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON response
            const responseData = await response.json();

            // Check if the API indicates success
            if (responseData.success) {
                // Store the data in local storage
                localStorage.setItem('userInfo', JSON.stringify(responseData.data));

                console.log("User info stored in local storage:", responseData.data);
            } else {
                console.error("API response error:", responseData.messages);
            }
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    }

    // Call the function
    fetchAndStoreUserInfo();
    
function barfunction($rootElement,initialValue){
    const MIN = 0;
    const MAX =100;

    $rootElement.classList.add('progress');
    const $progressBarEl = document.createElement('div');
    $progressBarEl.className = 'progress-bar';
    $progressBarEl.setAttribute('role', 'progressbar');
    $progressBarEl.setAttribute('aria-valuemin', MIN);
    $progressBarEl.setAttribute('aria-valuemax', MAX);



 function setValue(value) {
    // Handle invalid values and convert them to be within [0, 100].
    const clampedValue = Math.min(
      Math.max(value, MIN),
      MAX,
    );

    $progressBarEl.style.width = `${clampedValue}%`;
    // $progressBarEl.textContent = `${clampedValue}%`;
    $progressBarEl.setAttribute(
      'aria-valuenow',
      clampedValue,
    );
  }

  $rootElement.appendChild($progressBarEl);
  setValue(initialValue);

  return {
    setValue,
  };



}
barfunction(document.querySelector('#progress-0'), 10);

document.getElementById('navigateButton').addEventListener('click', function () {
    const baseUrl = `${window.location.protocol}//${window.location.host}`;
    const newPage = `${baseUrl}/magic_form_page`;
    window.location.href = newPage;
});



const loadingScreen = document.getElementById('loading-screen');
// Simulate a delay (e.g., for loading content)
setTimeout(() => {
  loadingScreen.style.display = 'none'; // Hide the loader
}, 3000); // Adjust delay as needed


});

document.addEventListener('DOMContentLoaded', function () {
    const images = Array.from({ length: 20 }, (_, i) => `image-${String(i + 1).padStart(2, '0')}`);
    const body = document.body;
    const imageRoler = document.getElementById('image-roler');
    let counter = 0;
    let intervalId;

    // Function to update the background image and highlight avatar
    const updateBackgroundAndHighlight = (index) => {
        // Update the background image
        body.style.backgroundImage = `url("./assets/${images[index]}.webp")`;
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
            avatarImg.src = `./assets/${image}.webp`;
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


    //select messages
    const generateMessage = () =>{
        messages = ['Birthday','Merry Christmas', 'Happy New Year'];
        const spanofGreetings = document.getElementById('greetings-message');

        messages.forEach(element => {
            const para = document.createElement('span');
            para.style.marginLeft = "3px"
            para.textContent = element;
            spanofGreetings.appendChild(para);
            
        });
        
    }

    generateMessage();
});

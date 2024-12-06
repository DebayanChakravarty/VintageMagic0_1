document.addEventListener('DOMContentLoaded', () => {

    const greetingCardData = JSON.parse(localStorage.getItem('greetingCardData'));

    //document.getElementById('from').textContent = `${greetingCardData.from}`;
    //document.getElementById('to').textContent = `${greetingCardData.to}`;
    const to = document.getElementById('to');
    const toData = document.createElement('div');
    toData.textContent =  `${greetingCardData.to}`;
    to.appendChild(toData);

    const from = document.getElementById('from');
    const fromData = document.createElement('div');
    fromData.textContent =  `${greetingCardData.from}`;
    from.appendChild(fromData);


    document.getElementById('subject').textContent = `${greetingCardData.subject}`;
    document.getElementById('message').textContent = greetingCardData.message;

    const images = Array.from({ length: 22 }, (_, i) => `image-${String(i + 1).padStart(2, '0')}`);

    const dynamicCards = document.querySelector('.letter');
    dynamicCards.style.backgroundImage = `url("../assets/${images[greetingCardData.backgroundImage]}.webp")`;




    const toggleBtn = document.getElementById('toggleBtn');
    const lidOne = document.querySelector('.lid.one');
    const lidTwo = document.querySelector('.lid.two');
    const letter = document.querySelector('.letter');

    let isOpen = false; // Track envelope state

    // Toggle Envelope State
    toggleBtn.addEventListener('click', () => {
        if (!isOpen) {
            // Open the envelope
            lidOne.style.transform = 'rotateX(90deg)';
            lidOne.style.transitionDelay = '0s';

            lidTwo.style.transform = 'rotateX(180deg)';
            lidTwo.style.transitionDelay = '0.25s';

            letter.style.transform = 'translateY(-500px)';
            letter.style.transitionDelay = '0.5s';
            toggleBtn.src = '../assets/Brown Ivory Vintage Stamp Paper Background Thank You Circle Sticker (1).png';
            
        } else {
            // Close the envelope
            lidOne.style.transform = 'rotateX(0deg)';
            lidOne.style.transitionDelay = '0.75s';

            lidTwo.style.transform = 'rotateX(90deg)';
            lidTwo.style.transitionDelay = '0.5s';

            letter.style.transform = 'translateY(0px)';
            letter.style.transitionDelay = '0s';

            toggleBtn.src = '../assets/Brown Ivory Vintage Stamp Paper Background Thank You Circle Sticker.png'; // Update button text
        }

        isOpen = !isOpen; // Toggle the state
    });

    document.getElementById('backButton').addEventListener('click', function () {
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
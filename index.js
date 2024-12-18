const h1 = document.querySelector('h1'); // Select the <h1> element

        // Blinking animation with setInterval
        const interval = setInterval(() => {
            if (h1.classList.contains('on')) {
                h1.classList.remove('on'); // Remove 'on' class
                h1.classList.add('off');  // Add 'off' class
            } else {
                h1.classList.remove('off'); // Remove 'off' class
                h1.classList.add('on');    // Add 'on' class
            }
        }, 1080); // Change every 1080 milliseconds

const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

function openPopup(buttonNumber) {
    switch(buttonNumber){
    case 1:
    document.getElementById('popup-title').innerText = `Kolor Fioletowy`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    console.log(document.getElementById('text-input'))
    break

    case 2:
    document.getElementById('popup-title').innerText = `Kolor Żółty`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 3:
    document.getElementById('popup-title').innerText = `Kolor Ciemnoczerwony`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 4:
    document.getElementById('popup-title').innerText = `Kolor Ciemnozielony`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 5:
    document.getElementById('popup-title').innerText = `Kolor Ciemnopomarańczowy`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 6:
    document.getElementById('popup-title').innerText = `Kolor Jasnozielony`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 7:
    document.getElementById('popup-title').innerText = `Kolor Pomarańczowy`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 8:
    document.getElementById('popup-title').innerText = `Kolor Beżowy`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 9:
    document.getElementById('popup-title').innerText = `Kolor Turkusowy`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 10:
    document.getElementById('popup-title').innerText = `Kolor Czerwony`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 11:
    document.getElementById('popup-title').innerText = `Kolor Jasnoniebieski`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 12:
    document.getElementById('popup-title').innerText = `Kolor Biały`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break

    case 13:
    document.getElementById('popup-title').innerText = `Kolor Różowy`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break
    
    
    case 14:
    document.getElementById('popup-title').innerText = `Kolor Granatowy`;
    document.getElementById('zag').innerText = `Popup for Button ${buttonNumber}`;
    popup.classList.add('active');
    break
    }
}

function closePopup() {
    popup.classList.remove('active');

}
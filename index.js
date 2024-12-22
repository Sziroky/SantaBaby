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
    document.getElementById('zag').innerText = `Przepięknie zawsze kolędy śpiewa. Nie kto inny jak Babcia ...`;
    popup.classList.add('active');
    validName = 'Edzia'
    break

    case 2:
    document.getElementById('popup-title').innerText = `Kolor Żółty`;
    document.getElementById('zag').innerText = `Nie straszna mu była matematyka. Wielki prezent dla super ...`;
    popup.classList.add('active');
    validName = 'Zdzicha'
    break

    case 3:
    document.getElementById('popup-title').innerText = `Kolor Ciemnoczerwony`;
    document.getElementById('zag').innerText = `Poranna Joga, jak skrzydła aniołka. To jest prezent dla ... Koziołka.`;
    popup.classList.add('active');
    validName = 'Darka'
    break

    case 4:
    document.getElementById('popup-title').innerText = `Kolor Ciemnozielony`;
    document.getElementById('zag').innerText = `Cały rok grzeczna była Jesieniara, Dla ... prezent od Mikołaja.`;
    popup.classList.add('active');
    validName = 'Kasi'
    break

    case 5:
    document.getElementById('popup-title').innerText = `Kolor Ciemnopomarańczowy`;
    document.getElementById('zag').innerText = `Razem z Grinchem kolęd nie fałszują, tym prezentem podzielę się z ...`;
    popup.classList.add('active');
    validName = 'Julą'
    break

    case 6:
    document.getElementById('popup-title').innerText = `Kolor Beżowy`;
    document.getElementById('zag').innerText = `Oby byla nadziana jak w barszczu uszka. Ten prezent dostaje ...`;
    popup.classList.add('active');
    validName = 'Babuszka'
    break

    case 7:
    document.getElementById('popup-title').innerText = `Kolor Pomarańczowy`;
    document.getElementById('zag').innerText = `Ktoś te prezenty świętemu kupuje. Bitcoinami ... je sponsoruje. `;
    popup.classList.add('active');
    validName = 'Alan'
    break

    case 8:
    document.getElementById('popup-title').innerText = `Kolor Jasnozielony`;
    document.getElementById('zag').innerText = `Pod obrusem sianko, z talerza wszystko znika. Znalazłeś prezent dla ... z Rybnika.`;
    popup.classList.add('active');
    validName = 'Kasi'
    break

    case 9:
    document.getElementById('popup-title').innerText = `Kolor Turkusowy`;
    document.getElementById('zag').innerText = `Zanzibar, Paryż świat otworem stoi. Tego życzymy kochanej ...`;
    popup.classList.add('active');
    validName = 'Ola'
    break

    case 10:
    document.getElementById('popup-title').innerText = `Kolor Czerwony`;
    document.getElementById('zag').innerText = `Minionki ... zawsze radują. Ten prezent od serca mu podarują.`;
    popup.classList.add('active');
    validName = 'Grzesia'
    break

    case 11:
    document.getElementById('popup-title').innerText = `Kolor Jasnoniebieski`;
    document.getElementById('zag').innerText = `Pysznych słodyczy i z czekoladą pianek. Tego mikołaj życzy rodzinie ...`;
    popup.classList.add('active');
    validName = 'Stramek'
    break

    case 12:
    document.getElementById('popup-title').innerText = `Kolor Biały`;
    document.getElementById('zag').innerText = `Oby wszystko co dobre dla was było jak śnieżna kula. Ten prezent dostają ...`;
    popup.classList.add('active');
    validName = 'Wika i Jula'
    break

    case 13:
    document.getElementById('popup-title').innerText = `Kolor Różowy`;
    document.getElementById('zag').innerText = `Oby jak najszybciej kominek w domu rozpalili. ... tego życzymy.`;
    popup.classList.add('active');
    validName = 'Bartkowi i Lusi'
    break
    
    
    case 14:
    document.getElementById('popup-title').innerText = `Kolor Granatowy`;
    document.getElementById('zag').innerText = `ogłosili, do betlejem przybieżeli oto jest prezent dla super ...`;
    popup.classList.add('active');
    validName = 'Gizeli'
    break

    case 15:
    document.getElementById('popup-title').innerText = `Kolor Purpurowy`;
    document.getElementById('zag').innerText = `Dużo zdrowia, pyszny bigos gotuje. ... mikołaj ten prezent podruje.`;
    popup.classList.add('active');
    validName = 'Krzysiowi'
    break      

    case 16:
    document.getElementById('popup-title').innerText = `Kolor Hulka`;
    document.getElementById('zag').innerText = `Wielkie serce i siła Hulka. Ten prezent jest dla ...`;
    popup.classList.add('active');
    validName = 'Bartka'
    break 

    case 17:
    document.getElementById('popup-title').innerText = `Kolor Żółty`;
    document.getElementById('zag').innerText = `Prawie już dom wybudowała. ... dostaje prezent od Mikołaja`;
    popup.classList.add('active');
    validName = 'Lusia'
    break 

    case 18:
    document.getElementById('popup-title').innerText = `Kolor Różowiutki`;
    document.getElementById('zag').innerText = `Pięknie śpiewa nie od dzisiaj. Ten prezent dostanie ...`;
    popup.classList.add('active');
    validName = 'Misia'
    break 
    
    case 19:
    document.getElementById('popup-title').innerText = `Kolor Morski`;
    document.getElementById('zag').innerText = `Szpagaty, mistrzyni tańcowania. Ten prezent dostanie ...`;
    popup.classList.add('active');
    validName = 'Hania'
    break 

    case 20:
    document.getElementById('popup-title').innerText = `Kolor Czerwony`;
    document.getElementById('zag').innerText = `Na święta dużo kolędowania Ten prezent dostanie ...`;
    popup.classList.add('active');
    validName = 'Ania'
    break 

    case 21:
    document.getElementById('popup-title').innerText = `Kolor Khaki`;
    document.getElementById('zag').innerText = `Żeby miał dużo siły na festiwalach. Ten prezent jest dla ...`;
    popup.classList.add('active');
    validName = 'Michał'
    break 

    case 22:
    document.getElementById('popup-title').innerText = `Kolor Blado-Pomarańczowy`;
    document.getElementById('zag').innerText = `Hau Hau Miau! Miau Miau Hau! To jest dla was Mikołaj. Kotki i psiaki czyli ...`;
    popup.classList.add('active');
    validName = 'Zwierzaki'
    break
    
    case 23:
    document.getElementById('popup-title').innerText = `Kolor Biały`;
    document.getElementById('zag').innerText = `Życzę ci zdrowia a resztę Sobie ogarniesz ;)`;
    popup.classList.add('active');
    validName = 'Michał'
    break 
    };

};

function closePopup() {
    popup.classList.remove('active');

};

function submitInput(name) {
    const inputValue = document.getElementById('text-input').value;
    if (name.toUpperCase() == inputValue.toUpperCase()){
        alert('Wesołych Świąt '+ name +' Odpakuj swój prezent!')
        
    } else {alert('spróbuj jeszcze raz!')};
  };
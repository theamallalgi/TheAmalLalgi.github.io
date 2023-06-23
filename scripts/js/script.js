// Global Variables
let retroModeToggle = false;
let shinyCountElem = document.querySelector('nav .points .shinies');
let trophyCountElem = document.querySelector('nav .points .trophies');
let shinyCodeVal = localStorage.getItem('locShinyCount');
let trophyCodeVal = localStorage.getItem('locTrophyCount');

if (!shinyCodeVal) { shinyCodeVal = 0 }
if (!trophyCodeVal) { trophyCodeVal = 0 }

// greeting
const greetingText = document.querySelector('main h1 span.greeting');
let today = new Date();
let currentHour = today.getHours();

if (currentHour < 12) {
    greetingText.innerText = "Good Mornin'";
} else if (currentHour < 18) {
    greetingText.innerText = "Good Aft'noon!";
} else if (currentHour = 0) {
    greetingText.innerText = "Early bird! 🐦, ";
} else {
    greetingText.innerText = "Good Evenin'";
}

// random logo
let pacmanSprites = [];

for (let i = 1; i <= 9; i++) {
    let pacmanLogo = `Pacman-Sprite-(${i}).png`;
    pacmanSprites.push(pacmanLogo);
}

const randomLogoGenerator = () => {
    let pacmanRandomIndex = Math.floor(Math.random() * pacmanSprites.length);
    newLogo = pacmanSprites[pacmanRandomIndex]
    document.querySelector('.logo img').src = `./assets/images/sprites/pacman-sprites/${newLogo}`;
}; randomLogoGenerator();

// random accent color
let colors = ["#a126f9", "#0ac87e", "#f92472", "#26B7F9", "#F9A826", "#26F9EB"];
const colorChanger = document.querySelectorAll('#colorChange');

const randomColor = () => {
    randomColorIndex = Math.floor(Math.random() * colors.length);
    selectedColor = colors[randomColorIndex];
    document.documentElement.style.setProperty('--acc', `${selectedColor}`);
}; randomColor();

colorChanger.forEach((i) => {
	i.style.cursor = 'pointer';
	i.addEventListener('click', () => {
		randomColor();
	})
})

// the Pokemon Game
const randomPokemon = () => {
    // import all images into a list
    let PokemonImages = [];
    let totalNoOfPokemon = 650;
    let shinyLoc = './assets/images/sprites/pokemon-sprites/Shiny/'
    let normalLoc = './assets/images/sprites/pokemon-sprites/Base/'

    for (let i = 1; i < totalNoOfPokemon ; i++) {
        let images = `Pokemon-(${i}).png`;
        PokemonImages.push(images);
    };

    // Elements
    const globalRandomIndex = Math.floor(Math.random() * PokemonImages.length);
    const shinyRandomIndex = Math.floor(Math.random() * 141441);


    // Shiny Encounters
    if (shinyRandomIndex == 1) {
        shinyCodeVal = +shinyCodeVal + 3;
        localStorage.setItem('locShinyCount', shinyCodeVal);
        shinyCountElem.innerText = shinyCodeVal; // To set the values on the points bar

        const shinyRandomSlots = () => {
            randomIndex1 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex2 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex3 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex4 = Math.floor(Math.random() * PokemonImages.length);

            newImage1 = PokemonImages[randomIndex1];
            newImage2 = PokemonImages[randomIndex2];
            newImage3 = PokemonImages[randomIndex3];
            newImage4 = PokemonImages[randomIndex4];

            document.querySelector('.cell-1 img').src = `${shinyloc}${newImage1}`;
            document.querySelector('.cell-2 img').src = `${shinyloc}${newImage2}`;
            document.querySelector('.cell-3 img').src = `${shinyloc}${newImage3}`;
        }; shinyRandomSlots();
    } else {
        // Normal Encounters
        const randomSlots = () => {
            randomIndex1 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex2 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex3 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex4 = Math.floor(Math.random() * PokemonImages.length);

            newImage1 = PokemonImages[randomIndex1];
            newImage2 = PokemonImages[randomIndex2];
            newImage3 = PokemonImages[randomIndex3];
            newImage4 = PokemonImages[randomIndex4];

            document.querySelector('.cell-1 img').src = `${normalLoc}${newImage1}`;
            document.querySelector('.cell-2 img').src = `${normalLoc}${newImage2}`;
            document.querySelector('.cell-3 img').src = `${normalLoc}${newImage3}`;
        }; randomSlots();
    }
}; randomPokemon();

// Luck code
const codeField = document.querySelector('.game input.code');
const luckBtn = document.querySelector('.game .luckBtn');
const password = 'joemama';
const retroCode = "retroboi"

codeField.addEventListener('click', () => {
    codeField.value = "";
})

const preScript = (fire_starter, grass_starter, water_starter) => {
    codeField.value = "";
    const cells = document.querySelectorAll('.game .cont .cell');
    const cellImg = document.querySelectorAll('.game .cont .cell img');
    
    cells.forEach((i) => {
        i.style.padding = '0';
    })
    cellImg.forEach((i) => {
        i.style.height = '100%';
    })

    document.querySelector('.cell-1 img').src = `./assets/images/sprites/pokemon-sprites/Other/${fire_starter}.png`;
    document.querySelector('.cell-2 img').src = `./assets/images/sprites/pokemon-sprites/Other/${grass_starter}.png`;
    document.querySelector('.cell-3 img').src = `./assets/images/sprites/pokemon-sprites/Other/${water_starter}.png`;
}

luckBtn.addEventListener('click', () => {
    switch (codeField.value.toLowerCase().replace('!', '')) {
        case password:
            codeField.value = "You're Lucky! 🥳";
            const logo = document.querySelector('nav .logo img');
            logo.src = './assets/images/sprites/other/trophy.png';

            trophyCodeVal = +trophyCodeVal + 1;
            localStorage.setItem('locTrophyCount', trophyCodeVal);
            trophyCountElem.innerText = trophyCodeVal; // To set the values on the points bar
            break;
        case "rick":
            codeField.value = "Never gonna give you up! 🎶";
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            break;
        case "password":
            codeField.value = "Yeah! what is it?";
            break;
        case "1234":
            codeField.value = "Seriously?";
            break;
        case "chicken or the egg?":
            codeField.value = "The egg came first! 🥚";
            break;
        // Shows and fandom
            break;
        case "pokemon":
            codeField.value = "which one?";
            break;
        case "goku":
            codeField.value = "here take a sensu bean!";
            break;
        case "vegeta":
            codeField.value = "you suck! kakarot!";
            break;
        case "harry":
            codeField.value = "Expeliarmus! ⭐";
        case "luffy":
            codeField.value = "Hi! I'm Monkey D. Luffy! Come join my crew! 🦜";
            break;
        case "naruto":
            codeField.value = "Dattebayo!";
            break;
        case "bankai":
            codeField.value = "BANKAI! Senbonsakura kageyoshi! 🌸";
            break;
        case "superman":
            codeField.value = "It's a plane, no it's a bird, no it's Superman! 🦸";
            break;
        // accent-color
        case "accent color":
            codeField.value = "type in the color to change the accent color!";
            break;
        case "red":
            codeField.value = "accent color changed to red";
            document.documentElement.style.setProperty('--acc', `#f92472`);
            break;
        case "green":
            codeField.value = "accent color changed to green";
            document.documentElement.style.setProperty('--acc', `#0ac87e`);
            break;
        case "blue":
            codeField.value = "accent color changed to blue";
            document.documentElement.style.setProperty('--acc', `#26B7F9`);
            break;
        case "yellow":
            codeField.value = "accent color changed to yellow";
            document.documentElement.style.setProperty('--acc', `#F9A826`);
            break;
        case "purple":
            codeField.value = "accent color changed to purple";
            document.documentElement.style.setProperty('--acc', `#a126f9`);
            break;
        case "cyan":
            codeField.value = "accent color changed to cyan";
            document.documentElement.style.setProperty('--acc', `#26F9EB`);
            break;
        // cheats
        case "unsheathe":
            codeField.value = "Well, who told you that?!";
            let blurField = document.querySelector('.about');
            blurField.style.filter = 'blur(0)';
            break;
        case "pokecodebreak":
            codeField.value = "";
            let imgLoc = `./assets/images/sprites/pokemon-sprites/Base/${newImage4}`;
            document.querySelector('.cell-1 img').src = imgLoc;
            document.querySelector('.cell-2 img').src = imgLoc;
            document.querySelector('.cell-3 img').src = imgLoc;
            break;
        case "shinypokecodebreak":
            codeField.value = "";
            let ImgLoc1 = `./assets/images/sprites/pokemon-sprites/Shiny/${newImage1}`;
            document.querySelector('.cell-1 img').src = ImgLoc1;
            document.querySelector('.cell-2 img').src = ImgLoc1;
            document.querySelector('.cell-3 img').src = ImgLoc1;
            break;
        case "pikajackpot":
            codeField.value = "";
            let ImgLoc2 = `./assets/images/sprites/pokemon-sprites/Other/pikachu-test.png`;
            document.querySelector('.cell-1 img').src = ImgLoc2;
            document.querySelector('.cell-2 img').src = ImgLoc2;
            document.querySelector('.cell-3 img').src = ImgLoc2;
            break;
        case "kanto":
            preScript('charmander', 'bulbasaur', 'squirtle');
            break;
        case "jhoto":
            preScript('cyndaquill', 'chikorita', 'totodile');
            break;
        case "hoenn":
            preScript('torchic', 'treeko', 'mudkip');
            break;
        case "sinnoh":
            preScript('chimchar', 'turtwig', 'piplup');
            break;
        case "pikachu":
            preScript('pichu', 'pikachu', 'raichu');
            break;
        case "legends:dogs":
            preScript('entei', 'suicune', 'raikou');
            break;
        case "legends:gods":
            preScript('dialga', 'palkia', 'giratina');
            break;
        case "legends:primal":
            preScript('groudon', 'rayquaza', 'kyogre');
            break;
        case "legends:classic":
            preScript('hooh', 'lugia', 'mewtwo');
            break;
        case "legends:birds":
            preScript('articuno', 'zapdos', 'moltres');
            break;
        case "legends:robots":
            preScript('regice', 'registeel', 'regirock');
            break;
        case "legends:cute":
            preScript('celebie', 'mew', 'jirachi');
            break;

        // misc
        case "":
            codeField.value = "enter something! 😑";
            break;
        default:
            codeField.value = "Not that Lucky! 😝";
            break;
        case retroCode:
            codeField.value = "Let's Time Travel!";
            retromode();
            break;
    }
})

// burger menu 
const burger = document.querySelector('.burger');
const navBar = document.querySelector('nav');
const navMenu = document.querySelector('nav ul.Nav__Links');
const navMenuLinks = document.querySelectorAll('.Nav__Links li a');

const menuActions = () => {
    navMenu.classList.toggle('navigation--open');
    burger.classList.toggle('burger--open');
    if (burger.classList[1] == 'burger--open') {
        document.documentElement.style.overflowY = 'hidden';
    }
}

burger.addEventListener('click', () => {
    menuActions();
    if (burger.classList[1] != 'burger--open') {
        document.documentElement.style.overflowY = 'scroll';
    }
})
navMenuLinks.forEach((i) => {
    i.addEventListener('click', () => {
        menuActions();
        if (burger.classList[1] != 'burger--open') {
            document.documentElement.style.overflowY = 'scroll';
        }
    })
})

// automatic navigation bar hide
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        navBar.classList.add('nav---hidden');
    } else {
        navBar.classList.remove('nav---hidden');
    }

    lastScrollY = window.scrollY;
})

// preloader 
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('preloader--done');
})

// modal (game)
const modalCloseBtn = document.querySelector('.gme__modal .model__cont button#close')
const gameModal = document.querySelector('.gme__modal')

const gameModalToggle = () => {
    gameModal.classList.toggle('gme__modal--open')
    if (gameModal.classList[1] == 'gme__modal--open') {
        document.documentElement.style.overflowY = 'hidden';
    }
    if (gameModal.classList[1] != 'gme__modal--open') {
        document.documentElement.style.overflowY = 'scroll';
    }
}

modalCloseBtn.addEventListener('click', () => {
    gameModalToggle()
})

// Retro Mode
const retromode = () => {
    retroModeToggle = true;
    const filterElem = document.querySelector('.retrofilter img');

    retroRandomPokemon();

    document.documentElement.style.filter = 'grayscale(100%)'; // makes everything b/w

    document.documentElement.style.setProperty('--acc', `#5b5b5b`);
    document.querySelector('.retrofilter').style.display = 'block';
    const realInputs = document.querySelectorAll('input[type="text"], textarea#msg');
    realInputs.forEach((i) => {
        i.style.color = 'var(--clr-5)';
        i.style.caretColor = 'var(--clr-5)';
    })
    
};

const retroRandomPokemon = () => {
    let PokemonImages = [];
    totalNoOfPokemon = 151;
    shinyLoc = './assets/images/sprites/pokemon-sprites/Retro/';
    normalLoc = './assets/images/sprites/pokemon-sprites/Retro/';
    const globalRandomIndex = Math.floor(Math.random() * PokemonImages.length);

    for (let i = 1; i < totalNoOfPokemon ; i++) {
        let images = `Pokemon-(${i}).png`;
        PokemonImages.push(images);
    };

    document.querySelectorAll('.cell').forEach( (i) => {
        i.style.backgroundImage = 'none';
        i.style.backgroundColor = 'White';
    })

    // Normal Encounters
    const randomSlots = () => {
        randomIndex1 = Math.floor(Math.random() * PokemonImages.length);
        randomIndex2 = Math.floor(Math.random() * PokemonImages.length);
        randomIndex3 = Math.floor(Math.random() * PokemonImages.length);
        randomIndex4 = Math.floor(Math.random() * PokemonImages.length);

        newImage1 = PokemonImages[randomIndex1];
        newImage2 = PokemonImages[randomIndex2];
        newImage3 = PokemonImages[randomIndex3];
        newImage4 = PokemonImages[randomIndex4];

        document.querySelector('.cell-1 img').src = `${normalLoc}${newImage1}`;
        document.querySelector('.cell-2 img').src = `${normalLoc}${newImage2}`;
        document.querySelector('.cell-3 img').src = `${normalLoc}${newImage3}`;
    }; randomSlots();
};

const pokeClick = () => {
    if (retroModeToggle == true) { retroRandomPokemon() }
    else { randomPokemon() }
}

// theme switcher
const switcher = document.querySelector('nav .logo');
const acTheme = localStorage.getItem('theme');

const lsThemeSet = (theme) => {
    localStorage.setItem('theme', theme)
}

lsThemeSet('light')

if (acTheme == 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
    lsThemeSet('light')
} else if (acTheme == 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    lsThemeSet('dark')
}

switcher.onclick = () => {
    if (document.documentElement.getAttribute('data-theme') != 'light') {
        document.documentElement.setAttribute('data-theme', 'light')
        lsThemeSet('light')
    } else if (document.documentElement.getAttribute('data-theme') == 'light') {   
        document.documentElement.setAttribute('data-theme', 'dark')
        lsThemeSet('dark')
    }
}

// the end 😁


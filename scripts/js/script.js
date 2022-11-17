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

    for (let i = 1; i < 650; i++) {
        let images = `Pokemon-(${i}).png`;
        PokemonImages.push(images);
    };

    // Elements
    const globalRandomIndex = Math.floor(Math.random() * PokemonImages.length);
    const shinyRandomIndex = Math.floor(Math.random() * 141441);

    // Shiny Encounters
    if (shinyRandomIndex == 1) {
        const shinyRandomSlots = () => {
            randomIndex1 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex2 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex3 = Math.floor(Math.random() * PokemonImages.length);
            randomIndex4 = Math.floor(Math.random() * PokemonImages.length);

            newImage1 = PokemonImages[randomIndex1];
            newImage2 = PokemonImages[randomIndex2];
            newImage3 = PokemonImages[randomIndex3];
            newImage4 = PokemonImages[randomIndex4];

            document.querySelector('.cell-1 img').src = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/shiny/${newImage1}`;
            document.querySelector('.cell-2 img').src = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/shiny/${newImage2}`;
            document.querySelector('.cell-3 img').src = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/shiny/${newImage3}`;
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

            document.querySelector('.cell-1 img').src = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/base/${newImage1}`;
            document.querySelector('.cell-2 img').src = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/base/${newImage2}`;
            document.querySelector('.cell-3 img').src = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/base/${newImage3}`;
        }; randomSlots();
    }
}; randomPokemon();


// Luck code
const codeField = document.querySelector('.game input.code');
const luckBtn = document.querySelector('.game .luckBtn');
const password = 'bazinga!';

luckBtn.addEventListener('click', () => {
    switch (codeField.value.toLowerCase()) {
        case password:
            codeField.value = "You're Lucky! 🥳";
            break;
        case "rickroll":
            codeField.value = "Never gonna give you up! 🎶";
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
        case "pokecodebreak":
            codeField.value = "";
            let imgLoc = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/base/${newImage4}`;
            document.querySelector('.cell-1 img').src = imgLoc;
            document.querySelector('.cell-2 img').src = imgLoc;
            document.querySelector('.cell-3 img').src = imgLoc;
            break;
        case "shinypokecodebreak":
            codeField.value = "";
            let ImgLoc = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/shiny/${newImage1}`;
            document.querySelector('.cell-1 img').src = ImgLoc;
            document.querySelector('.cell-2 img').src = ImgLoc;
            document.querySelector('.cell-3 img').src = ImgLoc;
            break;
        case "kanto":
            codeField.value = "";
            document.querySelector('.cell-1 img').src = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/other/charmander.png`;
            document.querySelector('.cell-2 img').src = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/other/bulbasaur.png`;
            document.querySelector('.cell-3 img').src = `https://raw.githubusercontent.com/TheAmalLalgi/TheAmalLalgi.github.io/main/assets/images/sprites/pokemon-sprites/other/squirtle.png`;
            break;
        // misc
        case "":
            codeField.value = "enter something! 😑";
            break;
        default:
            codeField.value = "Not that Lucky! 😝";
            break;
    }
})

// burger menu 
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.Nav__Links');
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
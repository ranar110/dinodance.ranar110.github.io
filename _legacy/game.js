const questions = [
    {
        text: "What's your go-to snack?",
        answers: [
            { label: "Meat 🍖", reaction: "Audience gasps: carnivore confidence unlocked.", score: { trex: 2, raptor: 1 } },
            { label: "Plants 🌿", reaction: "The herbivore union salutes your leafy dedication.", score: { triceratops: 2, stegosaurus: 2 } },
            { label: "Anything 🍕", reaction: "Chaotic neutral snacking detected. Respect.", score: { raptor: 1, stegosaurus: 1, trex: 1 } }
        ]
    },
    {
        text: "How do you handle drama?",
        answers: [
            { label: "Charge horns-first", reaction: "Conflict speedrun activated.", score: { triceratops: 2, trex: 1 } },
            { label: "Sneak/observe", reaction: "You vanish into nearby shrubbery with style.", score: { raptor: 2, stegosaurus: 1 } },
            { label: "ROAR loudly", reaction: "Neighborhood noise complaint filed.", score: { trex: 2, raptor: 1 } }
        ]
    },
    {
        text: "Party style?",
        answers: [
            { label: "Chill munching", reaction: "Snack table crowned you Emperor of Calm.", score: { stegosaurus: 2, triceratops: 1 } },
            { label: "Dance carefree", reaction: "You just invented the Jurassic shuffle.", score: { stegosaurus: 1, raptor: 1, triceratops: 1 } },
            { label: "Dominate floor", reaction: "You spin once and claim tax rights.", score: { trex: 2, raptor: 1 } }
        ]
    }
];

const dinoData = {
    trex: {
        name: "T-Rex (Bossy)",
        description: "Tiny arms, HUGE attitude. Bite = 500lbs meat.",
        image: "https://via.placeholder.com/300x200/ff7f50/ffffff?text=T-Rex+Boss"
    },
    triceratops: {
        name: "Triceratops (Loyal)",
        description: "Horn-y herd lover, headbutt party king.",
        image: "https://via.placeholder.com/300x200/20b2aa/ffffff?text=Triceratops+Loyal"
    },
    raptor: {
        name: "Velociraptor (Sneaky)",
        description: "Turkey-sized, T-Rex ego, sneaky genius.",
        image: "https://via.placeholder.com/300x200/40e0d0/003344?text=Velociraptor+Sneaky"
    },
    stegosaurus: {
        name: "Stegosaurus (Chill)",
        description: "Solar punk plates, walnut brain, gold heart.",
        image: "https://via.placeholder.com/300x200/ffd54f/5a3c00?text=Stegosaurus+Chill"
    }
};

const dinoOrder = ["trex", "triceratops", "raptor", "stegosaurus"];

function fallbackImageData(label, bgColor, textColor) {
    const svg = `
<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'>
<rect width='100%' height='100%' fill='${bgColor}'/>
<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='${textColor}' font-size='24' font-family='Comic Sans MS, Comic Sans, cursive'>${label}</text>
</svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function imageFallbackForDino(key) {
    if (key === "trex") return fallbackImageData("T-Rex Boss", "#ff7f50", "#ffffff");
    if (key === "triceratops") return fallbackImageData("Triceratops Loyal", "#20b2aa", "#ffffff");
    if (key === "raptor") return fallbackImageData("Raptor Sneaky", "#40e0d0", "#003344");
    return fallbackImageData("Stegosaurus Chill", "#ffd54f", "#5a3c00");
}

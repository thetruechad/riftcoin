var typed = new Typed(".multiple-text", {
    strings: ["Our Vibrant Community", "SolaCat Coin"],
    typeSpeed: 100,
    backSpeed: 10,
    backDelay: 1000,
    loop: true

})

const bgAnimation = document.getElementById ('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement ('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
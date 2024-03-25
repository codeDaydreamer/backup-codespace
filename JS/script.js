//the circles

const computedColor = getComputedStyle(document.documentElement).getPropertyValue('--skin-color');
function increaseNum(elementId, targetValue) {
    let element = document.getElementById(elementId);
    let counter = 0;
    let interval = setInterval(() => {
        if (counter == targetValue) {
            clearInterval(interval);
        } else {
            counter += 1;
            element.style.color = computedColor;
            element.innerHTML = counter + '%';
        }
    }, 20);
}
increaseNum(`JS-number`,65);
increaseNum(`HTML-number`,95);
increaseNum(`CSS-number`,80);
increaseNum(`Creativity-number`,95);
increaseNum(`Collaboration-number`,88);
increaseNum(`Communication-number`,95);

//typing animation
var typed = new Typed(".typing",{
    strings:["Web Developer","Graphics Designer","Mobile Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

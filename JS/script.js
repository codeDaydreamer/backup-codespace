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
//form functions 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyO5jvg5uejttX0wlyDcXEeCXnC_XZL5v8lNm35d-1-W_dGyXYIITOYrz3hzLQfsyEe/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => [
        msg.innerHTML = "Message sent successfully!!"
       , setTimeout (function(){
            msg.innerHTML = ""
        },5000)
        ,form.reset()
      ])
      .catch(error => console.error('Error!', error.message))
  })

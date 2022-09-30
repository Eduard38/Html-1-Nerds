const sliderButtons = document.querySelectorAll('.slider-controls-button');
const slideContent = document.querySelectorAll('.slide');
var currentSlide = document.querySelector('.slide-current');
var currentButtonCntrl = document.querySelector('.current');

// var sliderClickShow = function (button, content) {
//     button.addEventListener('click', function() {
//         console.log(button);
//         console.log(content);
        // currentButtonCntrl.classList.remove('current')
        // button.classList.add('current');
        // currentSlide.classList.remove('slide-current');
        // content.classList.toggle('slide-current');
//     });
// };


  var sliderClickShow = function (button, content) {
    button.addEventListener('click', function() {
        // console.log(button);
        // console.log(content);
        sliderButtons.forEach(slideButton => slideButton.classList.remove('current'));
        slideContent.forEach(slide => slide.classList.remove('slide-current'));
        button.classList.add('current');
        content.classList.toggle('slide-current');
    });
};

for (var i = 0; i < sliderButtons.length; i++) {
    sliderClickShow(sliderButtons[i], slideContent[i])
  };
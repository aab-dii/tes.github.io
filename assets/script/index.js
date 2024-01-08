// script.js

// document.addEventListener("DOMContentLoaded", function() {
//     const slider = document.querySelector(".slider");
//     const prevBtn = document.querySelector(".prev");
//     const nextBtn = document.querySelector(".next");
//     let currentIndex = 0;
  
//     nextBtn.addEventListener("click", function() {
//       currentIndex = (currentIndex + 1) % slider.children.length;
//       updateSlider();
//     });
  
//     prevBtn.addEventListener("click", function() {
//       currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
//       updateSlider();
//     });
  
//     function updateSlider() {
//       const translateValue = -currentIndex * 100;
//       slider.style.transform = `translateX(${translateValue}%)`;
//     }
//   });
  
// script.js

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    nextBtn.addEventListener("click", function() {
      alert("Next button clicked!"); // Replace with your logic
    });
  
    prevBtn.addEventListener("click", function() {
      alert("Prev button clicked!"); // Replace with your logic
    });
  });
  
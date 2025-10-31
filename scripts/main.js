console.log ("Hello from main.js!");

const myName = "Zainab Ibrahim";
console.log ("The script for"  + myName + " is running.");

// select the main heading by its tag name
 const mainHeading = document.querySelector ("h1");

 //Select the about section by its ID
 const aboutSection = document.querySelector ('#about');

 console.log (mainHeading);
 console.log(aboutSection);
 
 const themeToggleButton = document.querySelector('#theme-toggle');
 const bodyElement = document.querySelector('body');
  themeToggleButton.addEventListener('click',function() {
    // this is the magic: it adds the class if it's missing,
    // and removes it if it's present.
    bodyElement.classList.toggle('drak-mode');
  });
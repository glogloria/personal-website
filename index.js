// Project filtering
filterSelection("all") // initial filter set to all
function filterSelection(c) {
    let x = document.getElementsByClassName("filterDiv");
    
    if (c == "all") c = ""; // Sets c = to an empty string so all items match

    for (let i = 0; i < x.length; i++) { // adds or removes the show class based on if the element's class name contains category c
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show"); 
    }
}

// Show filtered elements
function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while(arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Nav-bar background while scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// // Hoempage snowflakes
// const snowContainer = document.getElementById("snowflake-container");
// const numSnowflakes = 250;
// const snowFlakes = [];

// // Generates snowflakes of random sizes

// for (let i = 0; i < numSnowflakes; i++) {
//     const flake = document.createElement("div");
//     flake.classList.add("snowflake");
//     flake.style.left = `${Math.random() * window.innerWidth}px`;
//     flake.style.top = `${Math.random() * window.innerHeight}px`;
//     snowContainer.appendChild(flake);
//     snowFlakes.push(flake);                                      
// }

// document.addEventListener("mousemove", (e) => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     snowFlakes.forEach((flake) => {
//         const rect = flake.getBOundingClientRect();
//         const dx = rect.left - mouseX;
//         const dy = rect.top - mouseY;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 100) {
//             const angle = Math.atan2(dy, dx);
//             const moveX = Math.cos(angle) * 30;
//             const moveY = Math.sin(angle) * 30;

//             flake.style.transform = `translate(${moveX}px, ${moveY}px)`;
//         }   else {
//             flake.style.transform = `translate(0, 0)`;
//         }
//     });    
// });

//  DOM manipulations
// 1. Selecting Element
    // getElementsById -- fast / rarely used
    // const title = document.getElementById('main-heading');
    // console.log(title);
    //getElementsByClassName
    // const country = document.getElementsByClassName("country");
    // console.log(country);
    //getElementsByTagName
    const tag = document.getElementsByTagName("input");
    console.log(tag);
    //querySelector
    // * Used most of the cases
    // const country = document.querySelector(".country");
    // console.log(country);

        //querySelectorAll
    // const countryAll = document.querySelectorAll(".country");
    // console.log(countryAll);






// 2. Styling Element
const container = document.querySelector(".container")
    container.style.margin =" 80px auto"
const title = document.querySelector("#main-heading");
title.style.background = "blue";
title.style.color = 'whiteSmoke';
title.style.fontSize ="3rem"                // all style are made inline style
title.textContent= "All Country List"


const countries = document.querySelectorAll(".country");

for(let i = 0; i < countries.length; i++){
    countries[i].style.color = "orangeRed";
    countries[i].style.fontSize = "2rem";
    
}
console.log(countries);

// 3. Creating Element
// 4. Node traversals
// 5. Event Handlers




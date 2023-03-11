
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
    // console.log(tag);
    //querySelector
    // * Used most of the cases
    // const country = document.querySelector(".country");
    // console.log(country);

        //querySelectorAll
    // const countryAll = document.querySelectorAll(".country");
    // console.log(countryAll);






// // 2. Styling Element
// const container = document.querySelector(".container")
//     container.style.margin =" 80px auto"
// const title = document.querySelector("#main-heading");
// title.style.background = "blue";
// title.style.color = 'whiteSmoke';
// title.style.fontSize ="3rem"                // all style are made inline style 
// title.textContent= "All Country List"


const countries = document.querySelectorAll(".country");

for(let i = 0; i < countries.length; i++){
    countries[i].style.color = "orange";
    countries[i].style.fontSize = "2rem";
    
}
// console.log(countries);

// 3. Creating Element
// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// li.textContent = "Hello";
// // li.setAttribute("class", "country");
// li.classList.add('country');
// li.setAttribute("style", "color: orange;font-size: 2rem;");
// //append
// // ul.append(li)
// // ul.appendChild(li)
// ul.insertAdjacentElement("beforeend",li)

// console.log(ul.innerHTML);


const container = document.querySelector(".container")

// container.innerHTML = `<li class="country" style="color: orange; font-size: 2rem;">USA</li>
//                         <li class="country" style="color: orange; font-size: 2rem;">Canada</li>
//                         <li class="country" style="color: orange; font-size: 2rem;">Dubai</li>
//                         <li class="country" style="color: orange; font-size: 2rem;">Japan</li>
//                         <li class="country" style="color: orange; font-size: 2rem;">China</li>
//                         <li class="country" style="color: orange; font-size: 2rem;">India</li>
//                         <li class="country" style="color: orange; font-size: 2rem;">Hongkong</li>
//                         <li class="country" style="color: orange; font-size: 2rem;">Chili</li>
                        
//                         <input type="text" name="" placeholder="Your Country Name" id="">
//                         <button>Add country</button>`

// console.log(container.innerHTML);

// const h1 = document.querySelector("#main-heading");
// let screen = "768px";
// if(screen === "768px") h1.classList.toggle("mobile")
// if(h1.classList.contains("mobile")) screen = "460px"

// console.log(screen);


// console.log(h1);

// 4. Node traversals
const ul = document.querySelector('ul');
// console.log(ul.parentElement);
// console.log(ul.parentNode);
// console.log(ul.childNodes);
// console.log(ul.children);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

console.log(ul);

// const h1 = document.querySelector("h1");
// console.log(h1.previousSibling);
// console.log(h1.previousElementSibling);
// console.log(h1.nextSibling);
// console.log(h1.nextElementSibling);

// 5. Event Handlers




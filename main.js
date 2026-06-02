
let img = [
    { src: "photos/download (1).jpg", title: "Turkish coffee" ,desc: "15$" },
    { src: "photos/download (2).jpg", title: "Mocha" ,desc: "15$" },
    { src: "photos/download (3).jpg", title: "Latte" ,desc: "15$" },
    { src: "photos/download (10).jpg", title: "pancakes" ,desc: "15$"},
    { src: "photos/download (5).jpg", title: "Hot chocolate" ,desc: "15$" },
    { src: "photos/download (11).jpg", title: "Cheesecake" ,desc: "15$"}
];

let most = document.getElementById("most");

if(most){
img.forEach(e => {
    let ImagDiv = document.createElement("div");
    ImagDiv.className= "ImagDiv";
    ImagDiv.innerHTML =` <img src="${e.src}">
        <h2> ${e.title} </h2>
        <p> ${e.desc} </p>
    `;
    most.appendChild(ImagDiv);
});
}


let logo = document.querySelector(".logo");

logo.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};

let imgMenuJs = [
    { src: "photos/download (1).jpg", title: "Turkish coffee" ,price: "15$", category: "Hot", source: "roasted coffee" },
    { src: "photos/download (2).jpg", title: "Ice Mocha" ,price: "15$", category: "Cold" , source: "A refreshing cold coffee drink that combines the strong flavor of coffee with the sweetness of chocolate, and features a creamy texture."},
    { src: "photos/images.jpg", title: "Ice Cappuccino" ,price: "15$", category: "Cold" , source: "A refreshing cold coffee drink that combines the strong flavor of coffee with the sweetness of chocolate, and features a creamy texture."},
    { src: "photos/download (3).jpg", title: "Ice Latte" ,price: "15$", category: "Cold" , source: "roasted coffee"},
    { src: "photos/download (7).jpg", title: "Espresso" ,price: "15$", category: "Hot" , source: "roasted coffee"},
    { src: "photos/images (5).jpg", title: "Cake" ,price: "15$", category: "Sweet" , source: "Fluffy cake available in strawberry, chocolate, and milk."},
    { src: "photos/download (6).jpg", title: "Ice Tea" ,price: "15$", category: "Cold" , source: "Cold tea with a refreshing peach"},
    { src: "photos/download (10).jpg", title: "pancakes" ,price: "15$", category: "Sweet", source: "roasted coffee"},
    { src: "photos/download (5).jpg", title: "Hot chocolate" ,price: "15$", category: "Hot" , source: "roasted coffee"},
    { src: "photos/download (9).jpg", title: "Match" ,price: "15$", category: "Sweet" , source: "roasted coffee"},
    { src: "photos/download (11).jpg", title: "Cheesecake" ,price: "15$", category: "Sweet" , source: "roasted coffee"},
    { src: "photos/images (2).jpg", title: "Cappuccino" ,price: "15$", category: "Hot" , source: "roasted coffee"},
];
let imgMenu = document.querySelector(".imgMenu");

function change (check = "All"){
if(imgMenu){
    imgMenu.innerHTML = ""; 
imgMenuJs.forEach(element => {
    if (check === "All" || element.category === check)
    {
    let Imenu =document.createElement("div");
    Imenu.className = "Imenu";
    Imenu.innerHTML =` <img src="${element.src}">
        <h2> ${element.title} </h2>
        <p class = "price"> ${element.price} </p>
    `;
    let features  = document.createElement("div");
    features.className = "features";
    features.style.display = "none";

    let talk = document.createElement("p");
    talk.textContent = element.source;
    talk.style.color = "#F5DEB3";   
    
    let back = document.createElement("button");
    back.className = "but-back";
    back.textContent="Back";

    back.onclick = (e) =>{ e.stopPropagation(); change('All'); }

    features.appendChild(talk);
    features.appendChild(back);
    Imenu.appendChild(features);

    Imenu.onclick = function(){
        showSource(this);
    }
    imgMenu.appendChild(Imenu);
            }
        });
    }
}

function showSource(see){
    let all = document.querySelectorAll(".Imenu");
    all.forEach (del=>{
        if(del !== see) del.style.display = "none"; 
    });

    see.style.gridColumn = "1 / -1"; 
    
    let features = see.querySelector(".features");
    if (features) features.style.display = "block";

    let price = see.querySelector(".price");
    if (price) price.style.display = "none";


}


let buttons = document.querySelectorAll(".type-drink");
buttons.forEach(btn => {
    btn.addEventListener("click" , function(){
        buttons.forEach(cli => {
            cli.classList.remove("active")
        });
        this.classList.add("active")
        let type = this.textContent;
        change(type);
    }) 
});

change("All");
if(buttons.length > 0) {
    buttons[0].classList.add("active");
}


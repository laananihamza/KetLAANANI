let btn = document.querySelector(".upscroll");

window.onscroll = function () {
    if (window.scrollY >= 800) {
        btn.style.right = "25px";
    } else {
        btn.style.right = "-50px";
    }
}


btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ------------- Head | nav li -----------------
let liHead = document.querySelectorAll(".heading ul li");



liHead.forEach(li => {
    li.addEventListener("click", (e) => {
        liHead.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color", "#00e1ff");
        e.currentTarget.style.color = window.localStorage.getItem("color");
    })
})


// ------------- Our Portfolio li -----------------
let lis = document.querySelectorAll(".ul-links ul li");

lis.forEach(li => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => {
            li.classList.remove("actives");
        });
        e.currentTarget.classList.add("actives");
    });
});

/*                           show and hide (web/disgn/photography)                            */

let web = document.querySelector(".web");
let design = document.querySelector(".design");
let Photography = document.querySelector(".Photography");
let All = document.getElementById("all");


let boxWeb = document.querySelectorAll(".webshow");
let boxDesign = document.querySelectorAll(".designs");
let boxPhotography = document.querySelectorAll(".Photo");

web.addEventListener("click", function () {
    boxDesign.forEach(el => {
        el.classList.add("none");
    });
    boxPhotography.forEach(el => {
        el.classList.add("none");
    });
    boxWeb.forEach(el => {
        el.classList.remove("none");
    });

});

design.addEventListener("click", function () {
    boxWeb.forEach(el => {
        el.classList.add("none");
    });
    boxPhotography.forEach(el => {
        el.classList.add("none");
    });
    boxDesign.forEach(el => {
        el.classList.remove("none");
    });
});

Photography.addEventListener("click", function () {
    boxDesign.forEach(el => {
        el.classList.add("none");
    });
    boxWeb.forEach(el => {
        el.classList.add("none");
    });
    boxPhotography.forEach(el => {
        el.classList.remove("none");
    });
});

All.addEventListener("click", function () {
    boxDesign.forEach(el => {
        el.classList.remove("none");
    });
    boxWeb.forEach(el => {
        el.classList.remove("none");
    });
    boxPhotography.forEach(el => {
        el.classList.remove("none");
    });

});



// -------------------------------------------------------------------------------------

let btnLeft = document.querySelector(".left");
let btnRight = document.querySelector(".right");

let butText1 = document.querySelector(".start");
let butText2 = document.querySelector(".for");


// Ended Edit Scroll

document.body.onload = function () {
    btnLeft.style.border = "1px solid #00e1ff";
    document.querySelector(".left").style.setProperty("--display", "block")
}

// Start Edit to side of text
btnLeft.addEventListener("click", function () {
    // border of 'start tour' button
    btnLeft.style.border = "1px solid #00e1ff";
    btnRight.style.border = "1px solid #ccc";
    document.querySelector(".left").style.setProperty("--display", "block")
    document.querySelector(".right").style.setProperty("--display", "none")

    // Swipe between Text
    butText1.style.display = "block";
    butText2.style.display = "none";
});
btnRight.addEventListener("click", function () {
    // border of 'for all devices' button
    btnRight.style.border = "1px solid #00e1ff";
    btnLeft.style.border = "1px solid #ccc";
    document.querySelector(".right").style.setProperty("--display", "block")
    document.querySelector(".left").style.setProperty("--display", "none")

    // Swipe between Text
    butText2.style.display = "block";
    butText1.style.display = "none";

});


// --------------- Light/dark mod --------------------

let sun, moon;
sun = document.getElementById("sun");
moon = document.getElementById("moon");

moon.addEventListener("click", function () {
    sun.style.display = "inline-block";
    moon.style.display = "none";
    document.querySelector("html").setAttribute("data-theme", "dark");
    document.body.style.backgroundColor = "#232529";
    document.body.style.color = "#e2e3e7";


});
sun.addEventListener("click", function () {
    moon.style.display = "inline-block";
    sun.style.display = "none";
    document.querySelector("html").setAttribute("data-theme", "light");
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
});





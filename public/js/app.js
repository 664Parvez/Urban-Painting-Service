const copyright = document.getElementById("copyDate")
    
const copyDate = new Date().getFullYear()
copyright.innerText = copyDate


 //Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


function singleProductImg(image){
    document.querySelector('.main').src = image;
}

// // Get allValues using querySelectorAll
// let allValues = document.querySelectorAll(".value");

// // Start the forEach loop for displaying the values
// allValues.forEach((singleValue) => {
//   let startValue = 0;
//   let endValue = parseInt(singleValue.getAttribute("data-value"));
//   let duration = Math.floor(2000 / endValue);

//   // Counter for increaing the values & display
//   let counter = setInterval(function () {
//     startValue += 1;
//     singleValue.textContent = startValue;
//     // Clearing the interval
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });



const items = document.querySelectorAll(".value");

gsap.from(items, {
    scrollTrigger: {
        trigger: ".value",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "bottom 90%",
        scrub: 5
    },
    innerText: 0,
    duration: 5,
    snap: {innerText: 1}
});    
let textContainer = document.querySelector('.text-container');
let ratingContainer = document.querySelectorAll(".ratings")
let btn = document.querySelector(".button");
let thanks = document.querySelector('.thanks');
let ratingNo = document.getElementById('rating-no');


for(let i = 0; i<ratingContainer.length; i++) {
    ratingContainer[i].addEventListener("click", ()=> {
        let rating = ratingContainer[i].innerHTML
        for(let i = 0; i<ratingContainer.length; i++) {
           ratingContainer[i].classList.contains('selected');
           ratingContainer[i].classList.remove('selected');
        }
        ratingContainer[i].classList.add('selected');

        btn.addEventListener("click", ()=>{
            //set display of the textcontainer to none and set the display of the thanks to visible on clicking the submit button
            textContainer.style.display = "none";
            thanks.style.display = "block";
            ratingNo.innerHTML = rating;
        })
    })    

}

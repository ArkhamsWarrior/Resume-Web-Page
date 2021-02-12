let circles = document.querySelectorAll(".circ");
let progress = document.querySelector(".progress")
let txt = document.querySelectorAll("ul li")

//Basically in here, we are adusting the color of the progress bar
//In addition to filling in the circle elements as the progress bar meets them


let last_known_scroll_position = 0;
let ticking = false;


function doSomething(scroll_pos) {
  // Do something with the scroll position
}

  //Everytime the user scrolls, this function is ran.
//Does an action when the user scrolls on page
document.addEventListener('scroll', function(e) {
  //assigns var the value of window.scrollY
  last_known_scroll_position = window.scrollY;
//  console.log(last_known_scroll_position);

  update();
  txtUpdate();
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
    //When the user finishes the scroll, it returns to true;
    ticking = true;

  }
});

let update = () =>{
  circles.forEach((circle,idx) => {
    if (last_known_scroll_position>=idx *720  ){
      console.log("idx:" + idx*720);
      console.log(last_known_scroll_position);
      circle.classList.add('active');

    }
    else {
      circle.classList.remove('active');
    }
  })
  //Used 88 instead of 100 since the bar would look complete on Skills & Projects, but 
  //The scroll position did not meet that section of the page yet
  progress.style.height = ((last_known_scroll_position/2880) * 88 ) + "%";
}

let txtUpdate = () => {
  txt.forEach((txt, idx) => {
    if(circles[idx].classList.contains("active") && (last_known_scroll_position >= (idx*720) && (last_known_scroll_position <= ((idx+1)*720)))){
      txt.classList.add('bold');
      console.log("hello");
    }
    else{
      txt.classList.remove('bold');
    }
  })
}

//Take the idx of a circle. If it is active, and scroll position is between idx *720  (idx +1) *720
//Apply bold class to LI
//Everytime scroll is enacted, i need to update
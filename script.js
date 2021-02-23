
//!!Scroll Bar!!

let circles = document.querySelectorAll(".content .circ");
let content = document.querySelector(".content")
let progress = document.querySelector(".progress")
let txt = document.querySelectorAll(".content ul li");

var t;


let resetTime = () => {
  clearTimeout(t);
  t= setTimeout(() => {
   content.classList.add("hide");
 }, 2500)
}

//Basically in here, we are adusting the color of the progress bar
//In addition to filling in the circle elements as the progress bar meets them


let last_known_scroll_position = 0;
let ticking = false;

//Basically responsible for the tracking of our ScrollY
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
  content.classList.remove("hide");
  resetTime();

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


//720 represents height of each section
let update = () =>{
  circles.forEach((circle,idx) => {
    if (last_known_scroll_position >= idx * 720  ){
      circle.classList.add('active');
    }
    else {
      circle.classList.remove('active');
    }
  })
  //Used 92 instead of 100 since the bar would look complete on Skills & Projects, but 
  //The scroll position did not meet that section of the page yet
  progress.style.height = ((last_known_scroll_position/2880) * 92 ) + "%";
  // console.log(progress.style.height)
    if ((last_known_scroll_position/2880) > 1){  
      progress.style.height = "100%";
    }
  else{

  }

}

let txtUpdate = () => {
  txt.forEach((txt, idx) => {
    if((last_known_scroll_position >= (idx*720) && (last_known_scroll_position <= ((idx+1)*720)))){
      txt.classList.add('bold');
      txt.classList.remove('inv')
    }
    else{
      txt.classList.add('inv')
      txt.classList.remove('bold');
    }
  })
}

//Take the idx of a circle. If it is active, and scroll position is between idx *720  (idx +1) *720
//Apply bold class to li
//Everytime scroll is enacted, i need to update


//!!Card Switch

const container = document.querySelectorAll('.contain')
// const squares = document.querySelector('.lang-card');
// const inner= document.querySelector(".cont-card")

container.forEach(contain => {

  const squares = contain.querySelector('.lang-card');
  const inner= contain.querySelector(".cont-card");

  squares.addEventListener('mouseenter', () => {
    squares.classList.add('hover');
  })
  
  squares.addEventListener('mouseleave', () => {
    squares.classList.remove('hover');
  })
  
  inner.addEventListener('mouseenter', () => {
    inner.classList.add('hover');
  })

  inner.addEventListener('mouseleave', () => {
    inner.classList.remove('hover');
  })
  
  squares.addEventListener('click', () => {
    squares.classList.add("anime");
    setTimeout( () => {
      inner.classList.toggle("passive");
      squares.classList.toggle("new-pos");
      inner.classList.add('new-pos')
      squares.classList.remove('passive');      
    }, 1000)
    setTimeout(()=> {
      inner.classList.remove("anime");
    }, 1100)    
  })
    inner.addEventListener('click', () => {
        inner.classList.add('anime');
        setTimeout(() => {
            squares.classList.remove('new-pos', 'anime');
            inner.classList.remove("new-pos");
            inner.classList.add("passive");
            squares.classList.add("pos-anime");
            squares.classList.add('passive');
    
    
        }, 1000)
        
        setTimeout(()=> {
            squares.classList.remove("anime");
            squares.classList.remove("pos-anime");
    
        }, 1100)

    })
}

)

//!!INTERSECTION OBSERVER

const sections = document.querySelectorAll('section');

const options = {
  threshold: .3
}



let checkSection = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active-fade")
    }
    else{
      entry.target.classList.remove("active-fade")
    }
    console.log(entry.target.classList)
  }
  
  )
  
}

let observer = new IntersectionObserver(checkSection, options);

sections.forEach(section => {
  observer.observe(section);
})

//!!TIMER


// console.log(grad.getTime())
// var months= ["January",
//              "February",
//              "March",
//              "April",
//              "May",
//              "June",
//              "July",
//              "August",
//              "September",
//              "October",
//              "November",
//              "December"]

// var days = ["Sunday",
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday"];
// var day = days[d.getDay()];
// var minutes = (i) => {
// if ( i < 10)
// {
//     i = "0" + i;
// }
// return i;
// };

// var hours = (i)=> {
//     if (i> 12){
//         i-= 12;
//     }
//     return i;
// }
// var dt= {time:hours(d.getHours()) + ":" + minutes(d.getMinutes()), day: days[d.getDay()], month:  months[d.getMonth()], date: d.getDate(), year: d.getFullYear()};

// console.log(dt.time, dt.day, dt.month, dt.date, dt.year);


setInterval(() => {
  var d = new Date(); 
  var grad = new Date("December 15, 2021 0:00:00");
  var dif = (grad.getTime() - d.getTime());
  
  var days =Math.floor(dif/1000 / 86400);
  
  var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((dif % (1000 * 60)) / 1000);
  
  
  const countdown = document.querySelector('.countdown');
  
  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
},100)




//1DAY = 86400 SECONDS
// var date = d.getDate();
// var trueDate = {time: time, day: d, month: mo, date: d.getDate(), year: d.getFullYear()};
// console.log(trueDate.time)


// var time = d.getHours() + ":" + d.getMinutes()

//On load, we want the page to return the time and date 




// var checkTime = () => {

//     d = new Date();
//     dt= {time:hours(d.getHours()) + ":" + minutes(d.getMinutes()), day: days[d.getDay()], month: months[d.getMonth()], date: d.getDate(), year: d.getFullYear()};

//     var time ="<span>"+ dt.time +" </span><br> "
//     + dt.day + ", "
//      + dt.month + " "
//      + dt.date + " " 
//      + dt.year;
     
//     // holder.innerHTML= time;
// }



// window.addEventListener("load", () => {
//     checkTime();
//     setInterval(function() {
//         checkTime() }, 100);
//      } );

// //Update the time and date every second setInterval

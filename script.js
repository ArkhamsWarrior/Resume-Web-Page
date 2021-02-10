const pointer = document.querySelectorAll(".box ul li");

const added=  `<span class = "hide"><i class="fas fa-long-arrow-alt-right"></i></span>`;
let addSpan = () => {
    pointer.forEach(point => {
        
        point.addEventListener('mouseenter', () => {
            val = point.innerHTML;
            //console.log(val);
            
            point.innerHTML+= added;
            let span= document.querySelector(".box ul li span");
            span.classList.add('addspan');
            console.log(span.classList);
            setTimeout( () => {            
                span.classList.remove("hide");      
                span.classList.add('reveal');
                console.log(span.classList);
            }, 100);

            console.log(span.classList);


        })
        point.addEventListener('mouseleave', () => {
            let span= document.querySelector(".box ul li span");

            console.log(val);
            point.innerHTML= val;
            span.classList.remove('reveal');

        })
    })
}
addSpan();
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
function sheryanimation(){
Shery.makeMagnet("#nav #logo ",{
    skew: true,
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // duration: 1,
});
Shery.makeMagnet("#nav #elems a");

};

Shery.mouseFollower();
function timer(){
    // let time = 60;
    let totalSeconds = 119405;
    const timerDisplay = document.getElementById("timer");
    const formatTime = (secs) => {
        const days = Math.floor(secs / 86400);
        const hours = Math.floor((secs % 86400) / 3600);
        const minutes = Math.floor((secs % 3600) / 60);
        const seconds = secs % 60;
    
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      };
    
      const countdown = setInterval(() => {
        timerDisplay.textContent = formatTime(totalSeconds);
        totalSeconds--;
    
        if (totalSeconds < 0) {
          clearInterval(countdown);
          timerDisplay.textContent = "Time's up!";
        }
      }, 1000);
};
function threedhoveranimation(){
    document.addEventListener("DOMContentLoaded",function(){
        gsap.to("#box",{
            y:-20,
            duration:3,
            yoyo:true,
            repeat:-1,
            ease:"power1.inOut"

        });
        
        gsap.to("#img1 img",{
             y:-20,
             duration:3,
             yoyo:true,
             repeat:-1,
             ease:"power1.inOut"
    
            });
        gsap.to("#box2",{
            y:-20,
            duration:3,
            yoyo:true,
            repeat:-1,
            ease:"power1.inOut"
        });
        gsap.to("#box3",{
            y:-20,
            duration:3,
            yoyo:true,
            repeat:-1,
            ease:"power1.inOut"
        });
        
    const box1=document.querySelector("#box");
    const con1=document.querySelector("#con1");
    const con2=document.querySelector("#con2");
    const con3=document.querySelector("#con3");

    const box2=document.querySelector("#box2");
    const box3=document.querySelector("#box3");



    con1.addEventListener("mouseenter", function() {
        gsap.to(box1, {
            rotationY: 15,     
            rotationX: 5,    
            duration: 0.5,     
            ease: "power1.out",
        });

    });
    con1.addEventListener("mouseleave", function() {
        gsap.to(box1, {
            rotationY: -15,     
            rotationX: -5,                
            duration: 0.5,
            ease: "power1.out",
        });
        
    });
    con2.addEventListener("mouseenter", function() {
        gsap.to(box2, {
            rotationY: 15,     
            rotationX: 5,    
            duration: 0.5,     
            ease: "power1.out",
        });

    });
    con2.addEventListener("mouseleave", function() {
        gsap.to(box2, {
            rotationY: -15,     
            rotationX: -5,                
            duration: 0.5,
            ease: "power1.out",
        });
        
    });
    
    con3.addEventListener("mouseenter", function() {
        gsap.to(box3, {
            rotationY: 15,     
            rotationX: 5,    
            duration: 0.5,     
            ease: "power1.out",
        
        });

    });
    con3.addEventListener("mouseleave", function() {
        gsap.to(box3, {
            rotationY: -15,     
            rotationX: -5,                
            duration: 0.5,
            ease: "power1.out",
        });
        
    });


        
    });
};
function stringh(){
    var inpath=`M 200 100 Q 800 100 1400 100`
    document.querySelector("#string").addEventListener("mousemove",function(dets){
        var path1=`M 200 100 Q 800 ${dets.y} 1400 100`;
        gsap.to("svg path",{
            attr:{
                d:path1},
                ease:"power3.out",
                duration:0.4,

            
        })
    })
    document.querySelector("#string").addEventListener("mouseleave",function(dets){
        var path1=`M 200 100 Q 800 100 1400 100`;
        gsap.to("svg path",{
            attr:{d:inpath},
                duration:0.8,
                ease:"elastic.out(1,0.2)"
            
        })
    })


}

function fqs() {
    const faqs = document.querySelectorAll(".faq1");

    faqs.forEach(faq => {
        const question = faq.querySelector(".qs");
        const answer = faq.querySelector(".ans");
        const ic=faq.querySelector("i");
        question.addEventListener("click", function () {
            // Toggle display
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
                answer.style.fontsize="2vh";
                
                ic.classList.remove("ri-arrow-down-s-line");
                ic.classList.add("ri-arrow-up-s-line");

            } else {
                answer.style.display = "none";
                ic.classList.add("ri-arrow-down-s-line");
                ic.classList.remove("ri-arrow-up-s-line");
            }
            
        });
    });
}
fqs();

sheryanimation();
timer();
threedhoveranimation();
stringh();
locomotive();
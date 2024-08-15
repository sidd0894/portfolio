let header = document.querySelector(".header");
let lineAndName = document.querySelector(".line-and-name");
let middlePara1 = document.querySelector(".middle-para-1");
let textHighlight = document.querySelector(".text-highlight");
let middlePara2 = document.querySelector(".middle-para-2");
let socialProfiles = document.querySelector(".social-profile");
let body = document.body;

window.addEventListener("load", function () {
    document.querySelector(".pre-loader").style.display = "none"
    middlePara2.style.backgroundColor = "rgba(0, 0, 0, 0.559)"
    middlePara2.style.backdropFilter = "0px 0px 1px 1px rgba(0, 0, 0, 0.493)"

    gsap.from(header, {
        delay: 0.5,
        duration: 1.1,
        x: -200,
        ease: "back.out(0.4)",
    })

    gsap.from(lineAndName, {
        delay: 0.9,
        duration: 1.5,
        opacity: 0,
        x: -400,
        ease: "back.out(0.4)",
    })

    gsap.from(middlePara1, {
        delay: 1.5,
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "back.out(1.8)"
    })

    gsap.from(middlePara2, {
        delay: 1.8,
        duration: 1.2,
        y: 200,
        backgroundColor: "black",
        opacity: 0,
        backdropFilter: "blur(4px)",
        ease: "back.out(1.5)"
    })

    gsap.from(socialProfiles, {
        delay: 2.5,
        duration: 1,
        opacity: 0,
    })
    gsap.from(".bi", {
        delay: 2.6,
        rotate: 360,
        scale: 0,
        stagger: 0.2,
        opacity: 0,
        ease: "back.out(1.5)",
    })
})
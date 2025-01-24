const hI = gsap.timeline({defaults: {duration:2, ease: "power3.inOut"}});

hI.from(".homeImg", {opacity:0, stagger:1, ease: "power1.out", duration: 2});
hI.from(".landingOverlay, .landingText", {opacity:0, stagger:0, ease: "power1.out", duration: 1.5});
gsap.from(".infoBoxDecor", {scale:0, duration: 2, scrollTrigger: ".infoBoxDecor", ease: "power3.inOut" });
gsap.from(".SolutionArray", {y:200, opacity:0, duration: 1, ease: "power3.inOut", scrollTrigger: ".SolutionArray"});
gsap.from(".SolutionArray2", {y:200, opacity:0, duration: 1, ease: "power3.inOut", scrollTrigger: ".SolutionArray2"});
gsap.from(".infoBox5", {y:200, duration: 1, scrollTrigger: ".infoBox5", ease: "power3.inOut" });
gsap.from(".infoBox2", {opacity:0, duration: 1, scrollTrigger: ".infoBox2", ease: "power3.inOut" });

gsap.from(".descriptionFloat", {opacity:0, duration: 1, scrollTrigger: ".descriptionFloat2", ease: "power3.inOut" });
gsap.from("#LHimg", {x:-200,opacity:0, duration: 1, scrollTrigger: ".floatBtn2", ease: "power3.In" });
gsap.from("#RHimg", {x:200,opacity:0, duration: 1, scrollTrigger: ".floatBtn2", ease: "power3.In" });
gsap.from(".floatBtn2", {x:200,opacity:0, duration: 1, scrollTrigger: ".descriptionFloat2", ease: "power3.In" });
gsap.from(".floatBtn3", {x:-200,opacity:0, duration: 1, scrollTrigger: ".descriptionFloat2", ease: "power3.In" });
gsap.from(".descriptionFloat3", {y:200,opacity:0, duration: 1, scrollTrigger: "div.foregroundBox", ease: "power3.inOut" });
gsap.from(".descriptionFloat4", {y:200,opacity:0, duration: 1, scrollTrigger: "div.foregroundBox", ease: "power3.inOut" });
gsap.from(".menuImg", {y:-200,opacity:0,stagger:.75, duration: .5, scrollTrigger: ".infoBlurb", ease: "power3.inOut" });

function modalAnimation(){
    gsap.from(".newsletterModal", {scale:0, duration: 2, ease: "back.out" });
}

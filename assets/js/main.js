
// ****새로고침
history.scrollRestoration = "manual";





intro = gsap.timeline({})
intro.from('.sc-main [data-scroll-text] span',{
  delay:0.2,
  yPercent:100,
  opacity:0,
  stagger:0.1,
  
},'a')


intro = gsap.timeline({})
gsap.from('.sc-introduce [data-scroll-text] span',{
  scrollTrigger:{
      trigger:'.sc-introduce',
      start:"0% 40%",
      end:"100% 100%",
      // markers:true,
      // scrub:1,
    },
  yPercent:100,
  opacity:0,
  delay:0.2,
  stagger:0.1
},'a')



intro = gsap.timeline({})
gsap.from('.sc-cat [data-scroll-text] span .cat-text' ,{
  scrollTrigger:{
      trigger:'.sc-cat',
      start:"0% 50%",
      end:"80% 100%",
      // markers:true,
      scrub:1,
    },
  yPercent:100,
  opacity:0,
  delay:0.2,
  stagger:0.1
},'a')



intro = gsap.timeline({})
gsap.from('.sc-emoji .img-emoji [data-scroll-text] span',{
  scrollTrigger:{
      trigger:'.sc-emoji',
      start:"0% 80%",
      end:"100% 0%",
      // markers:true,
      // scrub:1,
    },
  yPercent:100,
  opacity:0,
  delay:0.3,
  stagger:0.1
},'a')
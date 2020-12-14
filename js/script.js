$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

goTo = a=>{
    if(a == "watch"){
        window.open("https://bit.ly/3gNjc19","blank");
    }
    if(a == "moreInfo"){
        window.open("https://bit.ly/3qYNWR8","blank")
    }
}

socialMedia = a=>{
    if(a == "linkedIn"){
        window.open("https://www.linkedin.com/in/marcosfernandessalazar","blank");
    }
    if(a == "gitHub"){
        window.open("https://github.com/Marcosfsalazar","blank")
    }
}
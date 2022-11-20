profile = document.getElementById("profile");

// rotate images on mouseover
profile.addEventListener("mouseover", function(){
    profile.style.transform = "rotate(360deg)";
    profile.style.transition = "3s";
})
profile.addEventListener("mouseout", function(){
      profile.style.transform = "rotate(0deg)";
})
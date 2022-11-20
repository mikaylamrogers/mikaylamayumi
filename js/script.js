let contentGridElement = document.getElementById('contentGrid');
  
let jsonDatabase = [
    {
      "title" : "For Your Viewing Pleasure",
      "picture_url" : "gifs/foryour.gif",
      "link" : "html/for-your-viewing-pleasure.html",
       "category" : "Web Dev",
    },
    {
      "title" : "Halo Halo",
      "picture_url" : "gifs/halohalo.gif",
      "link" : "html/halo-halo.html",
      "category" : "Web Dev",
    },
    {
      "title" : "Loop Wellness",
      "picture_url" : "gifs/loop.gif",
      "link" : "html/loop-wellness.html",
      "category" : "Web Dev",
    },
    {
      "title" : "Real Time Weather App",
      "picture_url" : "gifs/weatherapp.gif",
      "link" : "html/weather-app.html",
      "category" : "Web Dev",
    },
    {
      "title" : "Wheel of Songs",
      "picture_url" : "gifs/wheelofsongs.gif",
      "link" : "html/wheel-of-songs.html",
      "category" : "Web Dev",
    },
    {
        "title" : "Self Portrait Stamp",
        "picture_url" : "gifs/stamp.gif",
        "link" : "html/portrait-stamp.html",
        "category" : "Creative Code",
    },
    {
        "title" : "Webcam Waterfall",
        "picture_url" : "gifs/waterfall.gif",
        "link" : "html/webcam-waterfall.html",
        "category" : "Creative Code",
    },
    {
      "title" : "If I Smushed My Face Into a Van Gogh",
      "picture_url" : "gifs/smushed.gif",
      "link" : "html/if-i-smushed-my-face.html",
      "category" : "Creative Code",
    },
    // {
    //   "title" : "Legumes and Portraits",
    //   "picture_url" : "gifs/legumes.gif",
    //   "category" : "Creative Code",
    // },
    // {
    //   "title" : "Puddle Boot Case Study",
    //   "picture_url" : "gifs/bottega.gif",
    //   "category" : "Creative Code",
    // },
    {
      "title" : "Bong Bong and Bongs",
      "picture_url" : "gifs/bongs.gif",
      "link" : "html/bong-bong-bongs.html",
      "category" : "Creative Code",
    },
    {
      "title" : "Summer of '93",
      "picture_url" : "gifs/summer.gif",
      "link" : "html/summer-of-93.html",
      "category" : "Motion Graphics",
    },
    {
      "title" : "Freddie Juggling Through Paris",
      "picture_url" : "gifs/freddie.gif",
      "link" : "html/freddie.html",
      "category" : "Motion Graphics",
    },
    {
      "title" : "WTF (What the Font)",
      "picture_url" : "gifs/wtf.gif",
      "link" : "html/wtf.html",
      "category" : "UI/UX",
    }
]
  
for (var i = 0; i < jsonDatabase.length; i++ ) {
    createElementProper(jsonDatabase[i]);
}
  
// APPEND //
function createElementProper(incomingJSON) {
let newContentElement = document.createElement("DIV");

// ADD TITLE //
let newContentHeading = document.createElement("H3");
newContentHeading.innerHTML = "<a href='" + incomingJSON['link'] + "'>" + incomingJSON['title'] + "</a>";
newContentElement.appendChild(newContentHeading);
// change color on mouseover
newContentHeading.addEventListener("mouseover", function(){
    newContentHeading.style.color = "rgb(62, 181, 110)";
    newContentHeading.style.transition = "0.5s";
})
newContentHeading.addEventListener("mouseout", function(){
    newContentHeading.style.color = "black";
})
  
// ADD IMAGES //
let newImage = document.createElement("IMG");
newImage.classList.add("profilePicture");
newImage.src = incomingJSON['picture_url'];
newContentElement.appendChild(newImage);
contentGridElement.appendChild(newContentElement);
// rotate images on mouseover
newImage.addEventListener("mouseover", function(){
    newImage.style.transform = "rotate(360deg)";
    newImage.style.transition = "3s";
})
newImage.addEventListener("mouseout", function(){
    newImage.style.transform = "rotate(0deg)";
})
  
// ADD CATEGORY //
let newContentSubheading = document.createElement("H5");
newContentSubheading.innerHTML = incomingJSON['category'];
newContentElement.appendChild(newContentSubheading);
// change color on mouseover
newContentSubheading.addEventListener("mouseover", function(){
    newContentSubheading.style.color = "rgb(255, 194, 217)";
    newContentSubheading.style.transform = "scale(1.2)";
    newContentSubheading.style.transition = "1s";
})
newContentSubheading.addEventListener("mouseout", function(){
    newContentSubheading.style.color = "black";
    newContentSubheading.style.transform = "scale(1)";
})
}
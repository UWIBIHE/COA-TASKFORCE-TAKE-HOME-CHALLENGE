
// Array containing the image data
const imageData = [
    {
        imgSrc: "./assets/image4.png",
        title: "FENNEC FOX",
        location: "India",
    },
    {
        imgSrc: "./assets/image 4.png",
        title: "HUMPBACK WHALE",
        location: "south africa",
    },
    {
        imgSrc: "./assets/Image.png",
        title: "COMMON,BROWN BABOON",
        location: "south africa"
    },
    {
        imgSrc: "./assets/Image3.png",
        title: "SPOTTED DEER",
        location: "amazon",
    },
];

// Function to create image cards
function createimageCards() {
    const imageWrapper = document.querySelector(".imageWrapper");
    imageData.forEach((data) => {
        const imageCard = document.createElement("div");
        imageCard.classList.add("imageCard");

        imageCard.innerHTML = `
    <img src="${data.imgSrc}" alt="${data.title}" />
    <div class="imageOverlay">
      <div class="contents">
        <h1>${data.title.split(" ").join("<br>")}</h1>
        <small class="location">${data.location}</small>
        <p class="more"> <span> Know More </span> <i class="fa-solid fa-arrow-right-long"></i></p>
        
      </div>
    </div>
  `;

        imageWrapper.appendChild(imageCard);
    });
}

// Call the function to create image cards on page load
document.addEventListener("DOMContentLoaded", createimageCards);

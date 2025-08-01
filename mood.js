const tapText = document.getElementById("tapText");
const moodImage = document.getElementById("moodImage");
const imageWrapper = document.getElementById("imageWrapper");

const moodImages = [
  "images/mood1.jpg",
  "images/mood2.jpg",
  "images/mood3.jpg",
   "images/mood4.jpg",
   "images/mood5.jpg",
   "images/mood6.jpg",
   "images/mood7.jpg",
   "images/mood8.jpg",
   "images/mood9.jpg",
   "images/mood10.jpg",
   "images/mood11.jpg",
   "images/mood12.jpg",
   "images/mood13.jpg",
   "images/mood14.jpg",
];

let lastTap = 0;

document.getElementById("moodContainer").addEventListener("click", () => {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;

  if (tapLength < 400 && tapLength > 0) {
    const randomImage = moodImages[Math.floor(Math.random() * moodImages.length)];
    moodImage.src = randomImage;
    imageWrapper.classList.remove("hidden");
    tapText.classList.add("hidden");
  }

  lastTap = currentTime;
});

// Optional: Hide image on second tap
imageWrapper.addEventListener("click", () => {
  imageWrapper.classList.add("hidden");
  tapText.classList.remove("hidden");
});

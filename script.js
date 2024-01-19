var localVideo;
var clickCount = 0;

function initLocalVideo() {
  localVideo = document.getElementById('localVideo');
  localVideo.addEventListener('ended', closeRickRollModal, false);
}

function playLocalVideo() {
  var modal = document.getElementById('rickRollModal');
  modal.style.display = 'block';
  localVideo.play();
}

function closeRickRollModal() {
  var modal = document.getElementById('rickRollModal');
  modal.style.display = 'none';
  localVideo.pause();
  localVideo.currentTime = 0;
}

function playSound() {
  var audio = document.getElementById('audio');
  var image = document.getElementById('mainImage');

  // Change the image to a smaller one
  image.src = "images/like.png";

  // Play the sound
  audio.play();

  // Increment the click count
  clickCount++;

  // Check if it's time to trigger the Rick Roll
  if (clickCount >= 10 && clickCount <= 15) {
    playLocalVideo();
  }

  // Reset the click count after 10 clicks
  if (clickCount === 10) {
    clickCount = 0;
  }
}

function displayInitialImage() {
  var audio = document.getElementById('audio');
  var image = document.getElementById('mainImage');

  // Change the image back to the initial one after the sound ends
  image.src = "images/bread.png";

  // Reset the audio element
  audio.currentTime = 0;
}

// Initialize local video
initLocalVideo();


document.querySelectorAll('.media').forEach(media => {
  media.addEventListener('play', function() {
    document.querySelectorAll('.media').forEach(otherMedia => {
      if (otherMedia !== media) {
        otherMedia.pause();
      }
    });
  });
});


function updateVisitorCount() {
  const visitorCountElement = document.getElementById("visitorCount");
  const currentCount = parseInt(localStorage.getItem("visitorCount") || "0");
  const newCount = currentCount + 1;
  localStorage.setItem("visitorCount", newCount);
  visitorCountElement.textContent = newCount;
}

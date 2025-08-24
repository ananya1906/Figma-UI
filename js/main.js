document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#testimonials .slide');
  const dots   = document.querySelectorAll('#testimonials .dot');
  let current  = 0;
  let timer;

  function showSlide(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots  .forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  // auto-advance every 5s
  timer = setInterval(nextSlide, 5000);

  // clicking a dot jumps to that slide & resets timer
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      showSlide(parseInt(dot.dataset.index, 10));
      timer = setInterval(nextSlide, 5000);
    });
  });

  // initialize
  showSlide(0);
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const modal    = document.getElementById('contact-modal');
  const closeBtn = modal.querySelector('.modal-close');

  // debug: make sure we found them
  console.log({ form, modal, closeBtn });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
    form.reset();
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      form.reset();
    }
  });
});


// VIDEO PLAY/PAUSE TOGGLE
const video    = document.getElementById('hero-video');
const playBtn  = document.getElementById('video-play-btn');
const wrapper  = document.querySelector('.video-wrapper');

// Sync button visibility
function updateVideoUI() {
  if (video.paused) {
    wrapper.classList.remove('playing');
  } else {
    wrapper.classList.add('playing');
  }
}

// Toggle play/pause on video click
video.addEventListener('click', () => {
  video.paused ? video.play() : video.pause();
});

// Toggle on play button click
playBtn.addEventListener('click', () => {
  video.paused ? video.play() : video.pause();
});

// Update UI when playback state changes
video.addEventListener('play',  updateVideoUI);
video.addEventListener('pause', updateVideoUI);

// Initialize
updateVideoUI();

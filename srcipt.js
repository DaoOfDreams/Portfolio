	<script>
	  // Modal open and close logic
	  document.querySelectorAll("#projects button[data-modal-target]").forEach(button => {
		button.addEventListener("click", () => {
		  const modalId = button.getAttribute("data-modal-target");
		  const modal = document.getElementById(modalId);
		  modal.style.display = "flex";
		  modal.setAttribute("aria-hidden", "false");
		  // Trap focus inside modal (for accessibility)
		  modal.querySelector(".modal-close").focus();
		});
	  });

	  document.querySelectorAll(".modal-close").forEach(button => {
		button.addEventListener("click", () => {
		  const modal = button.closest(".modal");
		  modal.style.display = "none";
		  modal.setAttribute("aria-hidden", "true");
		});
	  });

	  // Close modal on clicking outside modal-content
	  document.querySelectorAll(".modal").forEach(modal => {
		modal.addEventListener("click", e => {
		  if (e.target === modal) {
			modal.style.display = "none";
			modal.setAttribute("aria-hidden", "true");
		  }
		});
	  });

	  // Close modal on Escape key
	  document.addEventListener("keydown", event => {
		if (event.key === "Escape") {
		  document.querySelectorAll(".modal").forEach(modal => {
			if (modal.style.display === "flex") {
			  modal.style.display = "none";
			  modal.setAttribute("aria-hidden", "true");
			}
		  });
		}
	  });
	  
  // Carousel functionality
  const carousel = document.getElementById('carousel');
  const images = carousel.querySelectorAll('img');
  const dotsContainer = document.getElementById('carousel-dots');
  const dots = dotsContainer.querySelectorAll('button');
  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
      dots[i].setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
    currentIndex = index;
  }

  function nextSlide() {
    let next = (currentIndex + 1) % images.length;
    showSlide(next);
  }

  // Click event for dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      resetInterval();
    });
  });

  // Auto slide every 4 seconds
  function startInterval() {
    intervalId = setInterval(nextSlide, 4000);
  }
  function resetInterval() {
    clearInterval(intervalId);
    startInterval();
  }

	const musicToggle = document.getElementById('music-toggle');
	const bgMusic = document.getElementById('bg-music');

	function updateButtonIcon(isPlaying) {
	  musicToggle.textContent = isPlaying ? '🔈' : '🔇';
	}

	async function playMusic() {
	  try {
		await bgMusic.play();
		updateButtonIcon(true);
	  } catch (error) {
		console.warn('Autoplay prevented, user interaction needed.', error);
		updateButtonIcon(false);
	  }
	}

	// Auto-play on page load
	window.addEventListener('load', () => {
	  playMusic();
	});

	musicToggle.addEventListener('click', () => {
	  if (bgMusic.paused) {
		bgMusic.play();
		updateButtonIcon(true);
	  } else {
		bgMusic.pause();
		updateButtonIcon(false);
	  }
	});




	</script>
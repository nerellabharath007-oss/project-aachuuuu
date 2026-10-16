
const beginButton = document.getElementById("begin-btn");
const storySection = document.getElementById("story");
const homeSection = document.getElementById("home");
const letterButton = document.getElementById("letter-btn");
const letterContent = document.getElementById("letter-content");
const backButton = document.getElementById("back-btn");
const toast = document.getElementById("toast");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2600);
}

function createFloatingHearts(count = 16) {
  const symbols = ["♡", "♥", "✧", "✦"];

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${12 + Math.random() * 18}px`;
    heart.style.animationDelay = `${Math.random() * 1.1}s`;

    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

beginButton.addEventListener("click", () => {
  storySection.classList.remove("hidden");

  createFloatingHearts(22);

  storySection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

letterButton.addEventListener("click", () => {
  const isHidden = letterContent.classList.contains("hidden");

  letterContent.classList.toggle("hidden");

  letterButton.innerHTML = isHidden
    ? "Close your letter <span>×</span>"
    : "Open your letter <span>♡</span>";

  if (isHidden) {
    createFloatingHearts(10);
    showToast("A little memory, just for you ♡");

    setTimeout(() => {
      letterContent.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 100);
  }
});

backButton.addEventListener("click", () => {
  homeSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

console.log("Project Aachuuuu initialized ♡");
/* =========================================
   PROJECT AACHUUUU
   MILESTONE 2 — PHOTO SCRAPBOOK
   ========================================= */

const scrapbookMemories = [
  {
    file: "photo-01.jpg",
    title: "A little moment with us ♡",
    caption: "One for the memory box."
  },
  {
    file: "photo-02.jpg",
    title: "One of my favourite memories 💗",
    caption: "Some moments deserve to stay forever."
  },
  {
    file: "photo-03.jpg",
    title: "Aachuuuu ✨",
    caption: "A little reminder of someone special."
  },
  {
    file: "photo-04.jpg",
    title: "Just us ♡",
    caption: "Another page of our story."
  },
  {
    file: "photo-05.jpg",
    title: "One beautiful moment 🌷",
    caption: "A memory worth keeping."
  },
  {
    file: "photo-06.jpg",
    title: "That smile 💕",
    caption: "The kind of moment I could look at forever."
  },
  {
    file: "photo-07.jpg",
    title: "A little happiness",
    caption: "Small moments. Big memories."
  },
  {
    file: "photo-08.jpg",
    title: "Us, being us ♡",
    caption: "Nothing fancy. Just a beautiful memory."
  },
  {
    file: "photo-09.jpg",
    title: "A moment worth remembering",
    caption: "Another little piece of our story."
  },
  {
    file: "photo-10.jpg",
    title: "My favourite person ✨",
    caption: "Some people make ordinary days special."
  },
  {
    file: "photo-11.jpg",
    title: "Caught in a moment",
    caption: "Keeping this one forever."
  },
  {
    file: "photo-12.jpg",
    title: "Aachuuuu ♡",
    caption: "Just because you're you."
  },
  {
    file: "photo-13.jpg",
    title: "Another chapter",
    caption: "And somehow every chapter gets better."
  },
  {
    file: "photo-14.jpg",
    title: "A memory I love",
    caption: "One photo. A thousand little feelings."
  },
  {
    file: "photo-15.jpg",
    title: "Together 💗",
    caption: "This one belongs in our little scrapbook."
  },
  {
    file: "photo-16.jpg",
    title: "A beautiful day",
    caption: "A day I wouldn't mind reliving."
  },
  {
    file: "photo-17.jpg",
    title: "The little things",
    caption: "Because the little things are actually the big things."
  },
  {
    file: "photo-18.jpg",
    title: "Forever in this frame",
    caption: "Saving this moment here."
  },
  {
    file: "photo-19.jpg",
    title: "Our story ♡",
    caption: "Still writing this one."
  },
  {
    file: "photo-20.jpg",
    title: "One more memory",
    caption: "Another reason to smile."
  },
  {
    file: "photo-21.jpg",
    title: "To more moments ✨",
    caption: "This is only one chapter."
  },
  {
    file: "photo-22.jpg",
    title: "And many more ♡",
    caption: "Our story isn't finished yet."
  },

  {
    file: "photo-23.jpg",
    title: "One more beautiful memory ♡",
    caption: "Another little piece of our story."
  },
  {
    file: "photo-24.jpg",
    title: "To many more memories ✨",
    caption: "And this is only the beginning."
  }
];


const scrapbook =
  document.getElementById("scrapbook-grid");


if (scrapbook) {

  scrapbookMemories.forEach((memory) => {

    const card =
      document.createElement("article");

    card.className =
      "scrapbook-item";


    const image =
      document.createElement("img");

    image.src =
      `assets/photos/${memory.file}`;

    image.alt =
      memory.title;

    image.loading =
      "lazy";


    const title =
      document.createElement("span");

    title.className =
      "scrapbook-caption";

    title.textContent =
      memory.title;


    const caption =
      document.createElement("span");

    caption.className =
      "scrapbook-subcaption";

    caption.textContent =
      memory.caption;


    image.addEventListener("error", () => {

      console.error(
        "Could not load:",
        image.src
      );

    });


    card.append(
      image,
      title,
      caption
    );


    scrapbook.appendChild(card);

  });

}


console.log(
  "Aachuuuu scrapbook loaded ♡"
);

/* =========================================
   PROJECT AACHUUUU
   MILESTONE 2C — CINEMATIC PHOTO VIEWER
   ========================================= */

const photoViewer =
  document.getElementById("photo-viewer");

const viewerImage =
  document.getElementById("viewer-image");

const viewerTitle =
  document.getElementById("viewer-title");

const viewerCaption =
  document.getElementById("viewer-caption");

const viewerCounter =
  document.getElementById("viewer-counter");

const viewerClose =
  document.getElementById("viewer-close");

const viewerPrev =
  document.getElementById("viewer-prev");

const viewerNext =
  document.getElementById("viewer-next");

let currentPhotoIndex = 0;


/* Open photo */

function openPhoto(index) {

  currentPhotoIndex = index;

  updateViewer();

  photoViewer.classList.remove("hidden");

  document.body.style.overflow = "hidden";
}


/* Close photo */

function closePhoto() {

  photoViewer.classList.add("hidden");

  document.body.style.overflow = "";

}


/* Update viewer */

function updateViewer() {

  const memory =
    scrapbookMemories[currentPhotoIndex];

  viewerImage.src =
    `assets/photos/${memory.file}`;

  viewerImage.alt =
    memory.title;

  viewerTitle.textContent =
    memory.title;

  viewerCaption.textContent =
    memory.caption;

  viewerCounter.textContent =
    `${String(currentPhotoIndex + 1).padStart(2, "0")} / ${String(scrapbookMemories.length).padStart(2, "0")}`;

}


/* Next photo */

function showNextPhoto() {

  currentPhotoIndex =
    (currentPhotoIndex + 1) %
    scrapbookMemories.length;

  updateViewer();

}


/* Previous photo */

function showPreviousPhoto() {

  currentPhotoIndex =
    (currentPhotoIndex - 1 +
      scrapbookMemories.length) %
    scrapbookMemories.length;

  updateViewer();

}


/* Connect scrapbook cards */

const scrapbookCards =
  document.querySelectorAll(".scrapbook-item");

scrapbookCards.forEach((card, index) => {

  card.addEventListener("click", () => {

    openPhoto(index);

  });

});


/* Buttons */

viewerClose.addEventListener(
  "click",
  closePhoto
);

viewerNext.addEventListener(
  "click",
  showNextPhoto
);

viewerPrev.addEventListener(
  "click",
  showPreviousPhoto
);


/* Keyboard controls */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      photoViewer.classList.contains("hidden")
    ) {
      return;
    }

    if (event.key === "Escape") {

      closePhoto();

    }

    if (event.key === "ArrowRight") {

      showNextPhoto();

    }

    if (event.key === "ArrowLeft") {

      showPreviousPhoto();

    }

  }
);


/* Close when clicking outside image */

photoViewer.addEventListener(
  "click",
  (event) => {

    if (
      event.target === photoViewer
    ) {

      closePhoto();

    }

  }
);

console.log(
  "Aachuuuu cinematic viewer loaded ♡"
);
/* =========================================
   MILESTONE 2D — ONE YEAR EXPERIENCE
   ========================================= */

const experienceMemories = [
  {
    icon: "✦",
    label: "THE BEGINNING",
    title: "Some things begin quietly.",
    text: "Somehow, one ordinary moment became the beginning of something I never expected."
  },

  {
    icon: "♡",
    label: "THE LITTLE THINGS",
    title: "It was never just the big days.",
    text: "It was the random conversations, walks, laughs and tiny moments that slowly became my favourite memories."
  },

  {
    icon: "✨",
    label: "MY FAVOURITE PERSON",
    title: "I'm really glad I met you.",
    text: "Out of all the people I could have met, I'm really glad that somehow our paths crossed."
  },

  {
    icon: "🌙",
    label: "ONE YEAR",
    title: "365 days. Countless memories.",
    text: "One year of conversations, laughter, silly moments and countless little reasons to smile."
  },

  {
    icon: "∞",
    label: "THE FUTURE",
    title: "This is only the beginning.",
    text: "And if this was only our first chapter, I can't wait to see what the next ones look like. ♡"
  }
];

const experienceIcon = document.getElementById("experience-icon");
const experienceLabel = document.getElementById("experience-label");
const experienceTitle = document.getElementById("experience-title");
const experienceText = document.getElementById("experience-text");
const experienceNumber = document.getElementById("experience-number");
const experienceProgress = document.getElementById("experience-progress");
const experienceNext = document.getElementById("experience-next");

let experienceIndex = 0;

function updateExperience() {

  const memory = experienceMemories[experienceIndex];

  experienceIcon.textContent = memory.icon;
  experienceLabel.textContent = memory.label;
  experienceTitle.textContent = memory.title;
  experienceText.textContent = memory.text;

  experienceNumber.textContent =
    `${String(experienceIndex + 1).padStart(2, "0")} / ${String(experienceMemories.length).padStart(2, "0")}`;

  experienceProgress.style.width =
    `${((experienceIndex + 1) / experienceMemories.length) * 100}%`;

  if (experienceIndex === experienceMemories.length - 1) {
    experienceNext.innerHTML = `
      <span>One last thing</span>
      <span>→</span>
    `;
  } else {
    experienceNext.innerHTML = `
      <span>Next memory</span>
      <span>→</span>
    `;
  }
}

function changeExperience() {

  experienceIndex++;

  if (experienceIndex >= experienceMemories.length) {
    experienceIndex = 0;
  }

  updateExperience();
}

if (experienceNext) {
  experienceNext.addEventListener("click", changeExperience);
}

updateExperience();
/* =========================================
   MILESTONE 2E — MY SONG PLAYER
   ========================================= */

const mySong = document.getElementById("my-song-audio");
const songPlayButton = document.getElementById("song-play-button");
const songProgress = document.getElementById("song-progress");
const songProgressContainer = document.getElementById("song-progress-container");
const songCurrentTime = document.getElementById("song-current-time");
const songDuration = document.getElementById("song-duration");
const mySongCard = document.querySelector(".my-song-card");


/* Format seconds as M:SS */

function formatSongTime(seconds) {
  if (!Number.isFinite(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}


/* Play / Pause */

if (songPlayButton && mySong) {

  songPlayButton.addEventListener("click", () => {

    if (mySong.paused) {
      mySong.play();
    } else {
      mySong.pause();
    }

  });

}


/* When song starts playing */

if (mySong) {

  mySong.addEventListener("play", () => {

    songPlayButton.textContent = "❚❚";

    songPlayButton.setAttribute(
      "aria-label",
      "Pause song"
    );

    mySongCard.classList.add("playing");

  });


  /* When song is paused */

  mySong.addEventListener("pause", () => {

    songPlayButton.textContent = "▶";

    songPlayButton.setAttribute(
      "aria-label",
      "Play song"
    );

    mySongCard.classList.remove("playing");

  });


  /* Get total duration */

  mySong.addEventListener("loadedmetadata", () => {

    songDuration.textContent =
      formatSongTime(mySong.duration);

  });


  /* Update progress */

  mySong.addEventListener("timeupdate", () => {

    if (!mySong.duration) {
      return;
    }

    const percentage =
      (mySong.currentTime / mySong.duration) * 100;

    songProgress.style.width =
      `${percentage}%`;

    songCurrentTime.textContent =
      formatSongTime(mySong.currentTime);

  });


  /* Reset when song finishes */

  mySong.addEventListener("ended", () => {

    songPlayButton.textContent = "▶";

    songPlayButton.setAttribute(
      "aria-label",
      "Play song"
    );

    mySongCard.classList.remove("playing");

    songProgress.style.width = "0%";

    songCurrentTime.textContent = "0:00";

    mySong.currentTime = 0;

  });


  /* Click progress bar to seek */

  songProgressContainer.addEventListener(
    "click",
    (event) => {

      if (!mySong.duration) {
        return;
      }

      const rect =
        songProgressContainer.getBoundingClientRect();

      const clickPosition =
        event.clientX - rect.left;

      const percentage =
        clickPosition / rect.width;

      mySong.currentTime =
        percentage * mySong.duration;

    }
  );

}
// =========================================
// BIRTHDAY FINALE — RELIVE OUR STORY
// =========================================

const birthdayReplay = document.getElementById("birthday-replay");

if (birthdayReplay) {
  birthdayReplay.addEventListener("click", () => {
    const hero = document.getElementById("home");

    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });
}
// =========================================
// BIRTHDAY FINALE — CELEBRATION BURST
// =========================================

function createBirthdayBurst() {
  const finale = document.getElementById("birthday-finale");

  if (!finale) return;

  const symbols = ["✦", "✧", "♡", "♥", "⋆"];

  for (let i = 0; i < 28; i++) {
    const sparkle = document.createElement("span");

    sparkle.className = "birthday-burst";
    sparkle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    sparkle.style.setProperty(
      "--x",
      `${Math.random() * 100}%`
    );

    sparkle.style.setProperty(
      "--delay",
      `${Math.random() * 1.5}s`
    );

    sparkle.style.setProperty(
      "--size",
      `${10 + Math.random() * 12}px`
    );

    finale.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 4000);
  }
}
window.addEventListener("load", () => {
  setTimeout(createBirthdayBurst, 1800);
});
/* =========================================================
   PATTERN LOCK — PROJECT AACHUUUU
   ========================================================= */

const patternLock = document.getElementById("pattern-lock");
const patternScreen = document.getElementById("password-screen");
const patternStatus = document.getElementById("pattern-status");
const patternCard = document.querySelector(".pattern-card");
const patternLines = document.getElementById("pattern-lines");

const patternDots = [
  ...document.querySelectorAll(".pattern-dot")
];

/*
   YOUR SECRET PATTERN

   1  2  3
   4  5  6
   7  8  9

   Current pattern:
   1 → 2 → 5 → 8 → 9
*/

const SECRET_PATTERN = [6,5,4,9,3,8,2,7];

let currentPattern = [];
let drawingPattern = false;
let pointerPosition = { x: 0, y: 0 };

function getDotCenter(dot) {
  const lockRect = patternLock.getBoundingClientRect();
  const dotRect = dot.getBoundingClientRect();

  return {
    x:
      dotRect.left +
      dotRect.width / 2 -
      lockRect.left,

    y:
      dotRect.top +
      dotRect.height / 2 -
      lockRect.top
  };
}

function getPointerPosition(event) {
  const rect = patternLock.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function getDotAtPosition(x, y) {

  for (const dot of patternDots) {

    const center = getDotCenter(dot);

    const distance = Math.sqrt(
      Math.pow(x - center.x, 2) +
      Math.pow(y - center.y, 2)
    );

    if (distance < 35) {
      return Number(dot.dataset.dot);
    }
  }

  return null;
}

function addPatternDot(dotNumber) {

  if (currentPattern.includes(dotNumber)) {
    return;
  }

  /*
     Automatically include the middle dot when
     jumping across it.

     Example:
     1 → 3 becomes 1 → 2 → 3
  */

  if (currentPattern.length > 0) {

    const previous =
      currentPattern[currentPattern.length - 1];

    const middleDots = {
      "1-3": 2,
      "3-1": 2,

      "1-7": 4,
      "7-1": 4,

      "3-7": 5,
      "7-3": 5,

      "9-1": 5,
      "1-9": 5,

      "2-8": 5,
      "8-2": 5,

      "4-6": 5,
      "6-4": 5,

      "7-9": 8,
      "9-7": 8,

      "3-9": 6,
      "9-3": 6
    };

    const key = `${previous}-${dotNumber}`;

    if (
      middleDots[key] &&
      !currentPattern.includes(middleDots[key])
    ) {
      currentPattern.push(middleDots[key]);
      activateDot(middleDots[key]);
    }
  }

  currentPattern.push(dotNumber);

  activateDot(dotNumber);
  updatePatternLines();
}

function activateDot(dotNumber) {

  const dot =
    document.querySelector(
      `.pattern-dot[data-dot="${dotNumber}"]`
    );

  if (dot) {
    dot.classList.add("active");
  }
}

function clearPatternVisuals() {

  patternDots.forEach(dot => {
    dot.classList.remove("active", "wrong");
  });

  while (patternLines.firstChild) {
    patternLines.removeChild(patternLines.firstChild);
  }

  const previewLine =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

  previewLine.id = "pattern-line-preview";

  patternLines.appendChild(previewLine);
}

function updatePatternLines() {

  while (patternLines.firstChild) {
    patternLines.removeChild(patternLines.firstChild);
  }

  for (let i = 0; i < currentPattern.length - 1; i++) {

    const startDot =
      document.querySelector(
        `.pattern-dot[data-dot="${currentPattern[i]}"]`
      );

    const endDot =
      document.querySelector(
        `.pattern-dot[data-dot="${currentPattern[i + 1]}"]`
      );

    if (!startDot || !endDot) continue;

    const start = getDotCenter(startDot);
    const end = getDotCenter(endDot);

    const line =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );

    line.setAttribute("x1", start.x);
    line.setAttribute("y1", start.y);
    line.setAttribute("x2", end.x);
    line.setAttribute("y2", end.y);

    patternLines.appendChild(line);
  }

  /*
     Draw a temporary line from the last selected
     dot to the user's finger/mouse.
  */

  if (currentPattern.length > 0 && drawingPattern) {

    const lastDot =
      document.querySelector(
        `.pattern-dot[data-dot="${currentPattern[currentPattern.length - 1]}"]`
      );

    if (lastDot) {

      const start = getDotCenter(lastDot);

      const preview =
        document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );

      preview.setAttribute("x1", start.x);
      preview.setAttribute("y1", start.y);

      preview.setAttribute("x2", pointerPosition.x);
      preview.setAttribute("y2", pointerPosition.y);

      preview.style.opacity = "0.45";

      patternLines.appendChild(preview);
    }
  }
}

function finishPattern() {

  if (!drawingPattern) return;

  drawingPattern = false;

  /*
     Remove preview line.
  */

  if (currentPattern.length === 0) return;

  const isCorrect =
    JSON.stringify(currentPattern) ===
    JSON.stringify(SECRET_PATTERN);

  if (isCorrect) {

    patternStatus.textContent =
      "That's our little secret. ♡";

    patternStatus.classList.remove("error");
    patternStatus.classList.add("success");

    patternCard.classList.add("pattern-success");

    localStorage.setItem(
      "aachuuuuUnlocked",
      "true"
    );

    setTimeout(() => {

      patternScreen.classList.add("unlocking");

      document.body.classList.remove(
        "password-locked"
      );

      setTimeout(() => {
        patternScreen.remove();
      }, 1100);

    }, 500);

  } else {

    patternStatus.textContent =
      "Hmm... that's not our little secret. Try again ♡";

    patternStatus.classList.remove("success");
    patternStatus.classList.add("error");

    patternDots.forEach(dot => {
      if (currentPattern.includes(Number(dot.dataset.dot))) {
        dot.classList.add("wrong");
      }
    });

    patternCard.classList.remove("pattern-error");

    void patternCard.offsetWidth;

    patternCard.classList.add("pattern-error");

    setTimeout(() => {

      currentPattern = [];

      clearPatternVisuals();

      patternStatus.textContent =
        "Draw the pattern to unlock ♡";

      patternStatus.classList.remove("error");

    }, 700);
  }
}

/* =========================================================
   POINTER EVENTS
   ========================================================= */

if (patternLock) {

  patternLock.addEventListener(
    "pointerdown",
    event => {

      event.preventDefault();

      drawingPattern = true;

      currentPattern = [];

      clearPatternVisuals();

      pointerPosition =
        getPointerPosition(event);

      const dot =
        getDotAtPosition(
          pointerPosition.x,
          pointerPosition.y
        );

      if (dot) {
        addPatternDot(dot);
      }

      patternLock.setPointerCapture(
        event.pointerId
      );
    }
  );

  patternLock.addEventListener(
    "pointermove",
    event => {

      if (!drawingPattern) return;

      event.preventDefault();

      pointerPosition =
        getPointerPosition(event);

      const dot =
        getDotAtPosition(
          pointerPosition.x,
          pointerPosition.y
        );

      if (dot) {
        addPatternDot(dot);
      }

      updatePatternLines();
    }
  );

  patternLock.addEventListener(
    "pointerup",
    event => {

      event.preventDefault();

      finishPattern();

      try {
        patternLock.releasePointerCapture(
          event.pointerId
        );
      } catch (error) {}
    }
  );

  patternLock.addEventListener(
    "pointercancel",
    () => {
      finishPattern();
    }
  );
}

/* =========================================================
   REMEMBER UNLOCKED DEVICE
   ========================================================= */

if (patternScreen) {

  const alreadyUnlocked =
    localStorage.getItem(
      "aachuuuuUnlocked"
    ) === "true";

  if (alreadyUnlocked) {

    patternScreen.remove();

    document.body.classList.remove(
      "password-locked"
    );

  } else {

    document.body.classList.add(
      "password-locked"
    );
  }
}
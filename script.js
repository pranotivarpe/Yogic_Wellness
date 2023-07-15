
// JavaScript code to handle video playback
var videos = document.querySelectorAll('.video'); 
videos.forEach(function (video) {
  video.addEventListener('play', function () {
    pauseOtherVideos(video);
  });
  video.addEventListener('pause', function () {
    resetOtherVideos(video);
  });
});

function pauseOtherVideos(currentVideo) {
  videos.forEach(function (video) {
    if (video !== currentVideo && !video.paused) {
      video.pause();
    }
  });
}

function resetOtherVideos(currentVideo) {
  videos.forEach(function (video) {
    if (video !== currentVideo) {
      video.currentTime = 0;
    }
  });
}


//JS code for scrolling
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}


//JS code more link
function toggleContent() {
  var moreLink = document.getElementById('more-link');
  var hiddenContent = document.getElementById('hidden-content');

  hiddenContent.style.display = 'block';
  moreLink.style.display = 'none';
}

//JS to go on top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


//JS code for comment box
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments');

commentForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const commentInput = document.getElementById('comment-input').value;

  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');

  const commentText = document.createElement('p');
  commentText.textContent = commentInput;

  const replyContainer = document.createElement('div');
  replyContainer.classList.add('reply-container');

  const replyInput = document.createElement('textarea');
  replyInput.classList.add('reply-input');
  replyInput.placeholder = 'Reply to this comment';

  const replyButton = document.createElement('button');
  replyButton.classList.add('reply-button');
  replyButton.textContent = 'Reply';

  replyButton.addEventListener('click', function () {
    const replyText = document.createElement('p');
    const replyContent = document.createElement('span');
    replyContent.textContent = 'Reply: ';
    const replyMessage = document.createElement('span');
    replyMessage.textContent = replyInput.value;
    replyMessage.classList.add('reply-text');
    replyText.appendChild(replyContent);
    replyText.appendChild(replyMessage);
    replyContainer.appendChild(replyText);
    replyInput.value = '';
  });
  
  
  commentElement.appendChild(commentText);
  commentElement.appendChild(replyContainer);
  replyContainer.appendChild(replyInput);
  replyContainer.appendChild(replyButton);
 

  commentsContainer.appendChild(commentElement); // Append the comment to the comments container
  document.getElementById('comment-input').value = '';
});

 

 


function toggleText() {
    const hiddenText = document.querySelector('.hidden-text');
    const button = document.querySelector('.read-more-btn');
  
    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
      hiddenText.style.display = 'inline';
      button.textContent = 'Read Less...';
    } else {
      hiddenText.style.display = 'none';
      button.textContent = 'Read More...';
    }
  }
  
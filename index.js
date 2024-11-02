document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const button = document.getElementById('toggle-button');
    
    body.classList.add('light-mode');
  
    button.addEventListener('click', () => {
      if(body.classList.contains('light-mode')){
          body.classList.replace('light-mode', 'dark-mode');
          button.classList.replace('light-mode-button', 'dark-mode-button')
          button.textContent = 'Toggle Light Mode';
      } else {
          body.classList.replace('dark-mode' ,'light-mode');
          button.classList.replace('dark-mode-button' ,'light-mode-button')
          button.textContent = 'Toggle Dark Mode';
      }
    });
  });

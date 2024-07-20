function makeinvisible(){
    const button = document.getElementById('hide-btn');
    const text = document.getElementById('Parivesh');
    
    button.addEventListener('click', () => {
      text.style.display = 'none';
    });
    
}
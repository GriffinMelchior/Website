const menu = document.getElementById('menu');
const burgerMenu = document.getElementById('menuToggler')
const menuHeight = menu.offsetHeight;

burgerMenu.addEventListener('click', ()=>{
  menu.style.transition = 'all 0.4s ease-in-out'
  menu.classList.toggle('open')
})
window.addEventListener('resize', ()=>{
  const height =  window.innerWidth;
  if(height >= 999){
    menu.style.transition = 'all 0.4s ease-in-out'
    menu.classList.add('open')
  }else{
    menu.classList.remove('open')
  }
})

window.addEventListener('load', ()=>{
  const height =  window.innerWidth;
  if(height >= 999){
    menu.style.transition = 'none'
    menu.classList.add('open')
  }else{
    menu.classList.remove('open')
  }
})

const login = document.getElementById('login');
const hidden = document.querySelector('.hidden')
const activate = () =>{
  document.querySelector('.hidden').classList.toggle('active');
  document.querySelector('.Website').classList.toggle('blured')
}

login.addEventListener('click',(e)=>{
  if(e.target !== e.currentTarget) return;
  activate()
});
hidden.addEventListener('click',(e)=>{
  if(e.target !== e.currentTarget) return;
  activate()
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginPage'); 

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        showToast('Login successful!');
      } else {
        showToast(`Error: ${result.message}`);
      }
    } catch (error) {
      showToast(`Error: ${error.message}`);
    }
  });
});

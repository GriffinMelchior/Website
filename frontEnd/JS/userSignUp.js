// localStorage.clear()
if(localStorage.getItem('userInfo') === null){
  const userPage = document.querySelector('.userStats')
  userPage.style.display = 'none'
}else{
  const userSignUp = document.querySelector('.signUp')
  userSignUp.style.display = 'none'
}

const signUpForm = document.querySelector('.signForm')
signUpForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  try {
    fetch('/userProfile', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
  } catch (error) {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }

})




  
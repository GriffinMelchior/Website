localStorage.clear()
if(localStorage.getItem('userInfo') === null){
  const userPage = document.querySelector('.userStats')
  userPage.style.display = 'none'
}else{
  const userSignUp = document.querySelector('.signUp')
  userSignUp.style.display = 'none'
}
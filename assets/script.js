const submitRating = document.querySelector('#submit-rating')
const inputBtn = document.querySelectorAll('input[type=button]')
const ratingValue = document.querySelector('.rating-count')

// loop through each button and print value inside HTML
inputBtn.forEach(button => {
  button.addEventListener('click', () => {

    ratingValue.textContent = `You selected ${button.value} out of 5`

    // select element with active class 
    const currentActive = document.querySelector('.active')

    // replace current active when click another button
    currentActive.className = currentActive.className.replace(" active", "")

    // add the active class to choosen button
    button.className += " active"
  })
})

// simple submit event
const rating = document.querySelector('.rating')
const thankyou = document.querySelector('.thankyou')

submitRating.addEventListener('submit', (e) => {

  e.preventDefault()

  rating.style.display = 'none'
  thankyou.style.display = 'block'

})
const heading = document.querySelector('#mainTitle')
fetch('https://www.nosweatshakespeare.com/resources/shakespeare-insults/')
    .then(data => console.log(data))
    .catch(err => console.log(err))
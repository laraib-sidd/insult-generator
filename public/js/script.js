insultBtn = document.querySelector('.insultButton')

let tweetButton = document.getElementById("tweet")

barba.use(barbaCss)

barba.init({
    transitions: [
        {
            name: "moveUp",
            afterEnter(){
                // tweetButton.setAttribute("ref", "https://twitter.com/share?ref_src=twsrc%5Etfw")
                // tweetButton.setAttribute("class", "twitter-share-button")
                // tweetButton.setAttribute("data-size", "large")
                // tweetButton.setAttribute("data-text", "Insult goes here")
                // tweetButton.setAttribute("data-show-count", "false") 
                //<a ref="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Insult goes here!" data-show-count="false">Tweet</a>
            }
        },
    ]
})


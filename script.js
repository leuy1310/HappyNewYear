
 const countdown = document.querySelector('.countdown-p')
 const img = document.querySelector('.img-main')
 var song = document.getElementById('audio')
 var countdownAudio = document.getElementById('audio-cout-down')
const textClick = document.querySelector('.click-text')
const textJpContent = document.querySelector('.text-content')
const textEngContent = document.querySelector('.eng-text-content')

const colorText = document.querySelectorAll('h1 span')

 img.onclick = function() {
    
    img.animate([
        {transform: 'rotate(360deg)'}
    ], {
        duration: 10000,
        iterations: Infinity
    })

    textClick.style.display = 'none'
    // countdownAudio.play()
    song.play()
    let timeSecond = 5;
    countdown.innerHTML = `00:0${timeSecond}`
   
    // đếm giờ
    const setTime = setInterval(() => {
        
        timeSecond--
        if(timeSecond >= 10) {
            countdown.innerHTML = `00:${timeSecond}`
        } else {
            countdown.innerHTML = `00:0${timeSecond}`
            
            if(timeSecond <= 0 || timeSecond < 1) {  
        //    countdownAudio.pause()
           
           img.style.display = 'none'

           // clear time
           clearInterval(setTime)

           // show fireworks
           $('section').fireworks();

           // coutdown time hide
           countdown.style.opacity = `0`

           // japnese text envent
           textJpContent.style.display = 'inline'  // text show

           // english text envent
           textEngContent.style.display = 'inline' // text show

           // color change
           colorText.forEach((element) => {
            element.style.color = 
            `rgb(${Math.floor(255 * Math.random())},
             ${Math.floor(255 * Math.random())},
              ${Math.floor(255 * Math.random())})`
         })
        }    
    }
        
    }, 1000)
     
 }



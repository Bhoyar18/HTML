// let nextBtn = document.querySelector('.next')
// let prevBtn = document.querySelector('.prev')

// let slider = document.querySelector('.slider')
// let sliderList = slider.querySelector('.slider .list')
// let thumbnail = document.querySelector('.thumbnail')
// let thumbnailItems = thumbnail.querySelectorAll('.item')

// thumbnail.appendChild(thumbnailItems[0])


// nextBtn.onclick = function() {
//     moveSlider('next')
// }

// prevBtn.onclick = function() {
//     moveSlider('prev')
// }

// function moveSlider(direction) {
//     let sliderItems = slider.querySelectorAll('.item')
//     if(direction === 'next'){
//         sliderList.appendChild(sliderItems[0])
//         thumbnail.appendChild(thumbnailItems[0])
//         slider.classList.add('next')
//     }
    
// }


var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()

const time = 300;
const message = document.querySelector('.message')
const years = document.querySelector('.years')
const yearImg = document.querySelector('.year-img')
const description = document.querySelector('.description')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const funNext = document.querySelector('.fun-next')
const funPrev = document.querySelector('.fun-prev')
const funImg = document.querySelector('.fun-img')

const yearArr = [
    {
        img: './assets/ellie-four-weeks.jpg',
        year: 'Ellie at four weeks'
    },
    {
        img: './assets/ellie-six-months.jpg',
        year: 'Ellie at six months'
    },
    {
        img: './assets/ellie-one-2014.jpg',
        year: 'Ellie at one year'
    },
    {
        img: './assets/ellie-two-2015.jpg',
        year: 'Ellie at two years'
    },
    {
        img: './assets/ellie-three-2017.jpg',
        year: 'Ellie at three years'
    },
    {
        img: './assets/ellie-four-2017.jpg',
        year: 'Ellie at four years'
    },
    {
        img: './assets/ellie-five-2018.jpg',
        year: 'Ellie at five years'
    },
    {
        img: './assets/ellie-six-2020.jpg',
        year: 'Ellie at six years'
    },
    {
        img: './assets/ellie-seven-2021.jpg',
        year: 'Ellie at seven years'
    },
    {
        img: './assets/ellie-eight-2022.jpg',
        year: 'Ellie at eight years'
    },
    {
        img: './assets/ellie-nine-2023.jpg',
        year: 'Ellie at nine years'
    }
]
const photoArr = [
    {img: './assets/family/silly-ellie.jpg'},
    {img: './assets/family/snake.jpg'},
    {img: './assets/family/reunion.jpg'},
    {img: './assets/family/restaurant.jpg'},
    {img: './assets/family/restaurant_2.jpg'},
    {img: './assets/family/patio-time.jpg'},
    {img: './assets/family/matching-baba.jpg'},
    {img: '/assets/family/leoandgrandma.jpg'},
    {img: './assets/family/leo.jpg'},
    {img: './assets/family/katie-ellie.jpg'},
    { img: './assets/family/katie-bday.jpg' },
    { img: './assets/family/hux_2.jpg' },
    { img: './assets/family/great-grandpa.jpg' },
    { img: './assets/family/grandparents-house.jpg' },
    { img: './assets/family/fishing.jpg' },
    { img: './assets/family/fireworks.jpg' },
    { img: './assets/family/fam_2.jpg' },
    { img: './assets/family/fam_1.jpg' },
    { img: './assets/family/doggies.jpg' },
    { img: './assets/family/dino.jpg' },
    { img: './assets/family/cruise-family.jpg' },
    { img: './assets/family/climbing.jpg' },
    { img: './assets/family/christmas.jpg' },
    { img: './assets/family/bella-love.jpg' },
    { img: './assets/family/bella_2.jpg' },
    { img: './assets/family/bella_1.jpg' },
    { img: './assets/family/baba.jpg' },
    { img: './assets/family/baba-beach.jpg' },
    { img: './assets/family/ash-katie-kids.jpg' },
    { img: './assets/family/silly-hux.jpeg' },
    { img: './assets/family/cute-hux.jpeg' },
    
]
console.log(photoArr.length)
const appendLetter = (letter) => {
    message.append(letter)
}

const typer = (text) => {
    for (let i = 0; i < text.length; i++){
        let letter = text[i]
        setTimeout(appendLetter, time*i, letter)
    }

}
let count = 0
typer('Happy Birthday Ellie!')
const handleNext = (e) => {
    if (count === yearArr.length - 1) count = -1
    count += 1
    e.preventDefault()
    yearImg.setAttribute('src', yearArr[count].img)
    yearImg.setAttribute('alt', yearArr[count].year)
    description.innerHTML = yearArr[count].year
}
const handlePrev = (e) => {
    if (count === 0) count = yearArr.length
    count -= 1
    e.preventDefault()
    yearImg.setAttribute('src', yearArr[count].img)
    yearImg.setAttribute('alt', yearArr[count].year)
    description.innerHTML = yearArr[count].year
}
let funCount = 0
const handleFunNext = (e) => {
    if (funCount === photoArr.length - 1) funCount = -1
    funCount += 1
    e.preventDefault()
    funImg.setAttribute('src', photoArr[funCount].img)
}
const handleFunPrev = (e) => {
    if (funCount === 0) funCount = photoArr.length
    funCount -= 1
    e.preventDefault()
    funImg.setAttribute('src', photoArr[funCount].img)
}

//event listeners
prev.addEventListener('click', handlePrev)
next.addEventListener('click', handleNext)
funPrev.addEventListener('click', handleFunPrev)
funNext.addEventListener('click', handleFunNext)
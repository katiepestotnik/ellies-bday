const time = 300;
const message = document.querySelector('.message')
const years = document.querySelector('.years')
const yearImg = document.querySelector('.year-img')
const description = document.querySelector('.description')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
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
]
console.log(yearArr.length)
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
    if (count === 0) count = 10
    count -= 1
    e.preventDefault()
    yearImg.setAttribute('src', yearArr[count].img)
    yearImg.setAttribute('alt', yearArr[count].year)
    description.innerHTML = yearArr[count].year
}

//event listeners
prev.addEventListener('click', handlePrev)
next.addEventListener('click', handleNext)
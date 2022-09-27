const time = 300;
const message = document.querySelector('.message')
const appendLetter = (letter) => {
    message.append(letter)
}

const typer = (text) => {
    for (let i = 0; i < text.length; i++){
        let letter = text[i]
        setTimeout(appendLetter, time*i, letter)
    }

}
typer('Happy Birthday Ellie!')

const yearArr = [
    './assets/ellie-four-weeks.jpg',
    './assets/ellie-six-months.jpg',
    './assets/ellie-one-2014.jpg',
    './assets/ellie-two-2015.jpg',
    './assets/ellie-three-2017.jpg',
    './assets/ellie-four-2017.jpg',
    './assets/ellie-five-2018.jpg',
    './assets/ellie-six-2020.jpg',
    './assets/ellie-seven-2021.jpg',
    './assets/ellie-eight-2022.jpg',
]

yearArr.forEach((photo) => {
    const newPhoto = document.createElement('img')
    newPhoto.setAttribute('src', photo)

})
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
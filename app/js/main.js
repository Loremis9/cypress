function caesar(text,key){
let result = '';
let caesar = text.trim().split('')

    return caesar.map(elem=> encode(elem,key)).join("")
}

function encode(char, key){
const lowerCaseLetterAscii = [97,122]
const upperCaseLetterAscii = [65,90]
const acii = char.charCodeAt(0)

if(acii >= 97 && acii <= 122){
if(key + acii > 122){
const calculeEncodeAscii = (acii + key) % lowerCaseLetterAscii[1]
const letterEncode = String.fromCharCode(lowerCaseLetterAscii[0]+ calculeEncodeAscii)
return letterEncode
}
const letterEncode = String.fromCharCode(acii + key)
return letterEncode
}
if(acii >=65 && acii <= 90 ){
if(key + acii > 90){
    const calculeEncodeAscii = (acii + key) % upperCaseLetterAscii[1]
    const letterEncode = String.fromCharCode(upperCaseLetterAscii[0]+ calculeEncodeAscii)
    return letterEncode
}
const letterEncode = String.fromCharCode(acii + key)
return letterEncode
}
return " "
}


let btnCipher = document.querySelector('#btn-cipher')
btnCipher.addEventListener('click', (e) => {
    e.preventDefault()
    let paragraphResult = document.querySelector('#result')
    let cipherKeyValue = parseInt(document.querySelector('#cipher-key').value)
    let cipherMsgValue = document.querySelector('#cipher-msg').value

    paragraphResult.innerHTML = caesar(cipherMsgValue, cipherKeyValue)
})

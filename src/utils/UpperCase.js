const UpperCase = (phrase, verify) => {
    if (verify) {
        return phrase.toUpperCase()
    } else {
        return phrase
    }
}

export default UpperCase
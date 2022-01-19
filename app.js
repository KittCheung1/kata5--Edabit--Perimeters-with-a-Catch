function perimeters(letter, number) {
    return letter == "s" ? number * 4 :
        letter = "c" ? number * 6.28 :
        0;
}

console.log(perimeters("c", 4));
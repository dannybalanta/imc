function bodyIndex () {
    basic.showString("m:" + Math.round(masa) + "kg")
    basic.pause(2000)
    basic.showString("a:" + altura + "m")
    basic.pause(2000)
    imc = masa / altura ** 2
    basic.pause(2000)
    basic.showString("IMC:" + Math.round(imc) + "kg/m2")
    if (imc >= 18.5 && imc <= 24.9) {
        basic.showIcon(IconNames.Yes)
    } else if (imc >= 25 && imc <= 29.9) {
        basic.showIcon(IconNames.Sad)
    } else if (imc > 30) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showString("!")
    }
    basic.pause(2000)
    basic.clearScreen()
}
let imc = 0
let altura = 0
let masa = 0
masa = 82
altura = 1.7
imc = 0
basic.forever(function () {
    basic.showString(".")
    bodyIndex()
    basic.showString(".")
})

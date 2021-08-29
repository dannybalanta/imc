function bodyIndex () {
    basic.showString("m:" + Math.round(masa) + "kg")
    basic.pause(2000)
    basic.showString("a:" + altura + "m")
    basic.pause(2000)
    imc = masa / altura ** 2
    basic.showString("IMC:" + Math.round(imc) + "kg/m2")
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

input.onButtonPressed(Button.A, function () {
    NUMB += 1
    basic.showNumber(NUMB)
})
input.onButtonPressed(Button.AB, function () {
    Strikes = 4
    basic.showNumber(Strikes)
    Balls = 3
    basic.showNumber(Balls)
})
input.onButtonPressed(Button.B, function () {
    NUMB += 2
    basic.showNumber(NUMB)
})
input.onGesture(Gesture.Shake, function () {
    NUMB = 0
    basic.showNumber(NUMB)
})
let Balls = 0
let Strikes = 0
let NUMB = 0
basic.showIcon(IconNames.Skull)
let Pic = 0

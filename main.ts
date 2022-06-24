let mao = 0
input.onGesture(Gesture.Shake, function () {
    mao = randint(1, 3)
    if (mao == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (mao == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})



let mode: boolean = false
basic.showIcon(IconNames.No)

input.onButtonPressed(Button.A, function () {
    mode = !mode
    if (mode) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})


basic.forever(function() {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)

    let msg = `{"x": ${x}, "y": ${y}, "walk_mode": ${mode}}`

    serial.writeLine(msg)

    basic.pause(100)
})

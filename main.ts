basic.showString("Hello!")
music.playMelody("C G C F E C D C ", 120)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().clear()
basic.showIcon(IconNames.Butterfly)
basic.forever(function () {
    if (Tinybit.Voice_Sensor() > 100) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # # # .
            # . . . #
            `)
        for (let index = 0; index < 4; index++) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 50)
            basic.pause(50)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 50)
            basic.pause(50)
        }
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 60)
        basic.pause(1000)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})

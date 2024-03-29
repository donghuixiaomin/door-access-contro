let distance = 0
basic.forever(function () {
    // 获取当前距离
    distance = Microbit.ping(Ultrasonic_pin.u1, PingUnit.Centimeters)
    // 如果距离小于30厘米，则关闭门
    if (distance < 30) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.No)
    } else {
        // 否则，保持门打开
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.showIcon(IconNames.Yes)
    }
    // 等待一段时间后再进行下一次检测，以免频繁检测
    basic.pause(1000)
})

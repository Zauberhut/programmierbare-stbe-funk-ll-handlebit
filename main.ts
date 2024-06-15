input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    programm += 1
    if (programm > 4) {
        programm = 0
    }
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    strip.clear()
    strip.show()
    basic.clearScreen()
    led.plot(programm, programm)
})
function farbenzeigen () {
    for (let index = 0; index < 4; index++) {
        strip.showRainbow(1, 255)
        strip.show()
        basic.pause(100)
        strip.clear()
        strip.show()
        basic.pause(50)
    }
    radio.sendString("" + (Boardnamen[BoardnamenPosition]))
    basic.pause(5)
    BoardnamenPosition += 1
    if (BoardnamenPosition >= Boardnamen.length) {
        BoardnamenPosition = 0
    }
}
input.onButtonPressed(Button.A, function () {
    if (programm == 0) {
        strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Red), 8)
        radio.sendString("" + (befehle._pickRandom()))
        strip.showColor(informatiktheater.colors(NeoPixelColors.White))
        for (let index = 0; index < strip.length(); index++) {
            basic.pause(20)
            strip.shift(1)
            strip.show()
        }
    } else if (programm == 1) {
        strip.setPixelColorRange(strip.length() / 2, informatiktheater.colors(NeoPixelColors.Red), 5)
    } else if (programm == 2) {
        strip.clear()
        strip.showRainbow(1, 255)
    } else if (programm == 3) {
        farbenzeigen()
    } else if (programm == 4) {
        farbenzeigen()
    }
})
function kontrollbefehle (num: number) {
    befehle = [
    "p-links",
    "p-rechts",
    "b-links",
    "b-rechts"
    ]
}
input.onButtonPressed(Button.AB, function () {
    if (programm == 0) {
    	
    } else if (programm == 1) {
        strip.clear()
        strip.show()
    } else if (programm == 2) {
        strip.clear()
        strip.show()
    } else if (programm == 3) {
        for (let Index = 0; Index <= Boardnamen.length - 1; Index++) {
            basic.showString("" + (Boardnamen[Index]))
        }
    } else if (programm == 4) {
        for (let Index = 0; Index <= Boardnamen.length - 1; Index++) {
            basic.showString("" + (Boardnamen[Index]))
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (programm == 0) {
        if (receivedString == "p-links") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Red))
            for (let index = 0; index < strip.length(); index++) {
                basic.pause(20)
                strip.shift(1)
                strip.show()
            }
        } else if (receivedString == "b-links") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Orange))
            for (let index = 0; index < strip.length(); index++) {
                basic.pause(20)
                strip.show()
                strip.shift(1)
            }
        } else if (receivedString == "p-rechts") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Green))
            for (let index = 0; index < strip.length(); index++) {
                basic.pause(20)
                strip.show()
                strip.shift(1)
            }
        } else if (receivedString == "b-rechts") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.White))
            for (let index = 0; index < strip.length(); index++) {
                basic.pause(20)
                strip.show()
                strip.shift(1)
            }
        } else if (receivedString == "rot") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Red))
            strip.show()
        } else if (receivedString == "gruen") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Green))
            strip.show()
        } else if (receivedString == "blau") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Blue))
            strip.show()
        } else if (receivedString == "weiss") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.White))
            strip.show()
        } else if (receivedString == "schwarz") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Black))
            strip.show()
        }
    } else if (programm == 3) {
        if (control.deviceName() == receivedString) {
            farbenzeigen()
        }
    } else if (programm == 4) {
        if (control.deviceName() == receivedString) {
            farbenzeigen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (programm == 0) {
        radio.sendString("" + (farben._pickRandom()))
        strip.showColor(informatiktheater.colors(NeoPixelColors.White))
        strip.show()
    } else if (programm == 1) {
        strip.setPixelColorRange(strip.length() / 2, informatiktheater.colors(NeoPixelColors.Blue), 5)
    } else if (programm == 2) {
        strip.showColor(informatiktheater.colors(NeoPixelColors.Black))
        strip.show()
    } else if (programm == 3) {
    	
    } else if (programm == 4) {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (login == 0) {
        radio.sendValue(control.deviceName(), 100)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        login = 1
        basic.showNumber(Boardnamen.length)
    }
    programm = 3
    led.plot(programm, programm)
})
radio.onReceivedValue(function (name, value) {
    if (value == 100) {
        Boardnamen.push(name)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        basic.showNumber(Boardnamen.length)
    } else if (false) {
    	
    } else {
    	
    }
})
function farbendefinieren (num: number) {
    farben = ["rot", "gruen", "blau"]
}
function farbenzeigen2 () {
    strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Violet), 10)
    for (let index = 0; index < strip.length(); index++) {
        basic.pause(20)
        strip.show()
        strip.shift(1)
    }
    radio.sendString("" + (Boardnamen[BoardnamenPosition]))
    BoardnamenPosition += 1
    if (BoardnamenPosition >= Boardnamen.length) {
        BoardnamenPosition = 0
    }
}
let farben: string[] = []
let befehle: string[] = []
let BoardnamenPosition = 0
let programm = 0
let Boardnamen: string[] = []
let login = 0
let strip: informatiktheater.Strip = null
strip = informatiktheater.create(HiwonderPins.P2, 60, PowerSource.Intern)
radio.setGroup(1)
// ist der Stab bereis eingeloggt?
login = 0
// Liste erstellen mit allen Boardnamen im Netzwerk
Boardnamen = []
programm = 0
kontrollbefehle(1)
farbendefinieren(1)
basic.forever(function () {
    if (programm == 0) {
    	
    } else if (programm == 1) {
        strip.show()
        strip.rotate(Math.map(input.acceleration(Dimension.X), -250, 250, -2, 2))
    } else if (programm == 2) {
        strip.show()
        strip.rotate(Math.map(input.acceleration(Dimension.X), 250, -250, -2, 2))
    } else if (programm == 3) {
    	
    } else if (programm == 4) {
    	
    }
})

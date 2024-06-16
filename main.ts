// Programm weiterschalten (0-4)
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
    basic.pause(5)
    radio.sendString("" + (Boardnamen[BoardnamenPosition]))
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
        farbenzeigen2()
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
        basic.showString("" + (Boardnamen.length))
        for (let Index = 0; Index <= Boardnamen.length - 1; Index++) {
            basic.showString("" + (Boardnamen[Index]))
        }
    } else if (programm == 4) {
        basic.showString("" + (Boardnamen.length))
        for (let Index = 0; Index <= Boardnamen.length - 1; Index++) {
            basic.showString("" + (Boardnamen[Index]))
        }
    }
})
// im Programm 0:
// Farben können auch mit dem Handlebit ausgelöst werden.
radio.onReceivedString(function (receivedString) {
    if (programm == 0) {
        if (receivedString == "p-links") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Blue))
            for (let index = 0; index < strip.length(); index++) {
                basic.pause(20)
                strip.shift(1)
                strip.show()
            }
        } else if (receivedString == "b-links") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.White))
            for (let index = 0; index < strip.length(); index++) {
                basic.pause(20)
                strip.show()
                strip.shift(1)
            }
        } else if (receivedString == "p-rechts") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Red))
            for (let index = 0; index < strip.length(); index++) {
                basic.pause(20)
                strip.show()
                strip.shift(1)
            }
        } else if (receivedString == "b-rechts") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Orange))
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
        } else if (receivedString == "m-links") {
            strip.showRainbow(1, 255)
            strip.show()
        } else if (receivedString == "m-rechts") {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Black))
            strip.showRainbow(255, 1)
            strip.show()
        }
    } else if (programm == 3) {
        if (control.deviceName() == receivedString) {
            farbenzeigen()
        }
    } else if (programm == 4) {
        if (control.deviceName() == receivedString) {
            farbenzeigen2()
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
// wen es nicht geklappt hat, kann hier manuell der eigene Namen gesendet werden
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendValue(control.deviceName(), 200)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showNumber(Boardnamen.length)
})
radio.onReceivedValue(function (name, value) {
    if (value == 200) {
        Boardnamen.push(name)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Yes)
    }
    if (name == "x-rechts" && value < 10) {
        strip.showColor(informatiktheater.colors(NeoPixelColors.Red))
        strip.show()
    }
    if (programm == 0) {
        if (name == "x-rechts" && value > 10) {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Orange))
            strip.show()
        }
        if (name == "y-rechts" && value < 10) {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Yellow))
            strip.show()
        }
        if (name == "y-rechts" && value > 10) {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Purple))
            strip.show()
        }
        if (name == "x-links" && value > 10) {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Blue))
            strip.show()
        }
        if (name == "x-links" && value < 10) {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Violet))
            strip.show()
        }
        if (name == "y-links" && value > 10) {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Green))
            strip.show()
        }
        if (name == "y-links" && value < 10) {
            strip.showColor(informatiktheater.colors(NeoPixelColors.White))
            strip.show()
        }
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
let programm = 0
let BoardnamenPosition = 0
let Boardnamen: string[] = []
let strip: informatiktheater.Strip = null
strip = informatiktheater.create(HiwonderPins.P2, 60, PowerSource.Intern)
radio.setGroup(1)
// ist der Stab bereis eingeloggt?
let login = 0
// Liste erstellen für alle Boardnamen im Netzwerk
Boardnamen = []
BoardnamenPosition = 0
programm = 0
kontrollbefehle(1)
farbendefinieren(1)
basic.showString(control.deviceName())
for (let Index = 0; Index <= 1; Index++) {
    strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Blue), 1)
    for (let index = 0; index < 8; index++) {
        strip.show()
        strip.rotate(5)
        basic.pause(100)
    }
    // Wertepaar Gerätename und 200 schreibt Boardnamen ins Array Boardnamen
    radio.sendValue(control.deviceName(), 200)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    strip.clear()
    strip.show()
}
if (Boardnamen.length > 0) {
    // andere Boards gefunden
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.Sad)
}
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

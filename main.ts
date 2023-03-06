let degrees = 0
input.onButtonPressed(Button.A, function () {
    music.playTone(220, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.AB, function () {
    music.changeTempoBy(20)
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(20)
})
basic.forever(function () {
    music.setTempo(120)
    for (let index = 0; index < 20; index++) {
        music.rest(music.beat(BeatFraction.Quarter))
        if (input.lightLevel() < 80) {
            music.playTone(131, music.beat(BeatFraction.Half))
        } else {
            if (input.lightLevel() < 80) {
            	
            } else {
                music.playTone(698, music.beat(BeatFraction.Half))
            }
        }
    }
})
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (degrees < 135) {
        music.playMelody("G B A G C5 B A B ", 120)
    } else if (degrees < 225) {
        music.playMelody("A F E F D G E F ", 120)
    } else if (degrees < 315) {
        music.playMelody("C5 G B A F A C5 B ", 120)
    } else {
        music.playMelody("C5 E G B A F D C ", 120)
    }
})




function chordProgression() {
    
    var value =
    document.getElementById("keySelector");
    var oneChord
    var fourChord
    var fiveChord
   
value = document.getElementById("keySelector").value;


if (value === "1") {
    oneChord = "A"
    fourChord = "D"
    fiveChord = "E"
}
 else if (value === "2") {
    oneChord = "A#"
    fourChord = "D#"
    fiveChord = "F"
}
 else if (value === "3") {
    oneChord="B"
    fourChord = "E"
    fiveChord = "F#"
}
else if (value === "4") {
   oneChord = "C"
    fourChord = "F"
    fiveChord = "G"
}
else if (value === "5") { 
    oneChord= "C"
    fourChord = "F#"
    fiveChord = "G#"
}
else if (value === "6") {
    oneChord= "D"
    fourChord = "G"
    fiveChord = "A"
}
else if (value === "7") {
    oneChord= "D#"
    fourChord = "G#"
    fiveChord = "A#"
}
else if (value === "8") {
    oneChord= "E"
    fourChord = "A"
    fiveChord = "B"
}
else if (value === "9") {
    oneChord= "F"
    fourChord = "A#"
    fiveChord = "C"
}
else if (value === "10") {
    oneChord= "F#"
    fourChord = "B"
    fiveChord = "C#"
}
else if (value === "11") {
    oneChord= "G"
    fourChord = "C"
    fiveChord = "D"
}
else if (value === "12") {
    oneChord= "G#"
    fourChord = "C#"
    fiveChord = "D#"
} 
    return oneChord + " " + oneChord + " " + oneChord + " " + oneChord + " " + fourChord + " " + fourChord + " " + oneChord + " " + oneChord + " " + fiveChord + " " + fourChord + " " + oneChord + " " + oneChord; 

}

function lyricGenerator() {
    var locationLyric = ["Delta ", "River ", "Bayou ", "Crossroads "]
    var otherLyric = ["Momma ", "Lady ", "Baby ", "Honey "]
    var lyrics = "Went down to the " + locationLyric[Math.floor(Math.random()*4)] + "cause my " + otherLyric[Math.floor(Math.random()*4)] + "left me today";
    return lyrics;

    lyrics = document.getElementById("lyrics").lyrics
}

import Timer from "./timer.js";


const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease_tempo');
const increaseTempoBtn = document.querySelector('.increase_tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');
const click = new Audio ('metronome-85688.mp3')



let bpm = 140;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;
let tempoTextString = 'madium'

decreaseTempoBtn.addEventListener('click' ,() =>{
    if(bpm <= 20){return}
   bpm--;
   VlaidateTempo();
   UpdateMetronome();
});

increaseTempoBtn .addEventListener('click' ,() =>{
    if(bpm >= 280){return}
    bpm++;
    VlaidateTempo();
    UpdateMetronome();
 });

 tempoSlider.addEventListener('input', () => {
  bpm = tempoSlider.value;
  VlaidateTempo();
  UpdateMetronome();
 });

 subtractBeats.addEventListener('click', () =>{
    if(beatsPerMeasure <= 2){return}
 beatsPerMeasure--;
 measureCount.textContent = beatsPerMeasure;
 count = 0
 });

addBeats.addEventListener('click', () =>{
    if(beatsPerMeasure >= 12){return}
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
    });
   
    startStopBtn.addEventListener('click',() =>{
        count = 0
        if(!isRunning){
        metronome.start()
        isRunning = true
        startStopBtn.textContent = 'STOP'
        } else{
            metronome.stop()
            isRunning = false
            startStopBtn.textContent = 'START'
        }
    })
    function UpdateMetronome(){
        tempoDisplay.textContent = bpm;
        tempoSlider.value = bpm;
        metronome.timeInterval = 60000 / bpm
        
    
        if(bpm <= 40){tempoTextString = "خیلی آروم"}
        if(bpm > 40 && bpm < 80){tempoTextString = "آروم"}
        if(bpm > 80 && bpm < 120){tempoTextString = "آدی"}
        if(bpm > 120 && bpm < 180){tempoTextString = "نسبتا تند"}
        if(bpm > 180 && bpm < 220){tempoTextString = "تند"}
        if(bpm > 220 && bpm < 240){tempoTextString = "خیلی تند"}
        if(bpm > 240 && bpm < 260){tempoTextString = "سوپر تند"}
        if(bpm > 260 && bpm < 280){tempoTextString = "گیگا تند"}
        tempoText.textContent = tempoTextString;
    }

    function VlaidateTempo() {
        if(bpm <= 20){return}
        if(bpm >= 280){return}
    }

function playClick(){
    console.log(count);
    if(count === beatsPerMeasure){
        count = 0;
    }
    if(count === 0){
        click.play();
    click.currentTime = 0
    }
    count++
}


    const metronome = new Timer(playClick,  60000 / bpm, {immediate: true})

    // metronome.start();
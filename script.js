console.log('ke hal')

// initializing  variable
let songIndex= 0;
let audioElement= new Audio ('songs/1.mp3');
let masterPLay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems= Array.from (document.getElementsByClassName('songItems'));
let masterSongName = document.getElementById('masterSongName');

let songs =[{  songName: 'shut the fuck up' , filePath: "songs/8.mp3 " , coverPath: "covers/6.jpg"},
    {  songName: 'wanna be yours' , filePath: "songs/1.mp3 " ,coverPath: "covers/1.jpg"},
    {  songName: 'babe you dont know' , filePath: "songs/2.mp3 " , coverPath: "covers/2.jpg"},
    {  songName: 'you dont know me son' , filePath: "songs/3.mp3 " , coverPath: "covers/3.jpg"},
    {  songName: 'let me be yours brother' , filePath: "songs/4.mp3 " , coverPath: "covers/4.jpg"},
    {  songName: 'umeeden kuch bake hein' , filePath: "songs/5.mp3 " , coverPath: "covers/5.jpg"},
    {  songName: 'mujhe phir be tere yaaaad kiyu ate he' , filePath: "songs/6.mp3 " , coverPath: "covers/6.jpg"},
 {  songName: 'na jane kab se hmmm' , filePath: "songs/7.mp3 " ,coverPath: "covers/7.jpg"},
{  songName: 'yad karke muskerata han han ' , filePath: "songs/8.mp3 " , coverPath: "covers/8.jpg"},
 {  songName: 'tere re bin jo pal betata waqt se woh mang laga' , filePath: "songs/9.mp3 " , coverPath: "covers/9.jpg"},


]


songItems.forEach((element , i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});

masterPLay.addEventListener('click', ()=>{
if (audioElement.paused || audioElement.currentTime <=0){
    audioElement.play();
    masterPLay.classList.remove('fa-play-circle');
    masterPLay.classList.add('fa-pause-circle')
    gif.style.opacity=1;
}else{
     audioElement.pause();
    masterPLay.classList.remove('fa-pause-circle');
    masterPLay.classList.add('fa-play-circle');
    gif.style.opacity=0;
}

})
audioElement.addEventListener('timeupdate', ()=> {
    // console.log('timeupdate');

    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);  // parseTnt keh  perseTnt likho sadyo method kharab the wayi
    // console.log(progress); 
    myProgressBar.value=progress;


 myProgressBar.addEventListener('change' , ()=>{ audioElement.currentTime= myProgressBar.value* audioElement.duration/100; })
})

const makeAllPlay=()=>{
 Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');


})
}

Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
// console.log(e .target);
makeAllPlay();

songIndex= parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
masterSongName.innerHTML=songs[songIndex].songName;
audioElement.src=`songs/${songIndex+1}.mp3`;
audioElement.currentTime=0;
audioElement.play();
    gif.style.opacity=1;
    masterPLay.classList.remove('fa-play-circle');
    masterPLay.classList.add('fa-pause-circle');
    });
});
document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9){
        songIndex=0;
    }
else{
    songIndex+= 1;

}
audioElement.src=`songs/${songIndex+1}.mp3`;
masterSongName.innerHTML=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
    masterPLay.classList.remove('fa-play-circle');
    masterPLay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex>=0){
        songIndex=0;
    }
else{
    songIndex-= 1;

}
audioElement.src=`songs/${songIndex+1}.mp3`;
masterSongName.innerHTML=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
    masterPLay.classList.remove('fa-play-circle');
    masterPLay.classList.add('fa-pause-circle');
})

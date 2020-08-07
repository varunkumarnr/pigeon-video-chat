const videoGrid = document.getElementById('video-grid');
var socket = io();
const myVideo = document.createElement('video');
myVideo.muted = true;


let myVideoStream ;
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream =>{
    myVideoStream =  stream;
    addVideoSteam(myVideo,stream)
})
socket.emit('join-room',ROOM_ID);
socket.on('user-connected',()=>{
    connectNewUser();
})
const connectNewUser = () =>{
    console.log('new user');
}
const addVideoSteam = (video,stream) =>{
    video.srcObject = stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    })
    videoGrid.append(video);
}

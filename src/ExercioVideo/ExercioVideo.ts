interface VideoPlayerElementsProps {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
    playToggle(): void;
    stop(): void;
    eventStart(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
    private videoPlayer: HTMLVideoElement;
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;

    constructor(videoPlayerElementsProps: VideoPlayerElementsProps) {
        this.videoPlayer = videoPlayerElementsProps.videoPlayer;
        this.playButton = videoPlayerElementsProps.playButton;
        this.stopButton = videoPlayerElementsProps.stopButton;
    }
    playToggle(): void{
        if(this.videoPlayer.paused){
            this.videoPlayer.play();
            this.playButton.innerHTML = 'Pause';
        }else{
            this.videoPlayer.pause();
            this.playButton.innerHTML = 'Play';

        }
    }

    stop(): void{
        throw new Error('Method not implemented.');
    }
    eventStart(): void{
        this.playButton.addEventListener('click', ()=> {
            this.playToggle();
        });
    }

}

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video') as HTMLVideoElement,
    playButton: document.querySelector('.play') as HTMLButtonElement,
    stopButton: document.querySelector('.stop') as HTMLButtonElement
});

videoPlayer.eventStart();

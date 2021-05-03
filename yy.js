class player {
    constructor() {
    var hmain1=document.getElementById("main1");
    hmain1.style.height=screen.height +"px";

    if (screen.width<620) {

        hmain1.style.height=screen.width +"px";
    }
var hspan1=document.getElementById("span1")
hspan1.style.height=screen.height-2020 +"px";

}
} 
onload=new player();
class Audio_player {
    constructor () {
        this.audio_file=document.getElementById("audio_file");
        this.title_audio=document.getElementById("title_radio");
        this.play_pause_button=document.getElementById("play_pause");
        this.isPlayed;
        this.play_pause_button.addEventListener("click",()=> {
           this.play_pause(); 
        });
 
        this.names_radio=[];
        this.names_radio[0]="radio Constantine";
        this.names_radio[1]="radio Batna";
        this.names_radio[2]="radio Medea";
        this.names_radio[3]="radio Skiked";
        this.names_radio[4]="radio Practiced";
        this.names_radio[5]="radio the tower";
        this.names_radio[6]="radio Oran";
        this.names_radio[7]="radio Jijel";

        this.source_audio=[];
        this.source_audio[0]="https://adrar.ice.infomaniak.ch/01.aac";
        this.source_audio[1]="https://oeb.ice.infomaniak.ch/04.aac";
        this.source_audio[2]="https://bechar.ice.infomaniak.ch/08.aac";
        this.source_audio[3]="https://adrar.ice.infomaniak.ch/01.aac";
        this.source_audio[4]="https://tiziouzou.ice.infomaniak.ch/15.aac";
        this.source_audio[5]="https://laghouat.ice.infomaniak.ch/03.aac";
        this.source_audio[6]="https://elbahdja.ice.infomaniak.ch/elbahdja-32.aac";
        this.source_audio[7]="https://tamanrasset.ice.infomaniak.ch/11.aac";
        this.server=0;

        this.setResource();
        document.getElementById("next").addEventListener("click",()=> {
            if (this.server<this.names_radio.length-1) {
                ++this.server;
                this.isPlayed=false;
            }else {
                this.server=0;
            }
            localStorage.setItem("gg", this.server);
           this.setResource();
            
        });
        document.getElementById("back").addEventListener("click",()=> {
            if (this.server>0) {
                --this.server;
                this.isPlayed=false;
            }else {
                this.server=this.names_radio.length-1;
            }
            localStorage.setItem("gg", this.server);
            this.setResource();
        });
    }
setResource() {
    if ( localStorage.getItem("gg")!=null) {
        this.server=localStorage.getItem("gg");
    }
    this.audio_file.src=this.source_audio[this.server];

    this.title_audio.innerHTML=this.names_radio[this.server];
    this.play_pause();
}

    play_pause() {
if ( this.isPlayed==false) {
    this.play_pause_button.src="pause.png";
    this.audio_file.play();
    this.isPlayed=true;
    
}else {
    this.play_pause_button.src="play.png";
    this.audio_file.pause();
    this.isPlayed=false;

    
}
    }
}
onload =new Audio_player();

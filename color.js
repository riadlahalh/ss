class Color {
    constructor () {
        this.b1=document.getElementById("b1");
        this.b1.addEventListener("click",()=>{
            this.select_color("b1");
        });
        this.b2=document.getElementById("b2");
        this.b2.addEventListener("click",()=>{
           this.select_color("b2");
        });
        this.b3=document.getElementById("b3");
        this.b3.addEventListener("click",()=>{
           this.select_color("b3");
        });
        this.b4=document.getElementById("b4");
        this.b4.addEventListener("click",()=>{
           this.select_color("b4");
        });
        if ( localStorage.getItem("dd")==null) {

            document.body.style.background="rgb(29, 28, 28)";

        }
        this.select_color(localStorage.getItem("dd"));
    }
    select_color(color) {
    if (color=="b1") {
        document.body.style.background="blue";
    }
    if (color=="b2") {
        document.body.style.background="rgb(252, 248, 2)";
    }
    if (color=="b3") {
        document.body.style.background="rgb(5, 231, 73)";
    }
    if (color=="b4") {
        document.body.style.background="rgb(231, 5, 201)";
    }
    localStorage.setItem("dd",color)
    }
}
onload =new Color();

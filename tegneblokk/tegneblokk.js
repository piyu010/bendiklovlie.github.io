function setup() {

    let xpos = 0;
    let ypos = 0;


    let firkantDiv = document.getElementById("firkant");
    firkantDiv.addEventListener("click", lagFirkant);

    let trekantDiv = document.getElementById("trekant");
    trekantDiv.addEventListener("click", lagTrekant);

    let sirkelDiv = document.getElementById("sirkel");
    sirkelDiv.addEventListener("click", lagSirkel);

    let restartDiv = document.getElementById("restart");
    restartDiv.addEventListener("click", restartFunksjon);

    let rodDiv = document.getElementById("rod");
    let gronnDiv = document.getElementById("gronn");
    let gulDiv = document.getElementById("gul");
    let blaDiv = document.getElementById("bla");

    let canvas = document.getElementById("tegning");
    let ctx = canvas.getContext('2d');

    let type = "";

    canvas.addEventListener("click", posisjon);

    function posisjon(e) {
        xpos = e.clientX - 140;
        ypos = e.clientY - 10;
        console.log(xpos + " " + ypos);
        switch (type) {
            case "firkant":
                tegnFirkant();
                break;
        }

    }
    function lagFirkant(event) {
        type = "firkant";
    }

    function tegnFirkant() {
        ctx.beginPath();
        ctx.moveTo(xpos, ypos);
        ctx.lineTo(xpos, ypos + 50);
        ctx.lineTo(xpos + 50, ypos + 50);
        ctx.lineTo(xpos + 50, ypos);
        ctx.lineTo(xpos, ypos);
        ctx.stroke();
    }
    function lagTrekant(event) {

    }
    function lagSirkel(event) {

    }








    function restartFunksjon(event) {
        location.reload();
    }



}
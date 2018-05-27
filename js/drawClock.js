window.onload =  function () {
    var c=document.getElementById("canvas"),
        ctx=c.getContext("2d"),
        PI2 = Math.PI * 2,
        centerX = window.innerWidth / 2,
        centerY = window.innerHeight / 2;

    c.width = window.innerWidth;
    c.height = window.innerHeight;
    
    var movingTickDegree = 0;

    function resetData(){
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        centerX = window.innerWidth / 2;
        centerY = window.innerHeight / 2;
    }

    function drawScale(){
        var innerR = 270;
        var outerR = 320;
    
        c.width = window.innerWidth;
        c.height = window.innerHeight;

        ctx.strokeStyle="#fff";
        ctx.lineWidth=2;

        for(let di = 0; di <= 360 ; di += 30){
            ctx.beginPath();
            ctx.moveTo(centerX + Math.sin((di / 360) * PI2) * innerR, centerY + Math.cos((di / 360) * PI2) * innerR);
            ctx.lineTo(centerX + Math.sin((di / 360) * PI2) * outerR, centerY + Math.cos((di / 360) * PI2) * outerR);
            ctx.stroke();
            ctx.closePath();
        }

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.sin((300 / 360) * PI2) * 180, centerY + Math.cos((300 / 360) * PI2) * 180);
        ctx.stroke();
    }

    function drawMovingTick(){
        ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
        drawScale();
        var outerR = 320;
        ctx.lineWidth=2;

        ctx.strokeStyle="#fff";
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.sin((movingTickDegree / 360) * PI2) * 210, centerY + Math.cos((movingTickDegree / 360) * PI2) * 210);
        ctx.stroke();
        movingTickDegree = (movingTickDegree - 30) % 360; 
    }

    setInterval(drawMovingTick, 1000);

    window.addEventListener('resize', resetData);
};

let originX,originY,newpointX,newpointY
const drawing = document.getElementById("canvas");
const ctx = drawing.getContext("2d");
drawing.addEventListener("mousedown",start)

// for leftmouse key press starts drawing
function start(s)
{
    // origin of drawing point
    originX=s.clientX   
    originY=s.clientY
    let coor = "Coordinates origin: (" + originX + "," + originY + ")"
    console.log(coor)
    drawing.addEventListener("mousemove",freedraw)       // To keep drawing after the mouse press
    drawing.addEventListener("mouseup",exit)          // To exit the drawing once the mouse left key is released  

}
// Function To keep drawing after the mouse press
function freedraw(d)   
{
    newpointX=d.clientX    
    newpointY=d.clientY
    let coor = "Coordinates  in fredraw: (" + newpointX + "," + newpointY + ")"
    console.log(coor)
    ctx.beginPath()
    ctx.moveTo(originX,originY)
    ctx.quadraticCurveTo(originX,originY,newpointX,newpointY)
    ctx.stroke()
    originX=newpointX       // keep updating the coordinates for mousemove
    originY=newpointY      // keep updating the coordinates for mousemove

}

// Function To stop drawing after the mouse release
function exit(e)
{
    console.log("exiting")
    drawing.removeEventListener("mousemove",freedraw)
}

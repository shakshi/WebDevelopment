
function dragStart(e){
    e.dataTransfer.setData('text',e.target.id);
}

function allowDrop(e){
    e.preventDefault();
    //by default elements cannot be dragged into other elements ....so the element will return to its original position as soon as the drag is over 
    //to prevent this when the drag over is on the drop target(not in other elemnts only in the drop target) so we prevent the default action when the drag is over inside the drop target
    //function is add event listener to the drop target
}

function drop(e){
    
    //by default when links are dropped then then open..to prevent this
    e.preventDefault();
    //now we want to add the element we have dragged to this drop target
    //for this we have the id of the dragged element in the dataTransfer object which we stored on dragstart(generalisation when there are multiple objects to be dragged...whenever drag starts store the id of that object
    var idOfDragged=e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(idOfDragged));
}

var draggedElement=document.getElementById('dragged-element');
var dropTarget=document.getElementById('drop-target');

draggedElement.addEventListener('dragstart',dragStart);
dropTarget.addEventListener('dragover',allowDrop);
dropTarget.addEventListener('drop',drop);

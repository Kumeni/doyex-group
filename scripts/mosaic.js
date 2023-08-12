function mosaic(boxes, separation=30){
    let availableColumns = [];

    //This block creates the number of columns
    let i, j, end=false, k;
    for (j = 0; j < boxes.length; j++){
        if ( availableColumns.length ==0 ){
            availableColumns.push({
                left:boxes[j].getBoundingClientRect().x
            })
            continue;
        }

        //The code to know the column already exists
        for (i=0; i<availableColumns.length; i++){
            if(availableColumns[i].left == boxes[j].getBoundingClientRect().x){
                end=true;
                break;
            }
        }
        
        if(end)
            break;
        availableColumns.push({
            left:boxes[j].getBoundingClientRect().x
        })
    }
    //console.log(availableColumns);

    //this block loops through all the boxes in the viewport
    let m;
    for (m=0; m < boxes.length; m++){
        //This block targets the box above current box
        let l=m-availableColumns.length, element=boxes[m], top=0;
        while(l >= 0){
            for ( k = 0; k < availableColumns.length; k++){
                if(element.getBoundingClientRect().x == availableColumns[k].left){
                    top = top + boxes[l].getBoundingClientRect().height + separation;
                    break;
                }
            }
            l = l -availableColumns.length;
        }

        element.style.top = (top - element.offsetTop+document.getElementsByClassName("mosaic")[0].offsetTop) + "px";
    }
}

let boxes = document.getElementsByClassName("box");
setTimeout(()=>{
    mosaic(document.getElementsByClassName("box"), 20);
    document.getElementsByClassName("mosaic")[0].height = boxes[boxes.length-1].offsetTop+boxes[boxes.length-1].getBoundingClientRect().height+"px";
}, 2000)
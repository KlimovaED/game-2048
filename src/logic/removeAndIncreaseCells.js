import {cellStates} from "./cellManager";


 function removeAndIncreaseCells(cells){
   let currentScore =0;
   let updatedCell = cells.filter(cell=>cell.state !== cellStates.DYING).map(cell=>{
    if(cell.state === cellStates.INCREASE){
      cell.value *= 2;
      currentScore+=cell.value;
    }
    cell.state = cellStates.IDLE;
    return cell;
  })
   return{updatedCell,currentScore};
}



const delays=ms=> new Promise(resolve=>setTimeout(resolve,ms))

export {removeAndIncreaseCells,delays}

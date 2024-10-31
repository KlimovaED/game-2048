
function checkAndSetBonus(cells,bonus,score) {
  if(cells.length === 16){
    bonus = score;
  };
return bonus;
}

export { checkAndSetBonus };

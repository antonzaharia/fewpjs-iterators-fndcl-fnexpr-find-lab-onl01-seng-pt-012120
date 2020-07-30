function superbowlWin(o){
  let toReturn = (o.find( ({ result }) => result === "W"));
  return toReturn["year"];
}

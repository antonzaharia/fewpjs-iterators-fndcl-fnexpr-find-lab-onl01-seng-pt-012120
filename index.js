function superbowlWin(o){
  let toReturn = (o.find( ({ result }) => result === "W"));
  if(toReturn["year"]){
  return toReturn["year"];
}
}

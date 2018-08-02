/* Card counting Programme Black jack.
Count Change	      Cards
  +1                	2, 3, 4, 5, 6
   0	                7, 8, 9
  -1                	10, 'J', 'Q', 'K', 'A'

  Having more high cards remaining in the deck favors the player.
   Each card is assigned a value according to the table above.
   When the count is positive, the player should bet high.
    When the count is zero or negative, the player should bet low.
  */

var count = 0;

function cc(card) {

  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0){
    return count + " Bet";
  }else{
  return count + " Hold";

}
}
// Add/remove calls to test your function.
cc(2); cc(3); cc(7); cc('K'); cc('A');

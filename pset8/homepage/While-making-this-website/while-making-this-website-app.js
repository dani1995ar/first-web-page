var feltLike = ["There's an artist in me...But he's on vacations...", "I have two chicken legs for hands...", "I would never finish it...", "I hadn't learn a thing for the past 7 months..."];
var count = 3;
setInterval(() => {
  count--;
  document.getElementById('felt-like-text').innerHTML = feltLike[count];
  if(count == 0){
    count = 3;
  }
}, 4999);
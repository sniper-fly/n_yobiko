let myBirthTime = new Date("1999-4-4 12:30");

function updateParagraph() {
  let now = new Date();
  let seconds = (now.getTime() - myBirthTime.getTime()) / 1000 ;

  document.getElementById("birth-time").innerText = "生まれてから" + seconds + '秒';
}

setInterval(updateParagraph, 50);

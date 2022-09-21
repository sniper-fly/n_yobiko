let startTime = null
if (confirm("are you ready?")) {
  console.log("started.");
  startTime = Date.now();

  document.body.onkeydown = stop
}

function stop() {
  // 押されたら時間を記録する
  const endTime = Date.now();
  const totalTime = getTimeDiff({endTime, startTime})
  printResult(totalTime);

}

function getTimeDiff({ endTime, startTime }) {
  return (endTime - startTime) / 1000;
}

function printResult(totalTime) {
  console.log(`your time is ${totalTime}.`);
  if (9.5 < totalTime && totalTime < 10.5) {
    console.log("excellent!!");
  } else {
    console.log("bad.");
  }
}

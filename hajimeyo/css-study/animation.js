function rotateHeader() {
  const header = document.getElementById('header')
  let degree = 0
  return function rotateHeaderCurry() {
    degree += 5
    degree %= 360
    if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
      header.setAttribute('class', 'face');
    } else {
      header.setAttribute('class', 'back');
    }
    header.style.transform = 'rotateX(' + degree + 'deg)';
  }
}

setInterval(rotateHeader(), 20);

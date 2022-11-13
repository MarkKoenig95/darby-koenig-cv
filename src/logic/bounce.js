export default function bounce(
  startX,
  startY,
  targetX,
  targetY,
  setXState,
  setYState
) {
  let xDifference = targetX - startX;
  let yDiffference = targetY - startY;
  let xOverflowDist = xDifference / 2;
  let yOverflowDist = yDiffference / 2;
  let time = 0;
  let momentum = 22;

  let xInc = xDifference / 10;
  let yInc = yDiffference / 10;

  for (let i = 1; i < 11; i++) {
    setTimeout(() => {
      setXState((prev) => prev + xInc);
      setYState((prev) => prev + yInc);
    }, time);
    time += 5;
  }

  for (momentum; momentum > 4; momentum = momentum / 2) {
    let xInc = xOverflowDist / momentum;
    let yInc = yOverflowDist / momentum;
    for (let i = momentum; i > 0; i--) {
      setTimeout(() => {
        setXState((prev) => prev + xInc);
        setYState((prev) => prev + yInc);
      }, time);
      time += 26 - momentum;
    }

    for (let i = momentum; i > 0; i--) {
      setTimeout(() => {
        setXState((prev) => prev - xInc);
        setYState((prev) => prev - yInc);
      }, time);
      time += 26 - momentum;
    }

    xOverflowDist = xOverflowDist / 3;
    yOverflowDist = yOverflowDist / 3;
  }

  setTimeout(() => {
    setXState(targetX);
    setYState(targetY);
  }, time);
}

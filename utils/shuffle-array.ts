export function shuffleArray<T>(arr: Array<T>): Array<T> {
  const copiedArr = [...arr];
  const shuffledArr: Array<T> = [];

  for (let i = 0; i < arr.length; i++) {
    const randomIndex = getRandomInt(0, copiedArr.length);
    const [removedElement] = copiedArr.splice(randomIndex, 1);
    shuffledArr.push(removedElement);
  }

  return shuffledArr;
}

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export function formatTimeElapsed(secondes: number) {
  let minutes = Math.floor(secondes / 60);
  secondes -= minutes * 60;

  let secString = `${secondes < 10 ? "0" + secondes : secondes}`;
  let minString = `${minutes < 10 ? "0" + minutes : minutes}`;

  return `${minString}:${secString}`;
}

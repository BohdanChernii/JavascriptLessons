//генеруєм одиниці
const generateNumbers = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};
// генеруєм сидіння
const generateSeats = () =>
  generateNumbers(1, 10)
    .map(
      seatNumber =>
        `<div class="sector__seat" 
data-seat-number="${seatNumber}">
</div>`
    )
    .join(" ");

//генеруєм лінії
const generateLines = () => {
  const seatsString = generateSeats()
  return generateNumbers(1, 10)
  .map(
    (lineNumber) =>
      `<div class="sector__line" 
data-seat-line="${lineNumber}">
${seatsString}</div>`
  ).join("");
}
//генеруєм арену
const arena = document.querySelector('.arena')
const renderArena = () => {
//присвоюєм резултат виконанн функції
const lines = generateLines();
//створюємо сектора
const sectors = generateNumbers(1,3)
.map(sector => `<div class="sector" data-sector-number="${sector}">${lines}</div>`) 
.join('');
arena.innerHTML = sectors;
}

//вибираєм крісло на матч
const onSeatSect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if(!isSeat) {
    return;
  }

  const seatNumber =  event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.seatLine;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;
  const selectedElement = document.querySelector('.board__selected-seat');
  selectedElement.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`
}
arena.addEventListener('click', onSeatSect)
renderArena()
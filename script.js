const factorInput = document.querySelector("#factor");
const calculationStatus = document.querySelector("#calculation-status");
const multipleItems = document.querySelectorAll("[data-multiple]");

function updateMultiples() {
  const factor = factorInput.valueAsNumber;
  const min = Number(factorInput.min);
  const max = Number(factorInput.max);

  if (!Number.isInteger(factor) || factor < min || factor > max) {
    calculationStatus.textContent = `Zadej celé číslo od ${min} do ${max}.`;
    return;
  }

  multipleItems.forEach((item, index) => {
    const multiplier = index + 1;
    item.textContent = `${factor} × ${multiplier} = ${factor * multiplier}`;
  });
  calculationStatus.textContent = `Výsledky pro číslo ${factor}.`;
}

factorInput.addEventListener("input", updateMultiples);
updateMultiples();

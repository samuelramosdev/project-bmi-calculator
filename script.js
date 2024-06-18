const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');


calculateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  resultDiv.innerHTML = '';

  const nameInput = document.getElementById('name').value;
  const heightInput = parseFloat(document.getElementById('height').value);
  const weightInput = parseFloat(document.getElementById('weight').value);

  const bmi = weightInput / (heightInput * heightInput).toFixed(1);

  const bmiCategories = [
    { min: 0, max: 18.4, category: 'Abaixo do peso' },
    { min: 18.5, max: 24.9, category: 'Com peso ideal. Parabéns!' },
    { min: 25, max: 29.9, category: 'Levemente acima do peso' },
    { min: 30, max: 34.5, category: 'Com obesidade grau I' },
    { min: 35, max: 39.5, category: 'Com obesidade grau II' },
    { min: 40, max: Infinity, category: 'Com obesidade grau III' }
  ];

  return;
});
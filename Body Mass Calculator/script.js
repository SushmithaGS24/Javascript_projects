function storeValues() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const heightinmetres = parseFloat(height)/100;
    const bmi = parseFloat(weight)/(heightinmetres * heightinmetres);

    const result = `BMI IS ${bmi}`;
    const element = document.createElement('p');
    element.textContent = result;

    document.body.appendChild(element);

   
}

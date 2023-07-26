function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function convertToGrams(data, unit) {
  const unitToLower = unit.toLowerCase();

  switch (unitToLower) {
    case "mg":
      return data;
    case "µg":
      return data / 1000;
    case "g":
      return data * 1000;
    case "kg":
      return data * 1000000;
    default:
      return data;
  }
}

export function createnutrientData(data) {
  const { digest } = data;
  let outputdata = [];
  let backgroundColor = [];
  for (let i = 0; i < digest.length; i++) {
    outputdata.push({
      name: digest[i].label,
      // value: parseFloat(digest[i].total.toFixed(2)),
      value: parseFloat(
        convertToGrams(digest[i].total, digest[i].unit).toFixed(2)
      ),
    });
    console.log(
      parseFloat(convertToGrams(digest[i].total, digest[i].unit).toFixed(2)),
      digest[i].total,
      digest[i].unit,
      digest[i].label
    );
    backgroundColor.push(getRandomColor());
  }
  return { outputdata, backgroundColor };
}

export function createIngredientData(data) {
  const { ingredients } = data;
  let outputdata = [];
  let backgroundColor = [];
  for (let i = 0; i < ingredients.length; i++) {
    outputdata.push({
      name: ingredients[i].food,
      value: parseFloat(ingredients[i].weight.toFixed(2)),
    });
    backgroundColor.push(getRandomColor());
  }
  return { outputdata, backgroundColor };
}

export const MacronutrientPieChartdata = (data) => {
  const { totalNutrients } = data;
  let maconutrientdata = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  };
  for (const key in totalNutrients) {
    maconutrientdata.labels.push(totalNutrients[key].label);
    maconutrientdata.datasets.data.push(totalNutrients[key].quantity);
    maconutrientdata.datasets.backgroundColor.push(getRandomColor());
  }
  return maconutrientdata;
};

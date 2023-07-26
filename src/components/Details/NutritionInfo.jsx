import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { getColorForNutrient } from "../../utils/color";
import "./NutritionInfo.css";

const NutritionInfo = ({ totalNutrients }) => {
  const nutrients = Object.values(totalNutrients);
  const nutrientLabels = Object.keys(totalNutrients);

  return (
    <div className="nutrition-info">
      <h2>Nutrition Facts</h2>
      <div className="nutritioncharts">
        <div className="nutritionpiechart">
          <PieChart
            data={nutrients.map((nutrient, index) => ({
              title: nutrient.label,
              value: nutrient.quantity,
              color: getColorForNutrient(nutrientLabels[index]) || "#ff6384",
            }))}
            lineWidth={30}
            // radius={30}
          />
        </div>

        <table>
          <tbody>
            {nutrients.map((nutrient) => (
              <tr key={nutrient.label}>
                <td>{nutrient.label}</td>
                <td>
                  {nutrient.quantity.toFixed(2)} {nutrient.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NutritionInfo;

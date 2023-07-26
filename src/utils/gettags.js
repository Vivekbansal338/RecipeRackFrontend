export function getTags(data) {
  const tags = [...data.health_labels, ...data.meal_type, ...data.diet_labels];
  if (!tags.includes("Vegetarian") && tags.length > 0) {
    tags.push("Non Vegetarian");
  }
  return tags;
}

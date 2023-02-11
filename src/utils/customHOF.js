export default Array.prototype.filterMethod = function (selected, products) {
  let data = products
    .filter((prod) => {
      if (selected.includes(prod.color)) {
        return prod;
      } else if (
        !(
          selected.includes('Red') ||
          selected.includes('Blue') ||
          selected.includes('Green') ||
          selected.includes('Black')
        )
      )
        return prod;
    })
    .filter((prod) => {
      if (selected.includes(prod.gender)) {
        console.log('gender', prod.gender);
        return prod;
      } else if (!(selected.includes('Men') || selected.includes('Women')))
        return prod;
    })
    .filter((prod) => {
      if (selected.includes('0-Rs250')) {
        return prod.price <= 250;
      } else if (selected.includes('Rs251-Rs450')) {
        return prod.price > 250 && prod.price <= 450;
      } else if (selected.includes('Greater Than Rs 450')) {
        return prod.price > 450;
      } else if (
        !(
          selected.includes('Rs251-Rs450') ||
          selected.includes('0-Rs250') ||
          selected.includes('Greater Than Rs 450')
        )
      )
        return prod;
    })
    .filter((prod) => {
      if (selected.includes(prod.type)) {
        return prod;
      } else if (
        !(
          selected.includes('Polo') ||
          selected.includes('Hoodie') ||
          selected.includes('Basic')
        )
      )
        return prod;
    });
  return data;
};

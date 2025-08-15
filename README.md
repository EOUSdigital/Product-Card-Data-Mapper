# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 10.02 Array.map Method - Product Card Data Mapper

## 📖 Scenario
We are building a product catalog page for an online store. The backend returns raw product data, but our UI components require a cleaned-up shape for rendering product cards.

---

## 🗂 Example Raw Data
```javascript
const products = [
  { id: 1, name: 'Laptop Pro 15', priceUSD: 1499.99, inStock: true },
  { id: 2, name: 'Wireless Mouse', priceUSD: 24.5, inStock: false },
  { id: 3, name: 'Mechanical Keyboard', priceUSD: 79, inStock: true }
];
```

---

## 🎯 Objective
Create a function `mapToCardData(products, rate)` that:
1. Uses `map()` to return a **new array** of objects shaped for the UI as:
   ```javascript
   {
     id: number,
     title: string,      // from name
     priceLabel: string, // formatted "€X.YZ" (converted from USD using `rate`)
     badge: string       // "In Stock" or "Out of Stock"
   }
   ```
2. Converts `priceUSD` to **EUR** using the `rate` argument.
3. Formats the price with **two decimals** and a **€** prefix.
4. Leaves the original array **unchanged**.

---

## 🧮 Solution
```javascript
function mapToCardData(products, rate) {
    return products.map(product => {
        // Title from product.name
        const title = product.name;

        // Convert product.priceUSD * rate
        const eurValue = product.priceUSD * rate;

        // Format as "€X.YZ"
        const priceLabel = `€${eurValue.toFixed(2)}`;

        // Badge: "In Stock" or "Out of Stock"
        const badge = product.inStock ? "In Stock" : "Out of Stock";

        // Return the new object
        return {
            id: product.id,
            title,
            priceLabel,
            badge
        };
    });
}

// Example usage
const products = [
    { id: 1, name: 'Laptop Pro 15', priceUSD: 1499.99, inStock: true },
    { id: 2, name: 'Wireless Mouse', priceUSD: 24.5, inStock: false },
    { id: 3, name: 'Mechanical Keyboard', priceUSD: 79, inStock: true }
];

const rate = 0.92;
console.log(mapToCardData(products, rate));
```

---

## 📝 Expected Output
```javascript
[
  { id: 1, title: 'Laptop Pro 15', priceLabel: '€1379.99', badge: 'In Stock' },
  { id: 2, title: 'Wireless Mouse', priceLabel: '€22.54', badge: 'Out of Stock' },
  { id: 3, title: 'Mechanical Keyboard', priceLabel: '€72.68', badge: 'In Stock' }
]
```

---

## 💡 Key Points Learned
- `map()` is ideal for transforming arrays without mutating the original data.
- You can compute and format values inside the `map()` callback.
- Combining conditional logic (`?:`) with transformations is useful for building clean data shapes.

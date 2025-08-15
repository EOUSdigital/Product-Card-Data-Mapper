//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 10.02 Array.map Method - Product Card Data Mapper


//TODO 🧩 Step 6: Project Integration

//* 🖼️ Scenario
//  You are building a catalog page for an online store. The backend returns raw product data, but your UI components expect a clean, mapped shape for rendering product cards.

// const products = [
//     { id: 1, name: 'Laptop Pro 15', priceUSD: 1499.99, inStock: true },
//     { id: 2, name: 'Wireless Mouse', priceUSD: 24.5, inStock: false },
//     { id: 3, name: 'Mechanical Keyboard', priceUSD: 79, inStock: true }
// ];

//* 🎯 Your Objective

//  Create a function mapToCardData(products, rate) that:

//? 1. Uses map() to return a new array of objects shaped for the UI as:

// {
//     id: number,
//     title: string,             // from name
//     priceLabel: string,        // "€1,234.56" (converted from USD using "rate")
//     badge: string              // "In Stock" or "Out of Stock"
// };

//? 2. Converts priceUSD → EUR using the rate passed in (e.g., 0.92), and formats it with two decimals and a € prefix.

//? 3. Leaves the original products array unchanged.

//* 🧱 Starter Template


// function mapToCardData(products, rate) {
//     return products.map(product => {
//         // TODO:
//         // - title from product.name
//         // - convert product.priceUSD * rate
//         // - format as "€X.YZ"
//         // - badge: product.inStock ? "In Stock" : "Out of Stock"
//         // - return the new object with the required shape
//     });
// }

// // Example usage:
// const rate = 0.92;
// const cards = mapToCardData(products, rate);
// console.log(cards);


//* ✅ Expected Output (shape)

[
    {
        id: 1,
        title: "Laptop Pro 15",
        priceLabel: "€1,379.99",
        badge: "In Stock"
    },
    {
        id: 2,
        title: "Wireless Mouse",
        priceLabel: "€22.54",
        badge: "Out of Stock"
    },
    {
        id: 3,
        title: "Mechanical Keyboard",
        priceLabel: "€72.68",
        badge: "In Stock"
    }
];

//  (Exact numbers will depend on your rate and rounding.)

//* ✨ Hints
//  • Use toFixed(2) for two decimals.
//  • String template: `€${value.toFixed(2)}`.
//  • Remember: map() must return the new object from the callback.

//* 🌶️ Stretch Goals (optional)
//  • Add a slug field (e.g., "laptop-pro-15") by lowercasing and replacing spaces with dashes.
//  • If inStock === false, append " (Notify Me)" to the title.


//! Solution

function mapToCardData(products, rate) {
    return products.map(product => {
        // - title from product.name
        const title = product.name;

        // - convert product.priceUSD * rate
        const eurValue = product.priceUSD * rate;
        
        // - format as "€X.YZ"
        const priceLabel = `€${eurValue.toFixed(2)}`;

        // - badge: product.inStock ? "In Stock" : "Out of Stock"
        const badge = product.inStock ? "In Stock" : "Out of Stock";

        // - return the new object with the required shape
        return {
            id: product.id,
            title,
            priceLabel,
            badge
        };
    });
}

const products = [
    { id: 1, name: 'Laptop Pro 15', priceUSD: 1499.99, inStock: true },
    { id: 2, name: 'Wireless Mouse', priceUSD: 24.5, inStock: false },
    { id: 3, name: 'Mechanical Keyboard', priceUSD: 79, inStock: true }
];

const rate = 0.92;
console.log(mapToCardData(products, rate));


//  ‼️ Feedback:

//* Your final solution for Step 6: Project Integration using map() looks correct and complete.

//? Here’s why it works perfectly:
//  • One map call: You iterate over products only once.
//  • Per-item transformation: Inside the callback, you compute all the fields (title, priceLabel, badge) based on the current product.
//  • No mutation: You return a new object for each product, leaving the original array unchanged.
//  • Formatting: toFixed(2) ensures prices always have two decimal places with the € prefix.
//  • Conditional badge: The inStock property is used to choose the label.
//  Example output with rate = 0.92:

[
    { id: 1, title: 'Laptop Pro 15', priceLabel: '€1379.99', badge: 'In Stock' },
    { id: 2, title: 'Wireless Mouse', priceLabel: '€22.54', badge: 'Out of Stock' },
    { id: 3, title: 'Mechanical Keyboard', priceLabel: '€72.68', badge: 'In Stock' }
]

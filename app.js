import readline from "readline";
import fs from "fs";
import { error } from "console";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Enter Product Name: ", (name) => {
  readLine.question("Enter Product price: ", (price) => {
    readLine.question("Enter Product ID: ", (id) => {
      const product = {
        name: name,
        price: parseFloat(price),
        id: parseInt(id),
      };

      const products = [product];

      // to read created products

      try {
        const existingData = fs.readFileSync("products.json", "utf-8");
        const existingProducts = JSON.parse(existingData);

        // Check if a product with the same ID exists
        const existingProductIndex = products.findIndex(
          (p) => p.id === product.id
        );

        if (existingProductIndex !== -1) {
          products[existingProductIndex].name = product.name;
          products[existingProductIndex].price = product.price;
        } else {
          product.push(...existingProducts);
        }
      } catch (error) {}

      // Save the updated products to file
      fs.writeFileSync("products.json", JSON.stringify(products, null, 2));

      console.log("Product saved successfully!");
      readLine.close();
    });
  });
});

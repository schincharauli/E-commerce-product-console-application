import readline from "readline";
import fs from "fs";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


readLine.question('Enter Product Name: ', (name)=> {
    readLine.question('Enter Product price: ', (price) => {
        readLine.question('Enter Product ID: ', (id) => {
            const product = {
                name: name,
                price: parseFloat(price),
                id: parseInt(id)
            };

            const products = [product];
    })
})
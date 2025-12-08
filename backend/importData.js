import mongoose from "mongoose";
import fs from "fs";
import csv from "csv-parser";
import Sale from "./src/models/Sales.js";
import dotenv from "dotenv";

dotenv.config();

const FILE_PATH = "./dataset.csv";
const BATCH_SIZE = 1000;

async function importCSV() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    let batch = [];
    let counter = 0;

    const stream = fs
      .createReadStream(FILE_PATH)
      .pipe(csv())
      .on("data", (row) => {
        batch.push({
          transactionId: row["Transaction ID"],
          date: row["Date"],
          customerId: row["Customer ID"],
          customerName: row["Customer Name"],
          phoneNumber: row["Phone Number"],
          gender: row["Gender"],
          age: Number(row["Age"]),
          customerRegion: row["Customer Region"],
          customerType: row["Customer Type"],
          productId: row["Product ID"],
          productName: row["Product Name"],
          brand: row["Brand"],
          productCategory: row["Product Category"],
          tags: row["Tags"],
          quantity: Number(row["Quantity"]),
          pricePerUnit: Number(row["Price per Unit"]),
          discountPercentage: Number(row["Discount Percentage"]),
          totalAmount: Number(row["Total Amount"]),
          finalAmount: Number(row["Final Amount"]),
          paymentMethod: row["Payment Method"],
          orderStatus: row["Order Status"],
          deliveryType: row["Delivery Type"],
          storeId: row["Store ID"],
          storeLocation: row["Store Location"],
          salespersonId: row["Salesperson ID"],
          employeeName: row["Employee Name"],
        });

        if (batch.length === BATCH_SIZE) {
          stream.pause();

          Sale.insertMany(batch)
            .then(() => {
              counter += batch.length;
              console.log(`Inserted: ${counter}`);
              batch = [];
              stream.resume();
            })
            .catch((err) => console.error("Batch insert error:", err));
        }
      })
      .on("end", async () => {
        if (batch.length > 0) {
          await Sale.insertMany(batch);
          counter += batch.length;
        }

        console.log(`Finished importing. Total: ${counter}`);
        mongoose.disconnect();
      });
  } catch (err) {
    console.error("Fatal Error:", err.message);
  }
}

importCSV();


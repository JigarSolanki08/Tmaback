const app = require("./app");
const mongoose = require("mongoose");
require ('dotenv').config();

const port = process.env.PORT;
const API = process.env.API;
 

mongoose.set('strictQuery', false);


async function main() {
    await mongoose.connect(API);
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main(); 
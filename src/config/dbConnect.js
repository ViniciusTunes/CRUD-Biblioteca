import mongoose from "mongoose";

mongoose.connect("mongodb+srv://tuneskk:123@alura.bhanzwl.mongodb.net/livros");

let db = mongoose.connection;

export default db;

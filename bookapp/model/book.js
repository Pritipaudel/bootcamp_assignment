const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Blogpost = new Schema({
  bookname:String,  
});


//create the book model//
const Book = mongoose.model("book",Blogpost);
module.exports = Book;
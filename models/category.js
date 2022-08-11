//MONGOOSE TRANSACTİONS
const mongoose = require('mongoose');
const { STRING } = require('sequelize');
const categoriesSchema = mongoose.Schema({
  name:{
    type:String,
    required: true,
    trim    : true,
    lowercase : true
  },
  description:{
    type : String,
    trim : true,
    lowercase : true
  }
})
module.exports = mongoose.model('Category',categoriesSchema)



























//STANDART MONGODB TRANSACTİONS
/*const getDb = require('../utility/database').getdb;
const mongodb = require('mongodb');

class Category {
    constructor(name,description,id){
        this.name=name;
        this.description=description;
        this._id=id ? new mongodb.ObjectId(id):null;
    }
    save(){
        let db = getDb();
      if(this._id){
        db = db.collection('categories').updateOne({_id:this._id},{$set:this});
      }else {
        db = db.collection('categories').insertOne(this);
      }
      return db
        .then(result=>{console.log(result);})
        .catch(err=>{console.log(err);})  
    }
    static findAll(){
        const db = getDb();
        return db.collection('categories')
        .find({})
        .toArray()
        .then(categories=>{
            return categories;
        })
        .catch(err=>{console.log(err);})
    }
    static findById(categoryid){
        const db = getDb();
        return db.collection('categories')
        .findOne({_id:new mongodb.ObjectId(categoryid)})
        .then(category=>{
            return category;
        })
        .catch(err=>{console.log(err);})
    }
    static deleteById(categoryid){
        const db = getDb();
        return db.collection('categories')
        .deleteOne({_id:new mongodb.ObjectId(categoryid)})
        .then(category=>{
          return category;
        })
        .catch(err=>{console.log(err);})
    }
}
module.exports=Category;*/

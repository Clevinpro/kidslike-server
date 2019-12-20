const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')
const { Schema } = mongoose;
const timestamp = require('../middleware/timestamp');

const userSchema = new Schema(
  {
    email: { type: String, unique : true, required : true, dropDups: true },
    password: { type: String },
    photo: { type: String },
    googleId: { type: String },
    name: { type: String },
    points: { type: Number, default: 0 },
    tasks: {
      type: Schema.Types.ObjectId,
      ref: 'Tasks'
    },
  },
  {
    timestamps: true
  }
);

userSchema.plugin(timestamp);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = User;

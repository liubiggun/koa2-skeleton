

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.statics.verify = function (username, password) {
  return this.findOne({username, password}).exec()
}

const User = mongoose.model('User', userSchema)

export default User
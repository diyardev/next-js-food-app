import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    provider: {
      type: String,
      required: false,
      default: 'local',
    },
    role: {
      type: String,
      required: false,
      default: 'user',
    },
  },
  { timestamps: true }
);

export default  mongoose.models.User || mongoose.model('User', UserSchema)

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userId: { type: String, required: [true, "userId is required"] },
    uCredentials: {
      uEmail: {
        type: String,
        required: [true, "uMail is required"],
        unique: true,
      },
      uPass: { type: String, required: [true, "uPass is required"] },
    },
    uProfile: {
      uName: { type: String, required: [true, "uName is required"] },
      uDOB: { type: Date, required: [true, "uDOB is required"] },
      uPhone: { type: Number, required: [true, "uPhone is required"] },
      uIsSeller: { type: Boolean, default: false },
      uDateJoined: { type: Date, default: new Date().toISOString() },
      uLastLogin: { type: Date, default: new Date().toISOString() },
    },
    uAddress: { type: String },
    message: { type: String },
    data: { type: Array },
  },
  { collection: "Users", timestamps: true },
);

module.exports = mongoose.model("user", userSchema);

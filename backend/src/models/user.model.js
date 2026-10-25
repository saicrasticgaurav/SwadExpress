
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters"],
      maxlength: [80, "Name cannot exceed 80 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    phone: {
      type: String,
      trim: true,
      default: null,
      match: [/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must contain at least 8 characters"],
      select: false,
    },

    role: {
      type: String,
      enum: ["customer", "admin", "deliveryPartner"],
      default: "customer",
    },

    // isEmailVerified: {
    //   type: Boolean,
    //   default: false,
    // },

    isActive: {
      type: Boolean,
      default: true,
    },

    // profileImage: {
    //   type: String,
    //   default: "",
    // },

    // addresses: [
    //   {
    //     label: {
    //       type: String,
    //       enum: ["Home", "Work", "Other"],
    //       default: "Home",
    //     },
    //     fullAddress: {
    //       type: String,
    //       required: true,
    //       trim: true,
    //     },
    //     city: {
    //       type: String,
    //       required: true,
    //       trim: true,
    //     },
    //     state: {
    //       type: String,
    //       required: true,
    //       trim: true,
    //     },
    //     pincode: {
    //       type: String,
    //       required: true,
    //       match: [/^\d{6}$/, "Enter a valid 6-digit PIN code"],
    //     },
    //     landmark: {
    //       type: String,
    //       trim: true,
    //       default: "",
    //     },
    //     isDefault: {
    //       type: Boolean,
    //       default: false,
    //     },
    //   },
    // ],

    // lastLoginAt: {
    //   type: Date,
    //   default: null,
    // }, 
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Normalize email before validation and saving.
userSchema.pre("validate", function () {
  if (this.email) {
    this.email = this.email.toLowerCase().trim();
  }
});

// Create the User model.
const User = mongoose.model("User", userSchema);

export default User;

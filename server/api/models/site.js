const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    name: {
      type: String,
      required: false,
    },
    logo: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    deleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Site', siteSchema);

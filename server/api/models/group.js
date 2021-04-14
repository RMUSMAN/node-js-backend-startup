const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    site: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Site',
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    ],
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

export default mongoose.model('Group', groupSchema);

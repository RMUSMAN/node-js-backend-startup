const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    title: {
      type: String,
      required: false,
    },
    priority: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    site: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Site',
    },
    dueDate: {
      type: Date,
      required: false,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Comment',
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

export default mongoose.model('Task', taskSchema);

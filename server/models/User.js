// server/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
export default User;

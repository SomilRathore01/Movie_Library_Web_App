import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    playlist: [{
        type: mongoose.Types.ObjectId,
        ref: "Playlists"
    }]
});

export default mongoose.model("User", userSchema);
//Users
import mongoose from "mongoose";

// const PlaySchema = new mongoose.Schema({
//     playlists: [
//         {
//             title: String,
//             required: true
//         }
//     ]
// });

const playlistSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    movietitle: [{
        type: String,         // mongoose.Types.ObjectId,
        required: true
    }],
    movieId: [{
        type: String,        // mongoose.Types.ObjectId,
        required: true
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
});

export default mongoose.model("Playlist", playlistSchema);
// export default mongoose.model("PlayList", PlaySchema);
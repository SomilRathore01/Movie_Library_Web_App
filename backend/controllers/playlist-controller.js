import Playlists from "../models/Playlists.js";
import Movie from "../models/Movie.js"

export const NewPlaylists = async(req, res, next) => {
    const {title, user} = req.body;
    let playlist;
    try{
        playlist = new Playlists({title, user});
        playlist = await playlist.save();
    }
    catch(err){
        return console.log(err);
    }

    if(!playlist){
        return res.status(500).json({message:"Unexpected Error Occured"})
    }
    return res.status(200).json({playlist});
};

export const newIteminPlaylist = async (req, res, next) => {
    const playid = req.params.id;
    const {movieId} = req.body;
    let updatedPlaylist;
    try {
        let movietitle = await Movie.findById(movieId);
        let playlist = await Playlists.findById(playid);
            playlist.movietitle.push(movietitle);
            playlist.movieId.push(movieId);

        updatedPlaylist = await playlist.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Unable to add new movie to playlist" });
    }

    return res.status(201).json({ playlist: updatedPlaylist });
};


export const deleteMoviefromPlaylist = async (req, res, next) => {
    const id = req.params.id;
    let delmovie;
    try{
        delmovie = await Playlists.findByIdAndDelete(id);
    }
    catch(err){
        return console.log(err);
    }
    if(!delmovie){
        return res.status(500).json({message:"Unexpected Error Occured"});
    }
    return res.status(200).json({message: "Deleted Successfully"});
}

export const playlistofUser = async (req, res, next) => {
    let playlists;
    let userId = req.params.id;
    try{
        playlists = await Playlists.find({user: userId})
        .populate("title");
    }catch(err){
        return console.log(err);
    }

    if(!playlists){
        return res.status(500).json({message:"Unexpected Error Occured"})
    }
    return res.status(200).json({playlists});
}

export const moviesinPlaylist = async (req, res, next) => {
    const playlistid = req.params.id;
    let playlist;
    try{
        playlist = await Playlists.findById(playlistid);
    }
    catch(err){
        return console.log(err);
    }
    if(!playlist){
        return res.status(500).json({message:"Unexpected Error Occured"})
    }
    return res.status(200).json({playlist});
};
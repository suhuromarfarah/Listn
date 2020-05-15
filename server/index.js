const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongodb = require('mongodb')

const app = express()

app.use(bodyParser.json());
app.use(cors());

const port = 3000;
const dbPass = '5DdVhAbFjVDeXVzB'

//Get Playlist
app.get('/', async(req,res)=>{
    const playlists = await loadPlaylist();
    res.send(await playlists.find({}).toArray());
})

//Add Playlist
app.post('/',async(req,res)=>{
    console.log(req.body)
    const playlists = await loadPlaylist();
    await playlists.insertOne({
        playlistName: req.body.playlistName,
        playlistDescription: req.body.playlistDescription,
        songs: req.body.songs,
      
        
    });

    res.status(201).send()
})
//Delete Playlist
app.delete('/', async(req,res)=>{
    const playlists = await loadPlaylist();
    await playlists.remove();
    res.status(200).send();
})
//Edit Playlist

async function loadPlaylist(){
    const client = await mongodb.MongoClient.connect(`mongodb+srv://brent:${dbPass}@vuedemo-nms3f.mongodb.net/test?retryWrites=true&w=majority`,{
        useNewUrlParser: true
    });
    return client.db('test').collection('playlists');
}

app.listen(port,()=>{
    console.log('on port 3000')
})
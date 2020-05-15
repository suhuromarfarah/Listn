import axios from "axios";


const url = "http://localhost:3000/";

class PlaylistService {
  
  // Get playlist from database
    static getPlaylist() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(playlist => ({
                        ...playlist
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

  //Create playlist on database
  static insertPlaylist(songs,playlistName,playlistDescription) {
    return axios.post(url, {
      playlistName,
      playlistDescription,
      songs
    });
  }

  static deletePlaylist() {
    return axios.delete();
    
  }
}

export default PlaylistService
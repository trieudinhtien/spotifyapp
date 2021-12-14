import React,{useState, useEffect } from 'react';
import './App.css';
import {getDataforArtist, getDataTopTrack} from './api/callapi'
import { SerachArtist } from './components/searchArtist/SerachArtist';
import { ArtistDetails } from './components/artistResult/ArtistDetails';
import { ArtistTopTrackDetails } from './components/artisttoptrack/ArtistTopTrackDetails';

function App() {
  const [dataArtist, setData] = useState<any[]>([])

  const [dataTopTracks, setDataTopTracks] = useState<any[]>([])

  const [inputvalue, setInputvalue] = useState<string>("")
  
  useEffect(() => {
    getDataforArtist(inputvalue).then((data) => setData(data.artists.items))
  }, [inputvalue])
  
  console.log("dataTopTracks:", dataTopTracks)

  const handlerClick = (id: string) => {
    getDataTopTrack(id).then((data) => setDataTopTracks(data.tracks))
  }
  return (
    <div className="App">
    <div className="container py-5">
      <div className="headerInput py-2">
        <SerachArtist setInputvalue={setInputvalue}/>
      </div>
      <div className='artistsearchresult'>
        <div className="container">
          <div className='row'>
            {
              dataArtist.map((item:any, index: number)=> (
                <ArtistDetails handlerClick={handlerClick} item={item} index={index}/>
              ))
            }
          </div>
          
        </div>
      </div>
      <div className='top-tracks'>
        {
          dataTopTracks.map((item: any, index:number) => (
            <ArtistTopTrackDetails item={item} index={index}/>
          ))
        }    
      </div>
    </div>
    </div>
  );
}

export default App;

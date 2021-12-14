import React , {FC} from 'react'

interface Props{
    item: any
    index: number
}

export const ArtistTopTrackDetails:FC<Props> = ({item, index}) => {
    return (
        <div key={index} className='d-flex my-5'>
              <img src={item.album.images[1].url} alt="album" />
              <div className='text-left p-5'>
                <h3>{item.name}</h3>
                <p>Type: {item.type}</p>
                <p>Release: {item.album.release_date}</p>
                {
                  item.preview_url ? <audio src={item.preview_url}  controls /> : <p>No Preview URL</p>
                }
              </div>
        </div>
    )
}

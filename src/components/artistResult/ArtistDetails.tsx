import React, {FC} from 'react'
import style from "./ArtistDetails.module.css"

interface Props{
    handlerClick(id: string): void
    item: any
    index: number
}

export const ArtistDetails:FC<Props> = ({handlerClick, index, item}) => {
    return (
        <div key={index} className={`col-xl-4 col-sm-6 ${style.itemArtist}` }onClick={() => handlerClick(item.id)} >
            
                <img className={style.imgArtist} src={item?.images[1]?.url ? item?.images[1]?.url : "https://cdn.nap.edu.vn/avatar/202192/trend-avatar-facebook-1-1630566628626.jpg"} alt="" />
                <h4>{item.name}</h4>
                <p>{item.popularity}</p>
                <p>{item.genres}</p>
        </div>
    )
}

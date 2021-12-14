import React,  {FC, ChangeEvent} from 'react'

interface Props {
    setInputvalue(value :string): void
}

export const SerachArtist: FC<Props> = ({setInputvalue}) => {
    const handlerChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setInputvalue(e.target.value)
      }
    return (
        <div className="form-group">
          <input onChange={(e)=> handlerChangeSearch(e)} type="text" className="form-control" id="usr" placeholder='Type to search for an artist'/>
        </div>
    )
}

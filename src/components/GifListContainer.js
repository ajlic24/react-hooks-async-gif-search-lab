import React, {useEffect, useState} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default function GifListContainer() {
    const [gifs, setGifs] = useState()
    const [search, setSearch] = useState('dolphin')
    const [onSearch, setOnSearch] = useState(false)

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=HAZLZBgWUvMhC0pI4NTEuEwlxqlfBu8q&q=${search}&limit=25&offset=0&rating=g&lang=en`)
            .then(r => r.json())
            .then(data => {setGifs(data)})
            setSearch('')
    }, [onSearch])

    function onSubmit() {
        setOnSearch(!onSearch)
    }

    return (
        <div>
            <GifList gifs={gifs} />
            <GifSearch onSubmit={onSubmit} search={search} onChange={setSearch} />
        </div>
    )
}


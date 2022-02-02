function GifList({gifs}) {
    const data = gifs ? gifs.data.map((gif, id) => id < 3 ? <li key={gif.id}><img src={gif.images.original.url}/></li> : null) : <p>Loading...</p>
    return (
    <ul>{data}</ul>
    )
}

export default GifList
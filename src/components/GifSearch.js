function GifSearch({onSubmit, search, onChange}) {

    function handleOnChange(e) {
        onChange(e.target.value)
    }

    return (
        <>
        <input type='text' value={search} onChange={handleOnChange}/>
        <button onClick={onSubmit} >search me</button>
        </>
    )
}

export default GifSearch
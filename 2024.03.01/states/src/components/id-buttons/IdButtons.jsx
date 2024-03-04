const IdButtons = () => {

    const handleClickID = (e, ID) => {
        console.log(ID)
    }
    return (
        <>
            <h2>ID perdavimas</h2>
            <button onClick={(e) => handleClickID(e, 1)}>pirmas</button>
            <button onClick={(e) => handleClickID(e, 2)}>antras</button>
            <button onClick={(e) => handleClickID(e, 3)}>trecias</button>
        </>
    )
}

export default IdButtons
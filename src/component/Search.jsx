function Search({setSearchKey}) {
    return (
        <input
            type="text"
            placeholder="Tìm kiếm"
            style={{
                width: "40%",
                marginLeft: "30%"
            }}
            onChange={(e) => {
                setSearchKey(e.target.value)
            }}
        />
    )
}

export default Search;
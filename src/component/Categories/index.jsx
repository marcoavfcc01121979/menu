const Categories = ({ filterItems, categories }) => {
    //console.log(filterItems)
    return(
        <div className="btn-container">
            <button className="filter-btn" onClick={() => filterItems('all')}>
                todos
            </button>
            <button className="filter-btn" onClick={() => filterItems('breakfast')}>
                café da manhã
            </button>
            <button className="filter-btn" onClick={() => filterItems('lunch')}>
                almoço
            </button>
            <button className="filter-btn" onClick={() => filterItems('shakes')}>
                sacode
            </button>
            {/*{categories.map((category, index) => {
                return(
                    <button 
                        type="button" 
                        key={index} 
                        className="filter-btn"
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                )
            })}*/}
        </div>
    )
}

export { Categories }
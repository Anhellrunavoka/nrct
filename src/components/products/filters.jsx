import React from 'react';

const Filters = ({ 
    minPrice, setMinPrice, 
    maxPrice, setMaxPrice, 
    onlySale, setOnlySale, 
    sortBy, setSortBy 
}) => {
    return (
        <div className="filters">
            <div>
                <label>Ціна від: </label>
                <input 
                    type="number" 
                    value={minPrice} 
                    onChange={(e) => setMinPrice(e.target.value)} 
                    placeholder="0"
                />
                <label> до: </label>
                <input 
                    type="number" 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(e.target.value)} 
                    placeholder="999999"
                />
            </div>

            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={onlySale} 
                        onChange={(e) => setOnlySale(e.target.checked)} 
                    />
                    Тільки акційні (Sale)
                </label>
            </div>

            <div>
                <label>Сортувати: </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="default">Без сортування</option>
                    <option value="low-to-high">Від дешевих до дорогих</option>
                    <option value="high-to-low">Від дорогих до дешевих</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
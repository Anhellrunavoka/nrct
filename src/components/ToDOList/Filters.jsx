import React from 'react';

const Filters = ({ setActiveFilter,activeFilter,filtersData }) => {
    const filters=Object.keys(filtersData);
    return (
        <div className='filters'>
            {filters.map(item=>
            <button key={item} onClick={() => setActiveFilter(item) } 
            style={{ 
                backgroundColor: activeFilter===item ? 'purple' : 'white' }}>{item}</button>)}
        </div>
    );
};

export default React.memo(Filters);
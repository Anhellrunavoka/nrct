import React from 'react';

const CounterValue = ({value,id}) => {
    return (
        <span id={id}>
            {value}
        </span>
    );
}

export default React.memo(CounterValue);

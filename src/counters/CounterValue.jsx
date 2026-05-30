import React, { memo } from 'react';

const CounterValue = ({value,id}) => {
    return (
        <span id={id}>
            {value}
        </span>
    );
}

export default memo(CounterValue);

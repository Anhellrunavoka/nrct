import React, { useMemo } from 'react';

const IsFive = ({ value }) => {
    const getResult = useMemo(() => {
        let i=0;
        while(i<1_000_000_000){i++}
        return value === 5 ? "Es cinco" : "No es cinco";
    }, [value]);
    return (
        <div>
            {getResult}
        </div>
    );
}

export default React.memo(IsFive,(prevProps,nextProps)=>{
    if(nextProps.value === 5||prevProps.value === 5 ) return false;
    return true;
});


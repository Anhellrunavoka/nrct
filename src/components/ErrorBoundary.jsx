import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

const ErrorBoundary = () => {
    const error=useRouteError();

    if (isRouteErrorResponse(error)) {
        return <div>Erroe:{error.status}:{error.statusText}</div>
    }
    return (
        <div>
            Something went wrong
        </div>
    );
}

export default ErrorBoundary;

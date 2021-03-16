import React from 'react';

const EventHandling = () => {
    const EventHandle = () => {
        console.log("button clicked");
    }

    return (
        <div>
            <button onClick={EventHandle}>
                Click
            </button>
        </div>
    )
}

export default EventHandling;
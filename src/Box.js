import React from 'react';

function Box({
    id,
    handleRemove,
    width = 6,
    height = 6,
    backgroundColor = 'red'
}) {
    const remove = () => handleRemove(id);
    return (
        <div>
          <div
            style = {(
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor
            )}
          />
          <button onClick = {remove}> X </button>
        </div>
    );
}

export default Box;

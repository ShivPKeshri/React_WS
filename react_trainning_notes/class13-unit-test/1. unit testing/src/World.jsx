import React, { useState } from 'react';
const World = () => {
    const [ changedText, setChangedText ] = useState(false)

    const changedTextHandler = () => {
        setChangedText(true);
    }

    return(
        <div>
            <h2>World Component</h2>
            { !changedText && <p>Some Paragraph</p> }
            { changedText && <p>Changed</p> }
            <button onClick={ changedTextHandler } >Update</button>
        </div>
    )
}
export default World;
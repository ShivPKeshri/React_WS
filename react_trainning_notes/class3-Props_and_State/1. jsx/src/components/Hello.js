// with JSX
// const Hello = () => {
//     return(
//         <div>
//             <h1>Welcome User</h1>
//         </div>
//     )
// }

import React from "react";



// without JSX
const Hello = () => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Welcome User'
        )
    )
}




export default Hello;
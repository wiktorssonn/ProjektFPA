import React from 'react'

export default function DisplayData(props) {

    return (
        <div>
            { props.cryptoData.map((item) => 
                <li> {item.name} - {item.key} </li>
            )}
            
        </div>
    )
}

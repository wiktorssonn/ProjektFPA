import React from 'react';
import LocalStorage from './LocalStorage';

export default function DisplayData(props) {

    // Variabel som räknar upp för att ge varje list-item ett unikt id
    let i = 0;
    return (
        <div>
            <div className="card border-success mb-4">
                <div className="card-body text-dark">
                    <ul>
                        { props.cryptoData.map((item) =>
                            <li key={i++} className="list-unstyled text-center">{item.name} - { item.key }</li>
                        )}
                    </ul>
                </div>

                <div className="card-footer bg-transparent border-success text-center">
                    <LocalStorage cryptoData={props.cryptoData} />
                </div>
            </div>
            <div className="card border-success mb-3"></div>   
        </div>
        
    )
}

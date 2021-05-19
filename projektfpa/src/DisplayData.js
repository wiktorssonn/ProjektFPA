import React from 'react';
import LocalStorage from './LocalStorage';

export default function DisplayData(props) {

    function test() {
        return <LocalStorage cryptoData={props.cryptoData} />
    }

    return (
        <div>
            
            <div class="card border-success mb-4">
                <div class="card-body text-dark">
                        <h5 class="card-title"></h5> 
                        <ul>
                        { props.cryptoData.map((item) =>
                            <li className="list-unstyled text-center">{item.name} - { item.key }</li>
                        )}
                        </ul>
                </div>

                <div class="card-footer bg-transparent border-success text-center">
                    <LocalStorage cryptoData={props.cryptoData} />
                </div>
            </div>
            <div class="card border-success mb-3"></div>
            
        </div>
        
    )
}

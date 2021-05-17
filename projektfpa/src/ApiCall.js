import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function ApiCall(props) {
    // API CALLLLLLLLL
    var apiKey = 'coinrankingb864e0cf9a96fe2d2bc403cad1e2be110652e102bd50c693'

    const [posts, setPosts] = useState([])

    function FetchCrypto() {
        // Variabel för vald kryptovaluta i select-listan
        const selectRef = props.selectRef.current.value;

        // URL till api:et
        const  baseUrl = 'https://api.coincap.io/v2/assets/' + selectRef.toLowerCase();
        
        // API-requesten
        axios.get(baseUrl
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }

    return (
        <div>
            <button className="btn btn-success mt-3 mb-4" onClick={FetchCrypto}>Hämta valuta</button>
            <ul>
                <li>Info om kryptovalutan vi hämtat från apiet</li>
            </ul>
        </div>
    )
}

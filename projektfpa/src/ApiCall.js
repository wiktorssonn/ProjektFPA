import React from 'react'
import axios from 'axios';

export default function ApiCall(props) {

    function FetchCrypto() {
        // Nollställer listorna vid nytt anrop
        props.chartData.length = 0;
        props.categoryData.length = 0;

        // Variabel för vald kryptovaluta i select-listan
        const selectRef = props.selectRef.current.value;

        // URL till api:et
        const graphData = 'https://api.coincap.io/v2/assets/' + selectRef.toLowerCase() + '/history?interval=d1';

        const cryptoData = 'https://api.coincap.io/v2/assets/' + selectRef.toLowerCase();
        
        // API-requesten
        axios.get(graphData)

        .then(function (response) {
            console.log(response);

            const cryptoArray = response.data.data
            // Längden på datan i response
            let cryptoLength = cryptoArray.length;
            // Längden minus 31 för att hämta ut de senaste 30 dagarna
            let days = cryptoLength - 31;

            Object.keys(cryptoArray)
                .forEach(function(index) {
                    if (index > days) {
                        props.chartData.push(cryptoArray[index]["priceUsd"].substring(0, 9));
                        props.categoryData.push(cryptoArray[index]["date"].substring(0, 10));
                    }
            });
            console.log(props.chartData);
            console.log(props.categoryData);

            // Sätter nytt state efter att listorna uppdaterats
            props.setChartData([...props.chartData]);
            props.setCategoryData([...props.categoryData]);

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

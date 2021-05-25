import React from 'react';
import axios from 'axios';

export default function ApiCall(props) {

    function FetchCrypto() {
        // Nollställer listorna vid nytt anrop
        props.chartData.length = 0;
        props.categoryData.length = 0;
        props.cryptoData.length = 0;

        // Variabel för vald kryptovaluta i select-listan
        const selectRef = props.selectRef.current.value;

        // URL till api:et
        const graphData = 'https://api.coincap.io/v2/assets/' + selectRef.toLowerCase() + '/history?interval=d1';
        const cryptoData = 'https://api.coincap.io/v2/assets/' + selectRef.toLowerCase();
        
        // API-requesten för att visa upp graf för vald valuta
        axios.get(graphData)
        .then(function (response) {
            // Variabel för responsdatan
            const graphArray = response.data.data
            
            // Längden på datan i response
            let graphLength = graphArray.length;
            
            // Längden minus 31 för att hämta ut de senaste 30 dagarna
            let days = graphLength - 31;

            // Går igenom svaret och lägger till data från de senaste 30 
            // dagarna i två olika listor
            Object.keys(graphArray)
                .forEach(function(index) {
                    if (index > days) {
                        props.chartData.push(graphArray[index]["priceUsd"].substring(0, 9));
                        props.categoryData.push(graphArray[index]["date"].substring(0, 10));
                    }
            });

            // Sätter nytt state efter att listorna uppdaterats
            props.setChartData([...props.chartData]);
            props.setCategoryData([...props.categoryData]);
        })
        .catch(function (error) {
            console.log(error);
        })


        // API-requesten för att visa upp data om vald valuta
        axios.get(cryptoData)
        .then(function (response) {
            // Hämtar dagens datum
            const  todaysDate = new Date().toISOString().slice(0, 10);

            // Responsedata
            const responseData = response.data.data
            
            props.setCryptoData([...props.cryptoData, {
                name: "Kryptovaluta",
                key: responseData["name"]
            },
            {
                name: "Datum",
                key: todaysDate
            },
            {
                name: "Pris",
                key: responseData["priceUsd"].substring(0, 8) + " USD"
            },
            {
                name: "Tillgängliga andelar",
                key: responseData["supply"].substring(0, 15)
            },
            {
                name: "Marknadsvärde",
                key: responseData["marketCapUsd"].substring(0, 15) + " USD"
            }]);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div>
            <button className="btn btn-success mt-3 mb-4" onClick={FetchCrypto}>Hämta valuta</button>
        </div>
    )
}


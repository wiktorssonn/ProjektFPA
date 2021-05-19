import React, {useState} from 'react'

export default function LocalStorage(props) {

    function loadWatchList() {
        let getStorage = localStorage.getItem("cryptoData")
        let storedData = JSON.parse(getStorage);

        if (storedData === null) {
            // Om det inte finns någon lista att hämta, skapa en tom
            localStorage.setItem("cryptoData", JSON.stringify([]));
            return [];
        } else {
            console.log("STORED DATA");
            console.log(storedData);
            return storedData
        }
    }
        
    function addToWatchlist() {

        const loadData = loadWatchList();
        loadData.push(props.cryptoData)

        localStorage.setItem("cryptoData", JSON.stringify(loadData));

    }

    
    const test = loadWatchList();

    for (let i = 0; i < test.length; i++) {
        console.log(test[i][i]);
    }
  
    return (
        <div>
            <button className="btn btn-success" onClick={addToWatchlist}>Lägg till bevakning</button>
            <h4>Mina horövervakningar</h4>
            <table>
                { test.map((hej, index) =>
                    <tr className="list-unstyled text-center">{hej[index].name} - { hej[index].key }</tr>
                )}
            </table>
        </div>
    )
}

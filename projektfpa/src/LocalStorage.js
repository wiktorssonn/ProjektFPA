import React, { useState } from 'react'

export default function LocalStorage(props) {

    // Lista för datan som ska skrivas till localStorage
    const [local, setLocal] = useState([])

    function loadWatchList() {
        // Hämtar datan med nyckeln "cryptoData" i localStorage
        let getStorage = localStorage.getItem("cryptoData")

        // Kontrollerar om getStorage är null
        if (getStorage === null) {
            // Om det inte finns någon lista att hämta, skapa en tom lista och gör om till en sträng
            localStorage.setItem("cryptoData", JSON.stringify([]));
            return [];
        } else {
            // Gör om datan från localStorage till ett objekt
            let parsedStorage = JSON.parse(getStorage)
            return parsedStorage
        }
    }
    
    function addToWatchList() {
        // Lägger till data om valutan i listan 
        local.push({
            name: props.cryptoData[0]["key"],
            price: props.cryptoData[2]["key"],
            date: props.cryptoData[1]["key"]
        });
        
        // Skriver till localStorage
        localStorage.setItem("cryptoData", JSON.stringify(local));

        // Uppdaterar listan som håller i data om valutan
        setLocal([...local]);
    }   

        // Tar bort filmen som man klickar på (krysset)
    function removeFromWatchList(event) {
        let test = this.target
        console.log(test);
        let storage = localStorage.getItem("cryptoData");
        // localStorage.removeItem(storage)
        // setLocal(local.filter((currency) => currency.name !== name));

    }
    
    
        
    
    
    // Kallar på funktionen som skriver ut vad som finns i localStorage
    const printLocalStorage = loadWatchList();

    return (
        <div>
            <button className="btn btn-success" onClick={addToWatchList}>Lägg till bevakning</button>
            <h4>Mina övervakningar</h4>
            <table>                
            {printLocalStorage.map((item) => 
                    <tr>{item.name} {item.price} {item.date}
                        <button type="button" class="close" aria-label="Close" onClick={removeFromWatchList}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </tr>
                )}
            </table>
        </div>
    )
}

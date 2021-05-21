import React, { useState, useEffect } from 'react'

export default function LocalStorage(props) {
     
    // Hämta det som finns i localStorage, om det är tomt returnera en tom lista
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("storedCrypto") || "[]");

    // Slumpar fram ett tal för att ge varje kryptovaluta ett unikt ID
    const randomId = Math.random()*100;
    
    // Lista för datan som ska skrivas till localStorage
    const [storedCrypto, setStoredCrypto] = useState(dataFromLocalStorage)

    function addToWatchList() {
        // Om man inte hämtat valutan när man försöker lägga till bevakning
        if (props.cryptoData.length === 0) {
            alert("Du måste hämta valuta innan du kan lägga till bevakning!")
        } else {
            storedCrypto.push({
                name: props.cryptoData[0]["key"],
                price: props.cryptoData[2]["key"],
                date: props.cryptoData[1]["key"],
                id: randomId
            })
        }

        // Sätter nytt state på listan med kryptovalutor
        setStoredCrypto([...storedCrypto])
    }

    // Varje gång storedCrypto uppdateras så kommer det visas på sidan
    useEffect(() => {
        localStorage.setItem("storedCrypto", JSON.stringify(storedCrypto));
    }, [storedCrypto]);


    // Tar bort valutan som man klickar "på"
    function removeFromWatchList(id) {
        setStoredCrypto(storedCrypto.filter((currency) => currency.id !== id));

    }

    return (
        <div>
            <button className="btn btn-success mt-2" onClick={addToWatchList}>Lägg till bevakning</button>
            <h4 className="mt-4">Mina bevakningar</h4>
            <hr />
            <table className="table table-striped">
                <tbody>     
                    {storedCrypto.length === 0 ? "Du har inga bevakningar":
                    storedCrypto.map((item) =>
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.date}</td>
                        <td className="text-danger fw-bold" style={{cursor: "pointer"}} onClick={() => removeFromWatchList(item.id)} >Ta bort</td>
                    </tr>
                    )}
                </tbody>
            </table> 
        </div>
    )
}
import React, {useState, useRef} from 'react';
import ApiCall from './ApiCall';
import DisplayChart from './DisplayChart';
import DisplayData from './DisplayData';

export default function CryptoForm() {

    // Data för grafen
    const [chartData, setChartData] = useState([]); //x axeln
    const [categoryData, setCategoryData] = useState([]); // y axeln 

    // Data om vald krypto
    const [cryptoData, setCryptoData] = useState([]);

    // Variabel för att få ut valda kryptovaluta
    const selectRef = useRef();

    return (
        <div className="container">
            <h1 className="mt-4">Välj önskad valuta från listan</h1>
            <form>
                <select className="form-select" ref={selectRef}>
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Ethereum">Ethereum</option>
                    <option value="Dogecoin">Dogecoin</option>
                    <option value="Litecoin">Litecoin</option>
                    <option value="XRP">XRP</option>
                    <option value="Tether">Tether</option>
                    <option value="Polkadot">Polkadot</option>
                    <option value="Cardano">Cardano</option>

                </select>
            </form>

            <ApiCall selectRef={selectRef} chartData={chartData} setChartData={setChartData} categoryData={categoryData} setCategoryData={setCategoryData} cryptoData={cryptoData} setCryptoData={setCryptoData}/>

            <DisplayData cryptoData={cryptoData}/>

            <DisplayChart chartData={chartData} categoryData={categoryData} />
        </div>
    )
}

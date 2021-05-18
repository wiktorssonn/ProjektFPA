import React, {useState, useRef} from 'react';
import ApiCall from './ApiCall';
import DisplayChart from './DisplayChart'

export default function CryptoForm() {

    const [chartData, setChartData] = useState([]); //x axeln
    const [categoryData, setCategoryData] = useState([]); // y axeln 

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
                    <option value="Lifecoin">Lifecoin</option>
                </select>
            </form>

            <ApiCall selectRef={selectRef} chartData={chartData} setChartData={setChartData} categoryData={categoryData} setCategoryData={setCategoryData} />

            <DisplayChart chartData={chartData} categoryData={categoryData} />
        </div>
    )
}

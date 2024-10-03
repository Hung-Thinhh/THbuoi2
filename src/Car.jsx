import { useState } from "react";
function Car() {
    const [car, setCar] = useState({ name: 'BMW', color: 'black', year: '2009' });
    const [year, setYear] = useState('1000');
    return (
        <>

            Show information of Car:{JSON.stringify(car)}
            <br />

            Update Year of Car: <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />

            <input type="button" value="Update Year" onClick={() => setCar({...car, year : year})} /> 

        </>
    );
}

export default Car;
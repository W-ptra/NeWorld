import { useEffect, useState } from 'react';

function CountryList() {
    const [countries, setCountries] = useState<any[]>([]);
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        (async function fetchCountries() {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                if (!response.ok) throw new Error('Failed to fetch countries');
                const data = await response.json();
                setCountries(data);
            } catch (err) {
                console.error((err as Error).message);
            }
        })();
    }, []);

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
        (region === '' || country.region === region)
    );

    return (
        <div>
            <h1 className='text-center mt-5 mb-5'>Country List</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <select
                    className="form-select"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                >
                    <option value="">All Regions</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div className="row">
                {filteredCountries.map(country => (
                    <div className="col-md-3 mb-4 pt-2 pb-2" key={country.cca3} style={{
                        border: "1px solid black",
                        borderRadius: "0.5rem"
                    }}>
                        <div className="col-6 img-fluid d-flex justify-content-center align-items-center container-fluid p-2" style={{
                            backgroundColor:"lightgray",
                            flexBasis:"50%"
                        }}>
                            <img src={country.flags.svg} className="card-img-top" alt={country.name.common} style={{
                                height: "7rem"
                            }} />
                        </div>
                        <div className="card-body col-6 d-flex flex-column justify-content-center align-items-center container-fluid" style={{
                            flexBasis:"50%"
                        }}>
                            <h5 className="card-title">{country.name.common}</h5>
                            <p className="card-text">Region: {country.region}</p>
                            <a href={`/countries/${country.name.common}`} className="btn btn-primary">Details</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountryList;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail() {
    const { name } = useParams<{ name: string }>();
    const [country, setCountry] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async function fetchCountry() {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                if (!response.ok) throw new Error('Failed to fetch country details');
                const data = await response.json();
                setCountry(data[0]);
            } catch (err) {
                setError((err as Error).message);
            }
        })();
    }, [name]);

    if (error) return <div className="alert alert-danger">{error}</div>;
    if (!country) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;

    return (
        <div className='d-flex flex-column m-5 p-5 text-center' style={{
            border: "1px solid black",
            borderRadius: "0.5rem"
        }}>
            <h1 className='mt-5 mb-5'>{country.name.common}</h1>
            <div className='img-fluid p-3' style={{
                backgroundColor:"lightgray",
                borderRadius:"1rem"
            }}>
                <img src={country.flags.svg} alt={country.name.common} className="img-fluid" />
            </div>
            <p className='mt-5'><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Capital:</strong> {country.capital?.join(', ')}</p>
            <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
        </div>
    );
}

export default CountryDetail;
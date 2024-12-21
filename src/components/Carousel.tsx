import { useEffect, useState } from 'react';

function Carousel() {
    const [countries, setCountries] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async function fetchCountries() {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                if (!response.ok) throw new Error('Failed to fetch countries');
                const data = await response.json();
                const sorted = data.sort((a: any, b: any) => b.population - a.population).slice(0, 5);
                setCountries(sorted);
            } catch (err) {
                setError((err as Error).message);
            }
        })();
    }, []);

    if (error){
        return (
            <div className="alert alert-danger">{error}</div>
        );
    }    
    if (!countries.length){
        return (
            <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
        );
    }
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {countries.map((country, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={country.cca3}>
                        <img src={country.flags.svg} className="d-block w-100" alt={country.name.common} style={{
                            
                            height:"20rem"
                        }}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{country.name.common}</h5>
                            <p>Population: {country.population}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
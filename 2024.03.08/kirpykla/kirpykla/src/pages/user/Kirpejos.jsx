import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Kirpejos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('data'));

        if (localData)
            setData(localData);
    }, []);

    return (
        <>
            <h1>Kirpejos</h1>
            <Link to={'/admin/kirpejos-info/'}>
                <div className="row mt-5">
                    {data.map(kirpejos =>
                        <div className="col-3">
                            <div className="image px-5">
                                <img src={kirpejos.nuotrauka} style={{ maxWidth: '100%' }} />
                            </div>
                            <h4>{kirpejos.vardas}</h4>
                            <h4>{kirpejos.telnr}</h4>

                        </div>
                    )}
                </div>
            </Link>

        </>
    );
}
export default Kirpejos;
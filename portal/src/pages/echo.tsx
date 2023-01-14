import { useEffect, useState } from 'react';

export default function Echo() {
    const [data, setData] = useState('');

    const getEcho = () => {
        fetch('/api/echo')
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            });
    };

    return (
        <div>
            <button onClick={getEcho}>echo</button>
            {data && <p>{data}</p>}
        </div>
    );
}

import { useState, useEffect } from 'react';

export default function useFetch(url) {

    const [data, setData] = useState([]);

     useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(responseJson=> {setData(responseJson)})
    }, []);

    return data
}
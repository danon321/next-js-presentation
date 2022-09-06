import ItemList from '../../components/ItemList';
import { useState, useEffect } from 'react';

const ItemsPage = (props) => {
    const [data, setData] = useState([]);

    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();

        setData(data.results)
    }

    useEffect(() => {
        fetchCharacters();
    }, [])

    return (
        <>
            <ItemList items={data} />
        </>
    )
}

// export async function getServerSideProps() {
//     const response = await fetch('https://rickandmortyapi.com/api/character');
//     const data = await response.json();

//     return {
//         props: {
//             characters: data.results
//         }
//     }
// }

export default ItemsPage;
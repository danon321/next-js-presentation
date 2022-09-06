import classes from './ItemPage.module.scss';
import Image from 'next/image';

const ItemPage = (props) => {
    return (
        <div className={classes.character}>
            <Image src={props.character.image} width={500} height={450} layout='intrinsic'/>
            <div>
                <h2>
                    {props.character.name}
                </h2>
                <p><strong>Species:</strong> {props.character.species}</p>
                <p><strong>Status:</strong> {props.character.status}</p>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const characterId = context.params.itemId;
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    return {
        props: {
            character: data.results.find(({ id }) => id === +characterId)
        }
    }
}

// export async function getStaticPaths() {
//     const response = await fetch('https://rickandmortyapi.com/api/character');
//     const data = await response.json();

//     return {
//         paths: data.results.map(character => {
//             return {
//                 params:{
//                     itemId: character.id.toString()
//                 }
//             }
//         }),
//         // [{
//         //     params: {
//         //         itemId: '1'
//         //     }
//         // },
//         // {
//         //     params: {
//         //         itemId: '2'
//         //     }
//         // }],
//         fallback: false
//     }
// }

// export async function getStaticProps(context) {
//     const characterId = context.params.itemId;
//     const response = await fetch('https://rickandmortyapi.com/api/character');
//     const data = await response.json();

//     return {
//         props: {
//             character: data.results.find(({ id }) => id === +characterId)
//         },
//         revalidate: 30
//     }
// }

export default ItemPage;
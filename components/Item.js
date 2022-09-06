import Image from 'next/image';
import { useRouter } from 'next/router';

import classes from './Item.module.scss';

const Item = (props) => {
    const router = useRouter();

    const itemClickHandler = () => {
        router.push(`/${props.id}`);
    }

    return (
        <div className={classes.item} onClick={itemClickHandler}>
            <Image src={props.image} width={300} height={250} layout='intrinsic' />
            <h2>{props.name}</h2>
        </div>
    );
}

export default Item;
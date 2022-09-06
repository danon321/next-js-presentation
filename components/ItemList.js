import Item from './Item';
import classes from './ItemList.module.scss';

const Items = (props) => {
    return (
        <div className={classes.items}>
            {props.items.map(item => (
                <Item key={item.id} id={item.id} image={item.image} name={item.name} />
            ))}
        </div>
    );
}

export default Items;
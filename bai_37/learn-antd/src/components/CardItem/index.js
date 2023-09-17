import './style/style.css';

const CardItem = (props) => {
    const { title } = props;
    return (
        <>
            <div className="box">
                {title && <h1>{title}</h1>}
            </div>
        </>
    )
}

export default CardItem;
const FeaturesContainer = (props) => {
    return (
        <div style={{width: '90vw', height: '55vh', margin: 'auto'}}>
            <p style={{fontWeight: '900', marginBottom: '1rem'}}>{props.category}</p>
            <p>{props.feature}</p>
        </div>
    )
};

export default FeaturesContainer;
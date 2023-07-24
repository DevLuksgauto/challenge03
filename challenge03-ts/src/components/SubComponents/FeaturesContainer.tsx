interface FeaturesContainerProps {
    category: string;
    feature: string;
  }
  
  const FeaturesContainer: React.FC<FeaturesContainerProps> = (props) => {
    const { category, feature } = props;
  
    return (
      <div style={{ width: '90vw', height: '55vh', margin: 'auto' }}>
        <p style={{ fontWeight: '900', marginBottom: '1rem' }}>{category}</p>
        <p>{feature}</p>
      </div>
    );
  };
  
  export default FeaturesContainer;
  
import styled from 'styled-components';
import Card from './Card';

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
    gap: 50px;
`

const Products = ({ products }) => (
    <ProductsContainer>
        {products.map(product => (
            <Card
                key={product.id}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
            />
        ))}
    </ProductsContainer>

);

export default Products;
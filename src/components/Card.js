import styled from "styled-components";
import Image from "./Image";
import Title from "./Title";
import Description from "./Description";

const CardContainer = styled.div`
    border: 1px solid #262626;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(200, 200, 200, 0.5);
    min-height: 500px;
    width: 370px;
`

const Card = ({ title, description, imageUrl }) => (
    <CardContainer>
        <Image src={imageUrl} alt={title}/>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </CardContainer>
)

export default Card;
import styled from "styled-components";

const Description = styled.p`
    font-size: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    margin:0;
    display:-webkit-box;
    -webkit-line-clamp: 4; //limite de linhas 
    -webkit-box-orient: vertical; //orientação
`

export default Description;
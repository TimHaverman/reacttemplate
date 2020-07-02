import styled from "styled-components";

import defaultImg from '../Images/product-1.jpeg';


const StyledWorker = styled.header`
    min-height:60vh;
    background: url(${props => (props.img ? props.img: defaultImg)});
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default StyledWorker;
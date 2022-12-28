import styled from "styled-components"

const Slider = styled.input`
    -webkit-appearance: none;
    outline: none;
    width: 220px;
    max-height: 15px;
    background: ${(props) => props.color};
    border-radius: 8px;
    
    
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        width: 25px;
        height: 25px;
        background: #2b2b2b;
        border-radius: 50%;
    }
`


export default Slider   
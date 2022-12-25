import styled from "styled-components"



const Slider = styled.input`
    -webkit-appearance: none;
    outline: none;
    width: 150px;
    max-height: 15px;
    overflow: hidden;
    background: ${(props) => props.color};
    border-radius: 8px;
    
    
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        background: #2b2b2b;
        border-radius: 50%;
    }
`


export default Slider   
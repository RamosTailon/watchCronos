import styled from "styled-components"

const Time = styled.span`
    color:${(props) => (props.animationTime ? 'white' : 'red')}
`

export default Time
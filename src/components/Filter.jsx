import styled from "styled-components"

const Filter = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: #d9d9d9;
	z-index: 1;
	opacity: ${(props) => (props.filterCheck ? 0.5 : 0)};
`
export default Filter
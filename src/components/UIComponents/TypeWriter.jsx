import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import useWordAnimationStore from '../../stores/wordAnimationStore';

const blikAnimation = keyframes`
	0% {
    opacity: 0;
  	}
`;

const StyledTypeWriter = styled.span`
	display: flex;
	align-items: center;
	&::after {
		content: '';
		width: 10px;
  		height: ${props => props.height}px;
  		background: ${props => props.color};
  		display: inline-block;
		margin-left: 10px;
		animation: ${blikAnimation} 1.5s steps(2) infinite;
	}
`;

const TypeWriter = ({ height = 24, color = '#FAFAFA' }) => {
	const { word, currentWordIndex, isForward, setWord, setIsForward, setNextWord } = useWordAnimationStore();

	return <StyledTypeWriter height={height} color={color}>{word}</StyledTypeWriter>;
}

TypeWriter.propTypes = {
	height: PropTypes.number,
	color: PropTypes.string,
}

export default TypeWriter
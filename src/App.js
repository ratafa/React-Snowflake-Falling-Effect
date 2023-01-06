import './App.css';
import styled, {keyframes} from "styled-components";
import {useEffect, useRef} from "react";

const TopDownAnimation = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: ${window.innerHeight}px;
  }
`;

// const Container = styled.div`
// `;


// const SnowFlake = styled.div`
//   position: relative; // relatve 속성을 줘야 애니메이션 효과를 적용시킬 수 있습니다.
//   top: 0;
//   height: 10px;
//   width: 10px;
//   background: white;
//   border-radius: 5px;
//   animation: ${TopDownAnimation} 2.5s ease-in Alternate;
// `;

function App() {
    const bodyRef = useRef(null);
    const MIN_DURATION = 10;

    const handleSnowStyle = () => {
        const delaySnow = Math.random() * 10;
        const snow = document.createElement('div');
        const duration = Math.random() + MIN_DURATION;
        snow.classList.add('snow');
        snow.style.left = `${Math.random() * window.screen.width}px`;
        snow.style.animationDelay = `${delaySnow}s`;
        snow.style.opacity = `${Math.random() + 0.2}`;
        snow.style.animation = `TopDownAnimation ${duration}s linear`;
        bodyRef.current.appendChild(snow);

        setTimeout(() => {
            bodyRef.current.removeChild(snow);
            handleSnowStyle();
        }, (duration + delaySnow) * 1000);
    }
    const snowEffect = () => {
        const snowArr = new Array(50).fill(null);
        snowArr.map((v, i) => setTimeout(handleSnowStyle, 500 * i))
    }
    useEffect(snowEffect);
    return (
        <div className={'container'} ref={bodyRef}>
        </div>
    );
}

export default App;

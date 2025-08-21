import styled from "styled-components";

interface HamburguerButtonProps {
  onClick?: () => void;
  isOpen?: boolean;
}

export function HamburguerButton({
  onClick = () => {},
  isOpen = false,
}: HamburguerButtonProps) {
  return (
    <StyledWrapper>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={onClick}>
        <svg fill="none" viewBox="0 0 50 50" height={50} width={50}>
          <path
            className="lineTop line"
            strokeLinecap="round"
            strokeWidth={4}
            stroke="black"
            d="M6 11L44 11"
          />
          <path
            strokeLinecap="round"
            strokeWidth={4}
            stroke="black"
            d="M6 24H43"
            className="lineMid line"
          />
          <path
            strokeLinecap="round"
            strokeWidth={4}
            stroke="black"
            d="M6 37H43"
            className="lineBottom line"
          />
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .hamburger {
    height: 50px;
    width: 50px;
    transform: 0.2s;
    position: relative;
    cursor: pointer;
  }
  .hamburger .checkbox {
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .line {
    transition: 0.5s;
    stroke-width: 6px;
    stroke: white;
  }
  .lineTop {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 25;
  }
  .lineBottom {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 60;
  }
  .lineMid {
    stroke-dasharray: 40 40;
  }
  .hamburger.open svg .line {
    stroke: crimson;
  }
  .hamburger.open svg .lineTop {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(45deg) translate(-7px, -5px);
  }
  .hamburger.open svg .lineMid {
    stroke-dashoffset: 40;
  }
  .hamburger.open svg .lineBottom {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(-45deg) translate(-5px, 5px);
  }
`;

import cx from "classix";
import styled from "styled-components";

/**
 * Component that alternates a words list in an animated way
 */
export function AnimatedTextSwitcher({
  className = "",
  startText = "",
  endText = "",
  words = [""],
}) {
  return (
    <StyledWrapper $count={words.length}>
      <div className={cx("card", className)}>
        <div className="loader">
          <p> {startText} </p>
          <div className="words playr-font font-bold">
            {[words[words.length - 1]].concat(words).map((label, i) => (
              <span className="word" key={i}>
                {label}
              </span>
            ))}
          </div>
          <p> {endText} </p>
        </div>
      </div>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div<{ $count: number }>`
  .card {
    padding: 1rem 2rem;
    border-radius: 1.25rem;
  }
  .loader {
    padding: 0.5em 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 8px;
    text-align: center;
    font-size: 1em;
  }

  .words {
    overflow: hidden;
    position: relative;
    text-align: center;
    flex-shrink: 0;
    height: 1.5em;
    font-size: 1em;
  }

  .word {
    display: block;
    height: 100%;
    padding: 0 0.3rem;
    animation: spin_4991 ${(props) => props.$count * 1.2}s infinite;
  }
  
  /** Scroll all words from bottom to top for steps */
  @keyframes spin_4991 {
    ${(props) => {
      let part = 100 / props.$count;
      let a = part * 0.4;
      let b = part - a;
      return Array(props.$count * 2)
        .fill("")
        .map((_, i) => {
          let j = i % 2; // 0 o 1
          let labelI = Math.ceil((i + 1) / 2);
          return `
          ${part * (labelI - 1) + (j == 0 ? a : a + b)}% {
            transform: translateY(${j == 1 ? labelI * -100 : labelI * -100 - 2}%);
          }
        `;
        })
        .join(" ");
    }}
  }
`;

import { Link } from "react-scroll";
import styled from "styled-components";

interface Props extends React.PropsWithChildren {
  to: string;
  className?: string;
}

export function LinkButton({ children, className, to }: Props) {
  return (
    <StyledWrapper>
      <Link to={to} smooth={true} duration={500}>
        <button className="btn">
          <div className={className}> {children} </div>
          <div className="bg" />
        </button>
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    position: relative;
    transform: translate(0, 0);
    height: 1.5em;
    line-height: 1.5em;
    cursor: pointer;
    background-color: inherit;
    border: none;
    outline: none;
    color: #f1f1f1;
  }

  .btn:hover .bg {
    height: inherit;
    width: 120%;
    top: 50%;
  }

  .btn .bg {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0.2em;
    width: 100%;
    background-color: #006b92;
    z-index: -1;
    border-radius: 5px;
    transition: all 0.3s;
  }
`;

import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

interface Props extends React.PropsWithChildren {
  to: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export function LinkButton({
  children,
  className,
  to,
  variant = "outline",
  size = "medium",
  onClick,
}: Props) {
  return (
    <StyledWrapper $variant={variant} $size={size}>
      <Link to={to} onClick={onClick} smooth={true} duration={800} offset={-80}>
        <button className="btn">
          <span className={`btn-content ${className}`}>{children}</span>
          <div className="bg"></div>
          <div className="border-effect"></div>
          <div className="hover-effect"></div>
        </button>
      </Link>
    </StyledWrapper>
  );
}

// Animación para el efecto de brillo
const shine = keyframes`
  0% { left: -100%; }
  20% { left: 100%; }
  100% { left: 100%; }
`;

const StyledWrapper = styled.div<{ $variant: string; $size: string }>`
  display: inline-block;
  width: 100%;

  .btn {
    position: relative;
    width: 100%;
    transform: translate(0, 0);
    height: ${(props) =>
      props.$size === "small"
        ? "2.25rem"
        : props.$size === "large"
          ? "3.5rem"
          : "2.75rem"};
    line-height: ${(props) =>
      props.$size === "small"
        ? "2.25rem"
        : props.$size === "large"
          ? "3.5rem"
          : "2.75rem"};
    padding: 0
      ${(props) =>
        props.$size === "small"
          ? "1.5rem"
          : props.$size === "large"
            ? "2.5rem"
            : "2rem"};
    cursor: pointer;
    background: ${(props) =>
      props.$variant === "secondary"
        ? "linear-gradient(45deg, #6b7280, #9ca3af)"
        : props.$variant === "outline"
          ? "transparent"
          : "linear-gradient(45deg, #006b92, #0090c9)"};
    border: ${(props) =>
      props.$variant === "outline" ? "2px solid #006b92" : "none"};
    outline: none;
    color: "#ffffff";
    font-weight: 600;
    font-size: ${(props) =>
      props.$size === "small"
        ? "0.875rem"
        : props.$size === "large"
          ? "1.125rem"
          : "1rem"};
    border-radius: 25px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: ${(props) =>
      props.$variant === "outline"
        ? "none"
        : "0 4px 12px rgba(0, 107, 146, 0.2)"};

    &:hover {
      transform: translateY(-2px);
      color: ${(props) =>
        props.$variant === "outline" ? "#ffffff" : "#ffffff"};
      background: ${(props) =>
        props.$variant === "secondary"
          ? "linear-gradient(45deg, #4b5563, #6b7280)"
          : props.$variant === "outline"
            ? "linear-gradient(45deg, #006b92, #0090c9)"
            : "linear-gradient(45deg, #005a7a, #007ba7)"};
      box-shadow: ${(props) =>
        props.$variant === "outline"
          ? "0 6px 16px rgba(0, 107, 146, 0.3)"
          : "0 8px 20px rgba(0, 107, 146, 0.35)"};
    }

    &:active {
      transform: translateY(0);
      box-shadow: ${(props) =>
        props.$variant === "outline"
          ? "0 2px 8px rgba(0, 107, 146, 0.2)"
          : "0 2px 10px rgba(0, 107, 146, 0.25)"};
    }
  }

  .btn-content {
    position: relative;
    z-index: 2;
    display: block;
    transition: all 0.3s ease;
  }

  .btn:hover .btn-content {
    transform: translateY(-1px);
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: scale(0, 1);
    transform-origin: left center;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
    border-radius: 50px;
  }

  .btn:hover .bg {
    transform: scale(1, 1);
  }

  .border-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 50px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .btn:hover .border-effect {
    border: 2px solid rgba(255, 255, 255, 0.4);
    opacity: 1;
  }

  .hover-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: none;
    z-index: 1;
  }

  .btn:hover .hover-effect {
    animation: ${shine} 1.2s ease;
  }
`;

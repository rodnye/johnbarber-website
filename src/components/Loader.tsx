import { useImageLoader } from "../utils/loader";
import styled from "styled-components";
import icon from "@/assets/icon_logo.svg";
import { Image } from "@/components/Image";

export function Loader({ className = "" }) {
  const { isLoaded } = useImageLoader([icon.src]);

  if (!isLoaded) return <div> loading... </div>;
  console.log(icon);
  return (
    <LoaderContainer className={className}>
      <Image className="image" src={icon} alt="JohnBarber Logo" />
      <div className="loader">
        <div className="block" />
        <div className="block" />
        <div className="block" />
        <div className="block" />
      </div>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: progress;

  .loader {
    width: 5em;
    margin: 0em auto;
  }

  .image {
    width: 5em;
    animation: faded 5s ease-in-out alternate infinite;
  }

  .block {
    position: relative;
    box-sizing: border-box;
    float: left;
    margin: 0 0.625em 0.625em 0;
    width: 0.75em;
    height: 0.75em;
    border-radius: 0.1875em;
    background: black;
  }

  .block:nth-child(4n + 1) {
    animation: wave_23 2s ease 0s infinite;
  }

  .block:nth-child(4n + 2) {
    animation: wave_23 2s ease 0.2s infinite;
  }

  .block:nth-child(4n + 3) {
    animation: wave_23 2s ease 0.4s infinite;
  }

  .block:nth-child(4n + 4) {
    animation: wave_23 2s ease 0.6s infinite;
    margin-right: 0;
  }

  @keyframes wave_23 {
    0% {
      top: 0;
      opacity: 1;
    }

    50% {
      top: 1.875em;
      opacity: 0.2;
    }

    100% {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes faded {
    0% {
      opacity: 30%;
    }
    100% {
      opacity: 80%;
    }
  }
`;

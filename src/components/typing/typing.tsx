import { useState, useEffect, useContext } from "react";
import { TypingContainer } from "./typing.style";
import { appContext } from "@/context";

interface ITextObject {
  typeText: string;
  static: string;
}

interface TypewriterProps {
  text: ITextObject[];
  delay: number;
  infinite: boolean;
}

export default function Typewriter({ text, delay, infinite }: TypewriterProps) {
  const { theme } = useContext(appContext);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex <= text[currentWord].typeText.length) {
      timeout = setTimeout(() => {
        setCurrentText(
          (prevText) => prevText + text[currentWord].typeText[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText("");
      setCurrentWord((prevWord) => (prevWord + 1) % text.length);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, currentWord]);

  return (
    <TypingContainer theme={theme}>
      <span className="char">
        {`${text[currentWord].static}:`}
        {currentText.split(/(\s+)/).map((char, index) => (
          <p key={index}>{char === " " ? "." : char}</p>
        ))}
      </span>
    </TypingContainer>
  );
}

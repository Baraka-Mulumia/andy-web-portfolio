import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { css } from "@emotion/css";

const blinkingCursor = css`
  animation: blink 1s alternate infinite;
  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #ffd700;
    }
  }
`;

const AnimatedText = ({ textItems }: { textItems: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [display, setDisplay] = useState("");

  const letters = textItems[currentTextIndex].split("");

  // display the text one letter at a time
  useEffect(() => {
    if (characterIndex < letters.length) {
      setTimeout(() => {
        setDisplay(display + letters[characterIndex]);
        setCharacterIndex(characterIndex + 1);
      }, 40);
    }
  }, [characterIndex, letters, display]);

  //change the text after the current text has been displayed every 5 seconds
  useEffect(() => {
    const handleTextChange = (index: number) => {
      // if it is the last text, set the next text to the first text
      if (index === textItems.length - 1) {
        setCurrentTextIndex(0);
      } else {
        setCurrentTextIndex(index + 1);
      }
    };

    const interval = setInterval(() => {
      setDisplay("");
      setCharacterIndex(0);
      handleTextChange(currentTextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentTextIndex, textItems]);

  return (
    <Box h={10}>
      <Text variant={"text_white"} size={"8xl"} fontWeight={600}>
        {display}
        <Text as={"span"} color={"#FFD700"} className={blinkingCursor}>
          |
        </Text>
      </Text>
    </Box>
  );
};

export default AnimatedText;

import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./AnimatedText.css"; // Import CSS file for styling
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";

const AnimatedText = ({ message }) => {
  const [animatedText, setAnimatedText] = useState("");
  const [text, setText] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(true);
  const [speakingInstance, setSpeakingInstance] = useState(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const animationInterval = setInterval(() => {
      if (currentIndex < message.length) {
        const currentChar = message[currentIndex];
        if (currentChar === " ") {
          setAnimatedText((prevText) => prevText + " "); // Add space without delay
        } else {
          setAnimatedText((prevText) => prevText + currentChar); // Add character
        }
        currentIndex++;
      } else {
        clearInterval(animationInterval);
      }
    }, 5); // Adjust speed here (milliseconds)

    return () => clearInterval(animationInterval);
  }, [message]);

  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.scrollTop = textContainerRef.current.scrollHeight;
    }
  }, [animatedText]);

  const utterance = new SpeechSynthesisUtterance();
  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      let voices = window.speechSynthesis.getVoices();
      utterance.voice = voices.find(
        (voice) => voice.name === "Microsoft Hazel - English (United Kingdom)"
      );
    };
  });

  useEffect(() => {
    setText(message);
    setLoading(false); // Set loading to false once message is received
  }, [message]);

  const speak = () => {
    utterance.text = text;
    setSpeaking(true);

    utterance.onend = () => {
      setSpeaking(false);
    };

    setSpeakingInstance(utterance);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (speakingInstance) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  };

  const parseMarkdown = (text) => {
    const formattedText = text.split('\n').map(line => {
      if (line.trim() === '') {
        return '<br>'; // Preserve empty lines
      } else if (line.startsWith("- **")) {
        return `<p><strong>${line.replace("- **", '').trim()}</strong></p>`; // Bold headings
      } else {
        const replacedText = line.replace(/\*\*(.*?)\*\*/g, (match, p1) => {
          return `<strong>${p1}</strong>`;
        });
        return `<p>${replacedText}</p>`; // Wrap each line in <p> tags
      }
    }).join('');

    return formattedText;
  };

  const responseBlocks = animatedText.split("\n\n");

  return (
    <>
      <div ref={textContainerRef} style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {responseBlocks.map((block, index) => (
          <div key={index}>
            {/* Parse Markdown syntax for each block */}
            <div dangerouslySetInnerHTML={{ __html: parseMarkdown(block) }} />
            {/* Add spacing between blocks */}
            {index < responseBlocks.length - 1 && <br />}
          </div>
        ))}
      </div>

      <button
        onClick={speaking ? stopSpeaking : speak}
        disabled={text.trim() === ""}
      >
        {loading ? (
          <div>Loading...</div>
        ) : speaking ? (
          <HiSpeakerXMark />
        ) : (
          <HiSpeakerWave />
        )}
      </button>
    </>
  );
};

AnimatedText.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AnimatedText;

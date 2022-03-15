import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😃": "Smileys",
  "😜": "WInking face with tongue",
  "😄": "Smiling face with smiling eyes",
  "😁": "Beaming face with smiling eyes",
  "😅": "Smiling face with tears",
  "😆": "Grinning face",
  "🤣": "Rolling on the floor laughing",
  "😂": "Lauging with tears",
  "🙃": "Upside down face",
  "😉": "Winking face",
  "🐻": "Panda",
  "🍔": "Hamburger",
  "⚽": "Football",
  "🌇": "Sunset",
  "💡": "Light",
  "❤️": "Heart",
  "😈": "Smiling face with horns",
  "🤡": "Clown",
  "🧓": "Old person",
  "👴": "Old man",
  "👵": "Old Woman",
  "🙍": "Person frowning",
  "🙍‍♂‍": "Man frowning",
  "🙍‍♀‍": "Woman frowning"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var mainColor = "blue";
  var username = "Emoji Finder";

  const [meaning, setMeaning] = useState("");

  function emojiIutputHandler(event) {
    var inputEmoji = event.target.value;

    if (inputEmoji === "") {
      setMeaning("");
    } else if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Can not find any emoji in our dictionary");
    }
  }

  function emojiClickHandler(item) {
    return setMeaning(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <a id="github-repo" title="Source code for this app" href="/">
        <i className="fab fa-github"></i>
      </a>
      <h1>
        Welcome To <span style={{ color: mainColor }}> {username} </span>
      </h1>
      <input
        className="input"
        onChange={emojiIutputHandler}
        placeholder="Enter Emoji Here"
      ></input>
      <h2>{meaning}</h2>
      <hr className="breakLine"></hr>
      <h3>emojis we know</h3>
      <div className="emojiBox">
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              className="emojiSpan"
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

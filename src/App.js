import './App.css';
import { useState } from 'react';
import { convertTextToSpeech } from "./api/convertToAudio";
function App() {
  const [text, setText] = useState('');
  const [audio, setAudio] = useState('');
  const [status, setStatus] = useState('click to convert');

  const handleTextToSpeech = async () => {
    const data = await convertTextToSpeech(text, setStatus);
    if (data.error) {
      alert(data.error);
    } else {
      setAudio(data.data.result.audio_url);
    }
  }
  return (
    <div className="App">
      <textarea name="text" id="text" cols="30" rows="10" value={text} onChange={e => setText(e.target.value)}>
      </textarea>
      <button style={{
        color: "white",
        backgroundColor: "blue",
        padding: 10,
        cursor: status === "click to convert" ? "pointer" : "not-allowed",
      }}
        onClick={handleTextToSpeech}
        disabled={status !== "click to convert"}>{status}</button>
      {audio && <audio controls src={audio}></audio>}
    </div>
  );
}

export default App;

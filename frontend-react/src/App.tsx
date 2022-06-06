import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dirtyURL, setDirtyUrl] = useState("");
  const [cleanURL, setCleanURL] = useState("");

  const requestCleanURL = async (dirty_url: string) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("dirty_url", dirty_url);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      // redirect: "follow",
    };
    const response = await fetch(
      "http://128.31.27.157:8000/clean-url",
      requestOptions
    );
    const json = await response.json();
    console.log(json);
    setCleanURL(json);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>The great URL Shortener</h1>
        <h2>Enter your url below to remove the tracking zombies</h2>
        <div>
          <label>Original URL: </label>
          <input
            placeholder="Enter URL"
            type={"url"}
            onChange={(event) => setDirtyUrl(event.target.value)}
          ></input>
        </div>
        <button onClick={() => requestCleanURL(dirtyURL)}>Clean URL</button>
        <p>{cleanURL}</p>
      </header>
    </div>
  );
}

export default App;

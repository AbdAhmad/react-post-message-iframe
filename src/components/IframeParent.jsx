import React, { useRef, useEffect, useState } from "react";
export const IframeParent = () => {
  const iFrameRef = useRef(null);
  const [recievedMessage, setRecievedMessage] = useState("");

  const sendMessage = () => {
    if (!iFrameRef.current) return;
    iFrameRef.current.contentWindow.postMessage(
      "85158a58-57aa-4985-bee7-d9d8b15e175c",
      "http://localhost:3001"
    );
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://localhost:3000") return;
      setRecievedMessage("Got this message from child: " + e.data);
    });
  }, []);

  return (
    <div>
      <h1>Parent iFrame</h1>
      <button
        onClick={() => {
          sendMessage();
        }}
      >
        Send message to child
      </button>

      <br />
      <br />

      <iframe
        ref={iFrameRef}
        src="http://localhost:3001/"
        width="400"
        height="700"
        title="Child iframe"
      ></iframe>

      <p>{recievedMessage}</p>
    </div>
  );
};

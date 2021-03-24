const Snippet = ({ code_snippet }) => {
  return (
    <>
      <iframe
        title="code snipped"
        scrolling="no"
        src={code_snippet}
        style={{
          position: "relative",
          zIndex: "0",
          marginTop: "1%",
          width: "800px",
          height: "800px",
          border: "0",
          transform: "scale(1)",
          // overflow: "hidden",
          background: "none"
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </>
  );
};

export default Snippet;

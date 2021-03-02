import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./components/";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [showModal, setShowModal] = useState();
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0, 16px, 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button
        style={{ margin: "0, 16px, 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button>
      <button
        style={{ margin: "0, 16px, 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Show Modal
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100wv",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

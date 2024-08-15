import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import style from "./styles.css";
import scripts from "./scripts.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <head>
      <meta charset="utf-8" />
      <title>Clean Blog - Start Bootstrap Theme</title>
      <script
        src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
        crossorigin="anonymous"
      ></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src={scripts}></script>
      <link
        href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
        rel="stylesheet"
        type="text/css"
      />
      <link href={style} rel="stylesheet" />
    </head>
    <App />
  </React.StrictMode>
);

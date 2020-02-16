import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "../src/App";

const PORT = 8000;

const app = express();

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happend");
    }
    const sheet = new ServerStyleSheet();
    const body = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
    const styles = sheet.getStyleTags();
    return res.send(
      data
        .replace("</head>", `${styles}</head>`)
        .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});

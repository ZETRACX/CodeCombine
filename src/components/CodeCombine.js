import { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "./hooks/useLocalStorage";
import htmlIcon from "./icons/html.png";
import cssIcon from "./icons/css.png";
import jslIcon from "./icons/js.png";

function CodeCombine() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="App">
        <div className="pen top-pen">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
            icon={htmlIcon}
          />

          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
            icon={cssIcon}
          />
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
            icon={jslIcon}
          />
        </div>
        <div className="pen">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
}

export default CodeCombine;

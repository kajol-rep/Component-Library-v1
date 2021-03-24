import { React, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

// export default function HighlightCode({ code, language }) {
//   // const inputCode = code;
//   // const inputLanguage = language;

//   useEffect(() => {
//     highlight();
//   });

//   const codeRef = useRef(null);

//   const highlight = () => {
//     if (codeRef) {
//       Prism.highlightElement(codeRef.current);
//     }
//   };

//   return (
//     <pre>
//       <code ref={codeRef} className={`language-${language}`}>
//         {code}
//       </code>
//     </pre>
//   );
// }
export default function HighlightCode({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

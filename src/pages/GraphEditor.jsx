import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs'; // Import GrapeJS
import 'grapesjs/dist/css/grapes.min.css';

const GraphEditor = ({ htmlContent }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize GrapeJS
    const editor = grapesjs.init({
      container: '#gjs', // Container ID
      fromElement: true,
    //   height: '100%',
    //   width: 'auto',
      storageManager: false, // Disable storage manager if you don't need it
    });

    // Set the initial HTML content
    editor.setComponents(htmlContent);

    // Store the editor reference in the ref for further use
    editorRef.current = editor;
  }, [htmlContent]);

  return <div id="gjs" />;
};

export default GraphEditor;

// import React, { useEffect } from 'react';
// import grapesjs from 'grapesjs';

// const GrapeJsEditor = () => {
//   useEffect(() => {
//     const editor = grapesjs.init({
//       container: '#gjs',
//       components: '<div class="my-component">Hello World Component!</div>',
//       style: '.my-component { color: blue; }',
//     });
//     // ...
//   }, []);

//   return <div id="gjs" />;
// };

// export default GrapeJsEditor;

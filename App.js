import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism.css'; // You can choose your preferred Prism theme

const App = () => {
  const [code, setCode] = useState(
    `import React from 'react';\n` +
    `import ReactDOM from 'react-dom';\n` +
    `\n` +
    `function App() {\n` +
    `  return (\n` +
    `    <h1>Hello world</h1>\n` +
    `  );\n` +
    `}\n` +
    `\n` +
    `ReactDOM.render(<App />, document.getElementById('root'));`
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>react-simple-code-editor</h1>
      <p style={{ textAlign: 'center' }}>A simple no-frills code editor with syntax highlighting.</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button
          onClick={() => window.open('https://github.com/Abhish-akp/simple-code-editor', '_blank')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          GitHub
        </button>
      </div>
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.jsx, 'jsx')}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
    </div>
  );
};

export default App;

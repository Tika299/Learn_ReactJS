var React = require('react');
var ReactDOM = require('react-dom/client');

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
        </div>
    )
}

// Render component App vào #root element
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
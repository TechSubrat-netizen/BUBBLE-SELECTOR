import { useState } from "react";
import "./App.css"; // Import the external CSS

function App() {
    const [circles, setCircles] = useState([]);

    // Function to create a new circle
    function createCircle() {
        let obj = {
            id: Math.trunc(Math.random() * 100000),
            isSelected: false,
        };
        setCircles([...circles, obj]);
    }

    // Function to handle circle selection toggle
    function handleSelect(id) {
        let updatedCircles = circles.map((circle) => {
            if (circle.id === id) {
                return { ...circle, isSelected: !circle.isSelected };
            }
            return circle;
        });
        setCircles(updatedCircles);
    }

    // Function to delete selected circles
    function deleteCircles() {
        let remainingCircles = circles.filter((circle) => !circle.isSelected);
        setCircles(remainingCircles);
    }

    return (
        <div className="app-container">
            {/* Action Buttons */}
            <div className="controls">
                <button onClick={createCircle}>Create</button>
                <button onClick={deleteCircles}>Delete</button>
            </div>

            {/* Circle Stats */}
            <div className="stats">
                <h1>Total Circles: {circles.length}</h1>
                <h1>Selected Circles: {circles.filter((circle) => circle.isSelected).length}</h1>
            </div>

            {/* Circles Container */}
            <div className="circles-container">
                {circles.map((circle) => (
                    <div
                        key={circle.id}
                        className={`circle ${circle.isSelected ? "selected" : ""}`}
                        onClick={() => handleSelect(circle.id)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default App;

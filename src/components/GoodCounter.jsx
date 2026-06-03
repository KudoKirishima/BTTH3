import { useState } from "react";

function GoodCounter() {
    console.log("✅ GoodCounter render!");

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="demo-card good-box">
            <h2>✅ Counter "tốt" (useState)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p className="success-text">
                Nhấn nút → số trên màn hình sẽ cập nhật
            </p>
        </div>
    );
}

export default GoodCounter;
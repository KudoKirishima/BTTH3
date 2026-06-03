function BadCounter() {
    console.log("❌ BadCounter render!");

    let count = 0;

    function handleClick() {
        count = count + 1;
        console.log("BadCounter count:", count);
    }

    return (
        <div className="demo-card bad-box">
            <h2>❌ Counter "tệ" (biến thường)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p className="warning-text">
                Nhấn nút → Console tăng, nhưng số trên màn hình không đổi
            </p>
        </div>
    );
}

export default BadCounter;
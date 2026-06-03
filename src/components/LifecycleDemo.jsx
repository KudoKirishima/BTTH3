function LifecycleDemo() {
    console.log("1️⃣ LifecycleDemo render!");

    return (
        <div className="demo-card lifecycle-box">
            <h2>Lifecycle Demo</h2>
            <p>Mở Console (F12) để xem log</p>
            <p>Component này đang được render lần đầu</p>
        </div>
    );
}

export default LifecycleDemo;
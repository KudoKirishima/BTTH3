import { useState } from "react";

function FlowDemo() {
    console.log("🔄 FlowDemo render!");

    const [step, setStep] = useState(1);

    return (
        <div className="demo-card flow-box">
            <h2>Luồng hoạt động của React</h2>
            <p>Bước hiện tại: {step}</p>

            <div className="button-group">
                <button onClick={() => setStep(step + 1)}>Bước tiếp theo →</button>
                <button onClick={() => setStep(1)}>Quay lại đầu</button>
            </div>

            <div className="step-box">
                {step === 1 && <p>👋 Bước 1: Xin chào!</p>}
                {step === 2 && <p>📖 Bước 2: Đang học React</p>}
                {step === 3 && <p>🎯 Bước 3: Hiểu useState</p>}
                {step === 4 && <p>🎉 Bước 4: Hoàn thành!</p>}
                {step > 4 && <p>🚀 Bạn đã bấm quá bước 4 rồi!</p>}
            </div>
        </div>
    );
}

export default FlowDemo;
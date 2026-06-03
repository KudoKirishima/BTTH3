import './App.css';
import UserProfile from './components/UserProfile';
import ProductInfo from './components/ProductInfo';
import LifecycleDemo from './components/LifecycleDemo';
import BadCounter from './components/BadCounter';
import GoodCounter from './components/GoodCounter';
import FlowDemo from './components/FlowDemo';


function App() {
    return (
        <div>
            <h1>Tên của bạn ở đây</h1>
            <p>Hôm nay là ngày đẹp trời</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
            <UserProfile />
            <ProductInfo />
            <LifecycleDemo />
            <BadCounter />
            <GoodCounter />
            <FlowDemo />
        </div>
    );
}

export default App;
import KakaoMap from "./components/KakaoMaps";
import DaumPostcode from "./components/DaumPostcode";


const App = () => {
  return (
  <div>
    <button onClick={DaumPostcode}>주소 검색</button>
    <KakaoMap/>
  </div>
  );
}

export default App;

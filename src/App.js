import './App.css';
import FavoriteNumber from "./FavoriteNumber/FavoriteNumber";
import ColorPicker from "./ColorPicker/ColorPicker";
import Record from "./Record/Record";
import Toggle from "./Toggle/Toggle";
import Mirror from "./Mirror/Mirror";
import FullName from "./FullName/FullName";

function App() {
  return (
    <div className="App">
        <div className="exercise" data-number="1" data-title="<Record />">
            <Record />
        </div>
        <div className="exercise" data-number="2" data-title="<FavoriteNumber />">
            <FavoriteNumber />
        </div>
        <div className="exercise" data-number="3" data-title="<ColorPicker />">
            <ColorPicker />
        </div>
        <div className="exercise" data-number="4" data-title="<Toggle />">
            <Toggle />
        </div>
        <div className="exercise" data-number="5" data-title="<Mirror />">
            <Mirror />
        </div>
        <div className="exercise" data-number="6" data-title="<FullName />">
            <FullName />
        </div>
    </div>
  );
}

export default App;

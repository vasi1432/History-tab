import MyButton from "./components/button";
import ProgressiveBar from "./components/progressiveBar";
import Tab from "./components/tabs";
import "/src/css/firstPage.css";
const FirstPage = () => {
  return (
    <>
      <div className="bg-image">
        <img src="\src\images\bg-image.png" alt="" />
      </div>
      <div className="history-tab">
        <Tab label={"History"}></Tab>
        <div className="vertical-line"></div>
        <div className="history-progress">
          <ProgressiveBar progress={33} color={"#FC5D73"}></ProgressiveBar>
        </div>
      </div>

      <div className="main-popup">
        <div className="part1">
          <div className="close-icon">
            <img src="\src\images\close-icon.png" alt="" />
          </div>
          <p className="heading">Strength Bar</p>
          <p className="sub-heading">
            Introducing strength bar to help you know your week subjects.
          </p>
        </div>
        <div className="part2">
          <div className="line1">
            <span className="weak">
              Weak
              <ProgressiveBar color={"#FC5D73"} progress={33}></ProgressiveBar>
            </span>
            <span className="improvement">
              Improvement
              <ProgressiveBar color={"#FF993F"} progress={66}></ProgressiveBar>
            </span>
          </div>
          <div className="line2">
            <span className="average">
              Average
              <ProgressiveBar color={"#FFD504"} progress={80}></ProgressiveBar>
            </span>
            <span className="cutoff">
              Cutoff level
              <ProgressiveBar color={"#569EFE"} progress={100}></ProgressiveBar>
            </span>
          </div>
        </div>
        <div className="part3">
          <div className="part-3-button">
            <MyButton label={"Finish"}></MyButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstPage;

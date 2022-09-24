import { useEffect } from "react";
import { useState } from "react";
import "/src/css/progressiveBar.css";
import Styled from "styled-components";
const ProgressiveBar = ({ progress, color }) => {
  const [progressBar, setProgressBar] = useState(0);
  const [progressBar1, setProgressBar1] = useState(0);
  const [progressBar2, setProgressBar2] = useState(0);
  const [progressBar3, setProgressBar3] = useState(0);

  useEffect(() => {
    if (progress >= 33) {
      const remaining = progress - 33;
      setProgressBar(remaining);
      setProgressBar1(33.33);

      if (remaining >= 33) {
        const remaining2 = remaining - 33.33;
        setProgressBar(remaining2);
        setProgressBar2(33.33);
        setProgressBar3(remaining2);
      } else {
        setProgressBar2(progressBar);
      }
    } else {
      setProgressBar1(progress);
    }
  }, []);

  console.log(color, progress);

  const Progress = Styled.progress` 
  ::-webkit-progress-bar {
    background-color: rgb(220, 220, 220);
    border-radius: 5px 0px 0px 5px;
  }

  ::-webkit-progress-value {
    background-color:${color};
    border-radius: 5px 0px 0px 5px;
  }
`;

  return (
    <>
      <div className="progressive-bar">
        <span className="first-bar">
          <Progress id="file" value={progressBar1} max="33.33"></Progress>
        </span>
        <span className="second-bar">
          <Progress id="file" value={progressBar2} max="33.33"></Progress>
        </span>
        <span className="third-bar">
          <Progress id="file" value={progressBar3} max="33.33"></Progress>
        </span>
      </div>
    </>
  );
};
export default ProgressiveBar;

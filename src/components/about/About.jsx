import "./about.css";
import bdro from "../../img/bdro.png";
import bcolbd from "../../img/bcolbd.png";
import aboutImg from "../../img/about.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={aboutImg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        People call me a robophiliac but I'm pretty sure that I'm straight.
        </p>
        <p className="a-desc">
        Working with robots taught me a lot of things like being patient, 
        keeping things organised, being adaptable and persistent. I always 
        look for ways to reach more people and help them with what I have 
        learnt. I believe it helps me to learn a lot of things too.
        </p>
        <div className="a-award">
          <img src={bcolbd} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Blockchain Olympiad Bangladesh 2022</h4>
            <p className="a-award-desc">
              Bronze Award
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={bdro} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Bangladesh Robot Olympiad 2019</h4>
            <p className="a-award-desc">
              Silver Medal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

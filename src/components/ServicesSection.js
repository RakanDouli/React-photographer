import React from "react";
// import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//style
import styled from "styled-components";
import { About, Description, Image } from "../styles";

import { fade } from "../pages/animation";
import { useScroll } from "./useScroll";
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <div>
      <Services variants={fade} animate={controls} ref={element}>
        <Description>
          <h2>
            High <span>quality</span> services
          </h2>
          <Cards>
            <Card>
              <div class="icon">
                <img src={clock} alt="clock" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div class="icon">
                <img src={teamwork} alt="teamwork" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div class="icon">
                <img src={diaphragm} alt="diaphragm" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div class="icon">
                <img src={money} alt="money" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <Image>
          <img src={home2} alt="home2" />
        </Image>
      </Services>
    </div>
  );
};
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    h2 {
      font-size: 2rem;
    }
    P {
      font-size: 1.4rem;
      width: 90%;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 17rem;

  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: white;

      padding: 1rem;
    }
  }
`;

export default ServicesSection;

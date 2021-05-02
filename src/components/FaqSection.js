import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../pages/animation";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq variants={fade} ref={element} animate={controls} initial="hidden">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i start?">
          <div class="question">
            <div class="answer">
              <p>Lorem ipsum dolor sit amet.</p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                iusto amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Daily Scheduale">
          <div class="question">
            <div class="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                iusto amet consectetur adipisicing elit
              </p>
            </div>
            <div class="faq-line"></div>
          </div>
        </Toggle>
        <Toggle title="Differenet payment Method ">
          <div class="question">
            <div class="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                iusto amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What product do you Offer ">
          <div class="question">
            <div class="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                iusto amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    h2 {
      font-size: 2rem;
    }
    P {
      font-size: 1.4rem;
    }
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;

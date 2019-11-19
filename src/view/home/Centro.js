import React from "react";
import styled from "styled-components";

import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";

export default function Centro() {
  return (
    <Aside>
      <Section>
        <img src={img1} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={img2} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={img3} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={img4} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={img5} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={img6} alt="logo" width="200" height="200" />
      </Section>
    </Aside>
  );
}

const Aside = styled.aside`
  background: #6606;
  display: flex;
  flex-wrap: wrap;
`;
const Section = styled.section`
margin: 10px;
padding: 10px;
width:200px;
height: 200px;
border: solid 2px #000`
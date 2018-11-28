import React from "react";
import ReactLoading from "react-loading";
import {FadeLoader } from "react-spinners";
import styled, {css} from "react-emotion";


const Container = styled("div")`
width: 100vw;
height: 100vh;
//pointer-events: none;
background-color: rgba(0, 0, 0, 0.1);
//opacity: 0.5; 
position: fixed;
//overflow: hidden;
z-index: 700;
top: 0;
left: 0;
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
`;

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class Loading extends React.Component {

  click = () => {
    console.log("haha")
  };

  componentDidMount(){
    document.body.style.overflow = "hidden";
  }
  render() {
    return (
      <Container onClick={this.click}>
        {/*<div onClick={this.click}>what hte</div>*/}
        <FadeLoader
          className={override}
                    sizeUnit={"px"}
                    size={50}
                    color={'#eee'}/>
      </Container>
    );
  }
}
/*sdfsdfs*/


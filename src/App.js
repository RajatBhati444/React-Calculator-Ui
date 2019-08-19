import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";

function App() {
  document.title = "React-Calculator";
  return (
    <div>
      <div className="App">
        <div className="formm">
          <div className="header">
            <Button className="circularButton">×</Button>
          </div>
          <div className="inputcontainer">
            <Input placeholder="type..." className="input" />
          </div>

          <div className="Allbutton">
            <div className="acToplus">
              <div className="acTotwo">
                <div className="twobutton">
                  <Button className="colorButtonTwo"> AC </Button>
                  <Button className="colorButtonTwo"> +/- </Button>
                </div>

                <div className="twobutton">
                  <Button className="button"> 7 </Button>
                  <Button className="button"> 8 </Button>
                </div>

                <div className="twobutton">
                  <Button className="button"> 4 </Button>
                  <Button className="button"> 5 </Button>
                </div>
                <div className="twobutton">
                  <Button className="button"> 1 </Button>
                  <Button className="button"> 2 </Button>
                </div>
              </div>

              <div className="ninetoplus">
                <div className="twobutton">
                  <Button className="colorButtonTwo"> % </Button>
                  <Button className="colorButton"> ÷</Button>
                </div>
                <div className="twobutton">
                  <Button className="button"> 9 </Button>
                  <Button className="colorButton"> × </Button>
                </div>
                <div className="twobutton">
                  <Button className="button"> 6 </Button>
                  <Button className="colorButton"> - </Button>
                </div>
                <div className="twobutton">
                  <Button className="button">3</Button>
                  <Button className="colorButton"> + </Button>
                </div>
              </div>
            </div>
            <div className="zerotoAll">
              <div className="zero">
                <Button className="button"> 0 </Button>
              </div>
              <div className="dottoequal">
                <Button className="button"> . </Button>
                <Button className="colorButton"> = </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

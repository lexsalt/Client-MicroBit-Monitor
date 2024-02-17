// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { socket } from "./socket";
import "./App.css";

let pitchArray = [];
let rollArray = [];
let yawArray = [];
let accelXArray = [];
let accelYArray = [];
let accelZArray = [];
let tempArray = [];
let lightArray = [];
let soundArray = [];

export default function Game() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [pitch, setPitch] = useState(0);
  const [roll, setRoll] = useState(0);
  const [yaw, setYaw] = useState(0);
  const [accelX, setAccelX] = useState(0);
  const [accelY, setAccelY] = useState(0);
  const [accelZ, setAccelZ] = useState(0);
  const [temp, setTemp] = useState(0);
  const [lightLevel, setLightLevel] = useState(0);
  const [soundLevel, setSoundLevel] = useState(0);
  const [buttonA, setButtonA] = useState(false);
  const [buttonB, setButtonB] = useState(false);
  const [buttonAB, setButtonAB] = useState(false);
  const [buttonLogoTouch, setButtonLogoTouch] = useState(false);
  const [buttonLogoPressed, setButtonLogoPressed] = useState(false);
  const [onShake, setOnShake] = useState(false);
  let sampleSize = 10;

  useEffect(() => {
    const interval = setInterval(() => {}, 800);
    return () => clearInterval(interval);
  }, []);

  function processData(data) {
    let checkData = Number(data);
    if (checkNum(checkData)) {
      // console.log(data);
    } else {
      if (data.indexOf("p") === 0) {
        // console.log(typeof(data))
        let arr = data.split("");
        if (arr[0] === "p") {
          arr.shift();
          let str = arr.join("");
          let num = Number(str);
          // console.log(num)
          // console.log(str)
          // console.log(arr)
          if (!checkNum(num)) {
            // console.log(num);
          } else if (checkNum(num)) {
            arrayPushValues(num, pitchArray, sampleSize);
            setPitch(mostFrequent(pitchArray, pitchArray.length));
          }
        } else {
          console.log("Not a valid Pitch");
        }
        // console.log(arr)
        // console.log(data)
      } else if (data.indexOf("r") === 0) {
        let arr = data.split("");
        if (arr[0] === "r") {
          arr.shift();
          let str = arr.join("");
          let num = Number(str);
          // console.log(num)
          // console.log(str)
          // console.log(arr)
          if (!checkNum(num)) {
            // console.log(num);
          } else if (checkNum(num)) {
            arrayPushValues(num, rollArray, sampleSize);
            setRoll(mostFrequent(rollArray, rollArray.length));
          }
        } else {
          console.log("Not a valid Roll");
        }
      } else if (data.indexOf("w") === 0) {
        let arr = data.split("");
        if (arr[0] === "w") {
          arr.shift();
          let str = arr.join("");
          let num = Number(str);
          // console.log(num)
          // console.log(str)
          // console.log(arr)
          if (!checkNum(num)) {
            // console.log(num);
          } else if (checkNum(num)) {
            arrayPushValues(num, yawArray, sampleSize);
            setYaw(mostFrequent(yawArray, yawArray.length));
          }
        } else {
          console.log("Not a valid Pitch");
        }
      } else if (data.indexOf("x") === 0) {
        let arr = data.split("");
        if (arr[0] === "x") {
          arr.shift();
          let str = arr.join("");
          let num = Number(str);
          // console.log(num)
          // console.log(str)
          // console.log(arr)
          if (!checkNum(num)) {
            // console.log(num);
          } else if (checkNum(num)) {
            arrayPushValues(num, accelXArray, sampleSize);
            setAccelX(mostFrequent(accelXArray, accelXArray.length));
          }
        } else {
          console.log("Not a valid accelX");
        }
      } else if (data.indexOf("y") === 0) {
        let arr = data.split("");
        if (arr[0] === "y") {
          arr.shift();
          let str = arr.join("");
          let num = Number(str);
          // console.log(num)
          // console.log(str)
          // console.log(arr)
          if (!checkNum(num)) {
            // console.log(num);
          } else if (checkNum(num)) {
            arrayPushValues(num, accelYArray, sampleSize);
            setAccelY(mostFrequent(accelYArray, accelYArray.length));
          }
        } else {
          console.log("Not a valid AccelY");
        }
      } else if (data.indexOf("z") === 0) {
        let arr = data.split("");
        if (arr[0] === "z") {
          arr.shift();
          let str = arr.join("");
          let num = Number(str);
          // console.log(num)
          // console.log(str)
          // console.log(arr)
          if (!checkNum(num)) {
            // console.log(num);
          } else if (checkNum(num)) {
            arrayPushValues(num, accelZArray, sampleSize);
            setAccelZ(mostFrequent(accelZArray, accelZArray.length));
          }
        } else {
          console.log("Not a valid AccelZ");
        }
      } else if (data.indexOf("t") === 0) {
        let arr = data.split("");
        if (arr[0] === "t") {
          arr.shift();
          let str = arr.join("");
          let num = Number(str);
          // console.log(num)
          // console.log(str)
          // console.log(arr)
          if (!checkNum(num)) {
            // console.log(num);
          } else if (checkNum(num)) {
            arrayPushValues(num, tempArray, sampleSize);
            setTemp(mostFrequent(tempArray, tempArray.length));
          }
        } else {
          console.log("Not a valid Temp");
        }
      } else if (data.indexOf("g") === 0) {
        let arr = data.split("");
        if (arr[0] === "g") {
          arr.shift();
          let str = arr.join("");
          let num = Number(str);
          // console.log(num)
          // console.log(str)
          // console.log(arr)
          if (!checkNum(num)) {
            // console.log(num);
          } else if (checkNum(num)) {
            arrayPushValues(num, lightArray, sampleSize);
            setLightLevel(mostFrequent(lightArray, lightArray.length));
          }
        } else {
          console.log("Not a valid lightLevel");
        }
      } else if (data.indexOf("u") === 0) {
        let arr = data.split("");
        if (arr[0] === "u") {
          arr.shift();
          let str = arr.join("");
          let num = Number(str);
          // console.log(num)
          // console.log(str)
          // console.log(arr)
          if (!checkNum(num)) {
            // console.log(num);
          } else if (checkNum(num)) {
            arrayPushValues(num, soundArray, 10);
            setSoundLevel(mostFrequent(soundArray, soundArray.length));
          }
        } else {
          console.log("Not a valid soundLevel");
        }
      } else if (data.indexOf("a") === 0) {
        setButtonA(true);
        setTimeout(() => {
          // console.log("Delayed for 0.5 second.");
          setButtonA(false);
        }, "500");
      } else if (data.indexOf("b") === 0) {
        setButtonB(true);
        setTimeout(() => {
          // console.log("Delayed for 0.5 second.");
          setButtonB(false);
        }, "500");
      } else if (data.indexOf("d") === 0) {
        setButtonAB(true);
        setTimeout(() => {
          // console.log("Delayed for 0.5 second.");
          setButtonAB(false);
        }, "500");
      } else if (data.indexOf("l") === 0) {
        setButtonLogoTouch(true);
        setTimeout(() => {
          // console.log("Delayed for 0.5 second.");
          setButtonLogoTouch(false);
        }, "500");
      } else if (data.indexOf("s") === 0) {
        setOnShake(true);
        setTimeout(() => {
          // console.log("Delayed for 0.5 second.");
          setOnShake(false);
        }, "500");
      }
    }
  }
  function checkNum(x) {
    if (isNaN(x)) {
      return false;
    }
    return true;
  }
  function arrayPushValues(num, arr, sample) {
    if (arr.length > sample) {
      arr.pop();
      arr.unshift(num);
    } else {
      arr.unshift(num);
    }
    // console.log(arr)
  }
  function mostFrequent(arr, n) {
    let maxcount = 0;
    let element_having_max_freq;
    for (let i = 0; i < n; i++) {
      let count = 0;
      for (let j = 0; j < n; j++) {
        if (arr[i] === arr[j]) count++;
      }
      if (count > maxcount) {
        maxcount = count;
        element_having_max_freq = arr[i];
      }
    }
    return element_having_max_freq;
  }

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }
    function onDisconnect() {
      setIsConnected(false);
    }
    function onData(value) {
      // console.log(typeof(value))
      processData(value);
      // soundTrack(a,b,c)
      // setAge(a => a + 1);
    }
    socket.on("serialData", onData);
    socket.on("connection", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("serialData", onConnect);
      socket.off("connection", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);
  // soundTrack(a,b,c)
  return (
    <div className="App">
      <div>
        <div className="title">Micro-bit Monitor: </div>
      </div>
      <div className="mother">
        <div className="parent">
          <div className="title">Position: </div>
          <div className="item">
            <div>
              <p>Pitch: </p>
            </div>
            <div className="value">{pitch}</div>
          </div>
          <div className="item">
            <div>
              <p>Roll: </p>
            </div>
            <div className="value">{roll}</div>
          </div>
          <div className="item">
            <div>
              <p>Yaw: </p>
            </div>
            <div className="value">{yaw}</div>
          </div>
        </div>

        <div className="parent">
          <div className="title">Input: </div>
          <div className="item">
            <div>
              <p>A: </p>
            </div>
            <div className="value">{buttonA ? "on" : "off"}</div>
          </div>
          <div className="item">
            <div>
              <p>B: </p>
            </div>
            <div className="value">{buttonB ? "on" : "off"}</div>
          </div>
          <div className="item">
            <div>
              <p>A+B: </p>
            </div>
            <div className="value">{buttonAB ? "on" : "off"}</div>
          </div>
          <div className="item">
            <div>
              <p>Logo(touch): </p>
            </div>
            <div className="value">{buttonLogoTouch ? "on" : "off"}</div>
          </div>
          <div className="item">
            <div>
              <p>Logo(pressed): </p>
            </div>
            <div className="value">{buttonLogoPressed ? "on" : "off"}</div>
          </div>
          <div className="item">
            <div>
              <p>Shake: </p>
            </div>
            <div className="value">{onShake ? "on" : "off"}</div>
          </div>
        </div>
        <div className="parent">
          <div className="title">Readings: </div>
          <div className="item">
            <div>
              <p>Temp: </p>
            </div>
            <div className="value">{temp}</div>
          </div>
          <div className="item">
            <div>
              <p>Light: </p>
            </div>
            <div className="value">{lightLevel}</div>
          </div>
          <div className="item">
            <div>
              <p>Sound: </p>
            </div>
            <div className="value">{soundLevel}</div>
          </div>
        </div>
        <div className="parent">
          <div className="title">Accel: </div>
          <div className="item">
            <div>
              <p>X: </p>
            </div>
            <div className="value">{accelX}</div>
          </div>
          <div className="item">
            <div>
              <p>Y: </p>
            </div>
            <div className="value">{accelY}</div>
          </div>
          <div className="item">
            <div>
              <p>Z: </p>
            </div>
            <div className="value">{accelZ}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

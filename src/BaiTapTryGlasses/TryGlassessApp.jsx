import React, { Component } from "react";
const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class TryGlassessApp extends Component {
  state = {
    glassDetail: {
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
  };
  renderModelImg = () => {
    const { name, url, desc } = this.state.glassDetail;
    return (
      <div className="model d-flex text-center px-5 justify-content-around position-relative">
        <div
          className="model__left"
          style={{
            backgroundImage: "url(./img/model.jpg)",
            width: "300px",
            backgroundSize: "contain",
            position: "relative",
          }}
        >
          <div
            className="glass"
            style={{
              position: "absolute",
              top: 95,
              left: 75,
            }}
          >
            <img src={url} width={150} alt="" />
          </div>
          <div
            className="text-box text-start position-absolute bottom-0 start-0 px-1"
            style={{
              backgroundColor: "rgba(253,189,143,0.5)",
            }}
          >
            <h4
              className="mb-2"
              style={{
                color: "#7663db",
              }}
            >
              {name}
            </h4>
            <p className="text-white fw-bold">{desc}</p>
          </div>
        </div>
        <div className="model__right">
          <img src="./img/model.jpg" width={300} alt="" />
        </div>
      </div>
    );
  };
  renderGlasses = () => {
    return data.map((glass, index) => {
      return (
        <div
          className="col-2 my-4"
          key={index}
          onClick={() => this.renderDetail(glass)}
          style={{ zIndex: 100 }}
        >
          <img
            className="border border-dark p-2 display-block"
            src={glass.url}
            width={150}
            style={{ cursor: "pointer" }}
          />
        </div>
      );
    });
  };
  renderDetail = (glass) => {
    this.setState({
      glassDetail: glass,
    });
  };
  render() {
    return (
      <div
        style={{
          overflow: "hidden",
          backgroundImage:
            "-webkit-linear-gradient(rgba(0,0,0, 0.5) 0%,rgba(0,0,0, 0.5) 100%),url(./img/background.jpg) ",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div
          className="w-100 text-center  text-white"
          style={{
            position: "absolute",
            width: "100%",
            minHeight: "100vh",
            top: 0,
            left: 0,
          }}
        >
          <h4
            className="py-4"
            style={{
              width: "100%",
              background: "rgba(0,0,0,0.5)",
            }}
          >
            TRY GLASSES APP ONLINE
          </h4>
        </div>
        <div
          className="model__class mx-auto text-center"
          style={{ marginTop: "150px" }}
        >
          {this.renderModelImg()}
        </div>
        <div className="glasses__box container mt-5 p-5">
          <div className="row bg-white text-center">{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}

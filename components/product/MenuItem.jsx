import React from "react";

const MenuItem = () => {
  return (
    <div>
      <article className="card1">
        <img className="card1__image" src="/images/f6.png" />
        <div className="card1__data">
          <div className="card1__info">
            <h2 className="text-black font-raleway">Nombre Nombre Nombre  Comida Delicious Pizza</h2>
            <p className="font-raleway">
              Veniam debitis quaerat officiis quasi cupiditate quo,cupiditatecupiditate quo,cupiditatecupiditate quo,cupiditate quo,cupiditate quo,cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
          </div>
          <h3 className="text-black card1__price">$7.50</h3>
          <button className="card1__add">+</button>
        </div>
      </article>

      <style jsx>{`
        .card1 {
          position: relative;
          max-width: 80%;
          margin: 0 auto;
        }
        .card1__image {
          position: absolute;
          width: 260px;
          left: -15%;
          right: 0;
          margin: 0 auto;
          top: -18%;
          z-index: 2;
          transition: all 0.3s ease-out;
          -webkit-filter: drop-shadow(5px 5px 5px #222);
          filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));
          animation: spin 50s infinite linear;
        }
        .card1__data {
          border-top-right-radius: 50%;
          border-top-left-radius: 50%;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          background-color: #ededed;
          padding-top: 200px;
          transition: all 0.3s ease-out 0.1s;
        }
        .card1__info {
          padding: 0 10px;
          margin-bottom: 10px;
        }
        .card1__info h2 {
          font-size: 18px;
          line-height: 20px;
          font-weight: 800;
          margin-bottom: 10px
        }
        .card1__info p {
          font-size: 15px;
          line-height: 18px;
          color: #555555;
        }
        .card1__action {
          display: grid;
          grid-template: 30px / 1fr 35px;
        }
        .card1__price {
          height: 50px;
          padding: 0 10px 0 20px;
          font-size: 20px;
          display: flex;
          align-items: center;
          font-weight: 800;
        }
        .card1__add {
          overflow: hidden;
          width: 35px;
          height: 30px;
          right: 0;
          bottom: 0;
          position: absolute;
          background-color: #222222;
          border: none;
          color: #fff;
          border-top-left-radius: 15px;
          border-bottom-right-radius: 15px;
          font-size: 20px;
          cursor: pointer;
          outline: none;
          transition: all 0.3s ease-in;
        }
        .card1__add:hover {
          opacity: 0.8;
          transform: scale(1.1);
        }
        .card1__add:active {
          opacity: 1;
          transform: scale(0.8);
        }
        .card1:hover .card1__image {
          top: -20%;
        }
        .card1:hover .card1__data {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default MenuItem;

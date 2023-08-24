import React from "react";

const Page = ({ menu }) => {
  return (
    <div className="main-card--cointainer">
      {menu.map((element) => {
        return (
          <div className="card-container" key={element.id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number">{element.id}</span>
                <span className="card-author">{element.name}</span>
                <h2 className="card-title">{element.category}</h2>
                <span className="card-description">{element.description}</span>
                <div className="card-read">Read</div>
              </div>
              <img
                src={element.image}
                alt={element.id}
                className="card-media"
              />
              <span className="card-tag">Order Now</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;

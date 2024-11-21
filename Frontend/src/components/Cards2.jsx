import React from "react";

function Cards({ item }) {
  // Function to handle Buy Now button click
  const handleBuyNowClick = () => {
    window.open(item.link, "_blank"); // Open the link in a new tab
  };

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹0</div>
              <div 
                className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
                onClick={handleBuyNowClick} // Add onClick handler
              >
                Read
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

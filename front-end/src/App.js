import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [trendingList, setTrendingList] = useState([]);
  const [subTrendingList, setSubTrendingList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productLoader = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((response) => response.json())
      .then((orders) => {
        const orderTrending = {};
        const PAST_48_HOURS = moment(
          new Date(new Date().getTime() - 1000 * 60 * 60 * 48)
        ).format();

        orders
          .filter((o) => o.datePurchased >= PAST_48_HOURS)
          .forEach((o) => {
            let products = o.products;

            products.forEach((p) => {
              if (p.name) {
                if (orderTrending[p.name]) {
                  orderTrending[p.name].recentPurchase += p.qty;
                } else {
                  orderTrending[p.name] = { recentPurchase: p.qty };
                }
              }
            });
          });

        return Object.keys(orderTrending).sort(
          (a, b) =>
            orderTrending[b].recentPurchase - orderTrending[a].recentPurchase
        );
      })
      .then((trendingList) => {
        setTrendingList(trendingList);
        setSubTrendingList(trendingList.slice(0, currentPage * 10));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [currentPage]);

  const onScroll = () => {
    if (productLoader.current) {
      const { scrollTop, scrollHeight, clientHeight } = productLoader.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrentPage((currentPage) => currentPage + 1);
        setSubTrendingList(trendingList.slice(0, currentPage * 10));
      }
    }
  };

  if (loading) {
    return <p> loading.....</p>;
  } else {
    return (
      <div className="App">
        <h1>Trending</h1>
        <div
          className="trendingList"
          onScroll={() => onScroll()}
          ref={productLoader}
        >
          {subTrendingList.map((product, idx) => {
            return <p key={idx}>{product}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;

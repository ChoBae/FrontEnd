"use client";
import Image from "next/image";
import { useState } from "react";
export default function List() {
  let foods = [
    { name: "tomatoes", price: 40 },
    { name: "Pasta", price: 20 },
    { name: "Coconut", price: 10 },
  ];

  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {foods.map((food, index) => {
        return (
          <div className="food" key={index}>
            {/* next는  */}
            {/* <Image src={`/food${index}`}></Image> */}
            <img className="food-img" src={`/food${index}.png`}></img>
            <h4>
              {food.name} ${food.price}
            </h4>
            <CartCountBox></CartCountBox>
          </div>
        );
      })}
    </div>
  );
}

function CartCountBox() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

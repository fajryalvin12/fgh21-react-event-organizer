import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useListEventsQuery } from "../redux/services/event.js";
import Button from "./Button";

function CategoryContent() {
  const { data, err, isLoading } = useListEventsQuery([1, 6]);
  const navigate = useNavigate();
  async function clickEvent(id) {
    navigate("/events/section/" + id);
  }
  return (
    <>
      <div className="flex gap-12 items-center mb-[50px] mx-20 overflow-x-scroll ">
        {data?.results.map((item) => {
          return (
            <div
              key={item.id}
              className="card bg-base-100 w-96 shadow-xl shrink-0 w-[300px] h-[450px]"
            >
              <figure>
                <img className=" object-cover" src={item.image} alt="events" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.date}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => clickEvent(item.id)}
                    className="btn btn-primary"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button />
    </>
  );
}

export default CategoryContent;

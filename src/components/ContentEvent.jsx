import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import EventFour from "../assets/images/event-4.jpg";
import {
  Link,
  useParams,
  useNavigate,
  ScrollRestoration,
} from "react-router-dom";
import { FaRegHeart, FaLocationDot, FaClock } from "react-icons/fa6";
import Attendee from "../components/Attendee";
import { addEvent } from "../redux/reducers/event.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function ContentEvent() {
  const id = useParams().id;
  const token = useSelector((state) => state.auth.token);
  const endpoint = "http://localhost:8888/events/" + id;
  const userWishlist = "http://localhost:8888/wishlist";
  const navigate = useNavigate();
  const [message, setMessage] = React.useState("");
  const [alert, setAlert] = React.useState(0);

  const [event, setEvent] = useState({});
  async function eventDetails() {
    const getData = await axios.get(endpoint);
    setEvent(getData.data.results);
  }
  useEffect(() => {
    eventDetails();
  }, []);

  function clickEvent(id) {
    navigate("/events/section/" + id);
  }

  async function addWishlist() {
    try {
      const getWish = await axios.post(
        userWishlist,
        {
          eventId: parseInt(id),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (getWish.data.success) {
        setMessage(getWish.data.message);
        setAlert(1);
      } else {
        setMessage(getWish.data.message);
        setAlert(1);
      }
    } catch (error) {
      console.error("failed to listing the event");
    }
  }
  return (
    <div className="bg-[#EEEEEE] md:py-[50px] py-0">
      <div className="p-0 md:p-[100px] mx-0 md:mx-[120px] bg-[#ffff] flex flex-col md:flex-row rounded-none md:rounded-[30px] gap-[50px]">
        <div className="flex-1 flex flex-col items-center gap-[50px]">
          <img
            className="w-full h-full md:w-[375px] md:h-[486px] object-cover	rounded-none md:rounded-[40px] brightness-50"
            src={event.image}
            alt=""
          />
          <div className="flex items-center gap-[10px]">
            <button
              onClick={addWishlist}
              disabled={token === null}
              className="hover:text-red-400"
            >
              <FaRegHeart />
            </button>
            <div className="font-semibold">
              <Link to={"/wishlist"}> Add to Wishlist</Link>
            </div>
          </div>
          {alert ? (
            <div className="h-12 flex-1 bg-white flex items-center pl-4 justify-between">
              {message ? (
                <button onClick={() => setAlert(0)} className="text-green-500">
                  {message}
                </button>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex-1 flex flex-col gap-[30px] py-8 px-8">
          <div className="flex flex-col gap-[30px]">
            <div className="font-bold text-[24px] max-w-[233px]">
              {event.title}
            </div>
            <div className="flex justify-between font-semibold flex-col md:flex-row gap-6">
              <div className="flex gap-[5px]">
                <div className="text-red-500 items-center flex">
                  <FaLocationDot />
                </div>
                <div>London, England</div>
              </div>
              <div className="flex gap-[5px]">
                <div className="text-red-500 items-center flex">
                  <FaClock />
                </div>
                <div>{event.date}</div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] font-semibold">
              <div>Attendees</div>
              <div>
                <Attendee />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <div className="font-semibold text-[20px]">Event Detail</div>
              <div className="text-[#373a42bf]">{event.description}</div>
              <div className="text-[#3366ff]">Read More</div>
            </div>
            <div className="flex flex-col gap-[50px] items-center md:items-start">
              <div className="flex flex-col gap-[15px] max-w-[315px]">
                <div className="font-semibold text-[20px]">Location</div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9527462908954!2d106.94075607409887!3d-6.400090662594075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6995002b03b4ef%3A0x52262b02144dc0!2sFazztrack!5e0!3m2!1sid!2sid!4v1720352158298!5m2!1sid!2sid"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <button
                  onClick={() => clickEvent(event.id)}
                  className="py-[15px] px-[82px] font-semibold text-[#ffff] bg-[#201E43] rounded-[15px] text-[16px] w-full"
                >
                  <Link to={"/BookingPage"}>Buy Tickets</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default ContentEvent;

import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [hasFetched, setHasFetched] = useState(false); 

  const fetchEventDetails = async () => {
    try {
      const response = await fetch(`https://meet-up-backend-one.vercel.app/events/${eventId}`);

      if (!response.ok) {
        throw new Error("Event not found");
      }

      const data = await response.json();
      setEvent(data);
      setHasFetched(true);
    } catch (error) {
      console.log("Failed to fetch event details!", error)
    }
  };

  if (!hasFetched) {
    fetchEventDetails();
  }

  return (
    <>
    <Header/>
    <main className="py-3">
      {event && (
        <div className="container text-light">
          <div className="row">
            <div className="col-6">
              <div>
                <h1 className="pb-4">{event.title}</h1>
                <p><strong>Hosted By:</strong> {event.title}</p>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="img-fluid rounded"
                />
                <p className="pt-3"><strong>Description:</strong> {event.description}</p>
                <p><strong>Type:</strong> {event.type}</p>
                <h2>Additional Information</h2>
                <p><strong>Age Restrictions:</strong> {event.restrictions}</p>
                <p><strong>Dress Code:</strong> {event.dressCode}</p>
              </div>
            </div>
            <div className="col-6 pe-5">
            <div className="card">
              <div className="card-body">
                <div className="card-text">
                <p><strong>🕒</strong> {new Date(event.date).toLocaleString('en-GB', {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                  timeZone: 'Asia/Kolkata',
                })}</p>
              <p><strong>📍</strong> {event.address}</p>
              <p><strong>💲</strong> {event.price > 0 ? event.price : "Free"}</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer/>
    </>
  );
};
export default EventDetails;

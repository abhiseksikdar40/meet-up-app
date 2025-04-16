import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  const fetchEventDetails = async () => {
    try {
      const response = await fetch(`https://meet-up-backend-one.vercel.app/events/${eventId}`);

      if (!response.ok) {
        throw new Error("Event not found");
      }

      const data = await response.json();
      setEvent(data);
    } catch (error) {
      console.log("Failed to fetch event details!", error)
    }
  };

    fetchEventDetails();


  return (
    <>
    <Header/>
    <main className="py-3">
      {event && (
        <div className="container text-light">
          <div className="row">
            <div className="col-8">
              <div>
                <h1 className="pb-4">{event.title}</h1>
                <p><strong>Hosted By:</strong> {event.title}</p>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="img-fluid rounded my-3"
                />
                <p className="mt-4"><strong>Description:</strong> {event.description}</p>
                <p><strong>Type:</strong> {event.type}</p>
                <h2>Additional Information</h2>
                <p><strong>Age Restrictions:</strong> {event.restrictions}</p>
                {event.dressCode && <p><strong>Dress Code:</strong> {event.dressCode}</p>}
              </div>
            </div>
            <div className="col-4">
            <div className="card mb-4" style={{width: "400px", height: "200px"}}>
              <div className="card-body">
                <div className="card-text">
                <p className="mb-2"><strong>🕒</strong> {new Date(event.date).toLocaleString('en-GB', {
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

            <h5><strong>Speakers: ({event.speakers?.length || 0})</strong></h5>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {event.speakers?.map((speakerName, index) => (
                <div key={index} className="card p-2 text-center" style={{ width: "120px" }}>
                  <img
                    src={event.speakersImageUrl?.[index]}
                    alt={speakerName}
                    className="img-fluid rounded-circle mb-2"
                    style={{ width: "70px", height: "70px", objectFit: "cover", margin: "0 auto" }}
                  />
                  <p className="mb-0"><strong>{speakerName}</strong></p>
                </div>
              ))}
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

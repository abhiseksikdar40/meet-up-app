import { useState } from 'react';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const { data, loading, error } = useFetch("https://meet-up-backend-one.vercel.app/events");
  const [selectedType, setSelectedType] = useState("All");


  const filteredEvents = selectedType === "All" ? data : data?.filter(event => event.type?.includes(selectedType));

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-light">Meetup Events</h1>
        <select
          className="w-auto form-select bg-secondary text-light"
          style={{ minWidth: '180px' }}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="All">Select Event Type</option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
        </select>
      </div>

      <div className='row'>
        {filteredEvents?.map(event => (
          <div className='col-md-4 mb-4' key={event._id}>
            <div className="card bg-transparent" style={{ height: "400px" }}>
              <div className="row" style={{ height: "300px" }}>
            <div className="col-md-12 position-relative" >
                <img
                    src={event.imageUrl}
                    className="img-fluid rounded w-100 h-100"
                    alt={event.title}
                    style={{ objectFit: "cover" }}
                />
                <span className="position-absolute top-0 start-0 ms-3 mt-2 bg-white px-2 py-1 rounded fw-bold">
                    {event.type}
                </span>
                </div>

                <div>
                  <div className="card-body text-light">
                    <p className="card-text">
                      <small className="card-subtitle mb-2 text-body-light">
                        {new Date(event.date).toLocaleString('en-GB', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                          timeZone: 'Asia/Kolkata',
                        })}
                      </small>
                    </p>
                    <Link className='nav-link text-light' to={`/allevents/${event._id}`}>
                      <h3 className='card-title'>{event.title}</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;

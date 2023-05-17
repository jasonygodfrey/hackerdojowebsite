import React, { useEffect, useState } from "react";
import axios from "axios";

const FindUs = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.meetup.com/hackerdojo/events?&sign=true&photo-host=public&page=1",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_MEETUP_API_TOKEN}`,
          },
        }
      );
      console.log(result.data); // Log the data received from the API
      setEvent(result.data[0]); // We assume the first event is the next one
      console.log(event); // Log the value of event

    };
    

    fetchData();
  }, []);

  return (
    <div className="our-story-section">
      <div className="where-to-find-us">
        <h2>WHERE TO FIND US</h2>
      </div>
      <div className="find-us-container">
        <div className="address-info address-spacing">
          <h3>Hacker Dojo HQ</h3> <br />
          855 Maude Avenue <br />
          Mountain View, CA 94043
          <br />
          <br />
          Nearby Transit:
          <br />
          Middlefield & Ellis VTA stop: 5 min walk
          <br />
          Bus 21: 1 min walk
          <br />

          {event && (
  <div>
    <h2>Our Next Event</h2>
    <div>
      <h3>{event.name}</h3>
      <p>{new Date(event.time).toDateString()}</p>
      <p>{event.description}</p>
    </div>
  </div>
)}

        </div>

        <div className="map-container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124167.45482735739!2d-122.13617905437835!3d37.39017261718596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb70548de66fd%3A0x19d323945972ea61!2s855%20Maude%20Ave%2C%20Mountain%20View%2C%20CA%2094043!5e0!3m2!1sen!2sus!4v1682406904090!5m2!1sen!2sus"
              width="650"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hacker Dojo HQ Location"
            ></iframe>
          </div>
        </div>


      </div>
    </div>
  );
};

export default FindUs;

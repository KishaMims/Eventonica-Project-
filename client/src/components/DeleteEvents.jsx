import React from 'react'
import { useState } from 'react';

export default function DeleteEvents({ handleDeletEvent} ) {
    const [eventID, setDeleteEvent] = useState("");
  return (
    <div>
          <h3>Delete Event</h3>
        <form id="delete-event" 
        action="#" 
        onSubmit={(ev) => {
            ev.preventDefault();
            handleDeletEvent(eventID);
            setDeleteEvent("");
        }}
        >
            <fieldset>
              <label>Event ID</label>
              <input 
              type="number" 
              min="1" 
              id="delete-event-id"
              value={eventID}
              onChange={(e) => setDeleteEvent(e.target.value)}
              />
            </fieldset>
            <input type="submit" />
          </form>
        </div>

  )
}

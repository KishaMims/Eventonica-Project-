import React, { useReducer } from 'react'
import formReducer from "./formReducer.js";
import { useState } from 'react';

const event1 = {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
};

const event2 = {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
};

const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
};



const EventsForm = () => {


    const initialFormState = {
        name: "",
        id: "",
        description: "",
        category: "",
        date: ""
    };
    const [events, setEvents] = useState([event1, event2, event3]);
    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    const handleInputChange = (e) => {
        dispatch({
            type: "HANDLE TEXT INPUT",
            field: e.target.name,
            payload: e.target.value
        });
    };
    console.log(formState);
    // const handleSubmit =(e) =>
    // e.preventDefault();
    // setEvents([...events, setEvents]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = formState
        // const newEvent = {initialState};
        //setEvent -> copying what is already there by using ...events
        setEvents([...events, newEvent]);
    }

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     const newEvent = { id: id, name: name, email: email, description: description, category: category};
    //     setEvents([...events, newEvent]);
    //  {events.map((event, index) => <li key={index}>{event.date}<br/>{event.name}: {event.description} </li>)}
   
    return (
        <div>
            <section className="event-management">
                <h2>Event Management</h2>
                <div>
                    <h3>All Events</h3>
                    <ul id="events-list">{/* Display all Events here */}
                        {events.map((event, index) =>
                            <li key={index}> {event.id} {event.name} {event.date} {event.description} {event.category}
                            </li>
                        )}
                    </ul>
                    <h3>Add Event</h3>
                    <form id="add-event" action="#" onSubmit={handleSubmit}>
                        <fieldset>
                            <label>
                                Name</label>
                            <input
                                type="text"
                                id="add-event-name"
                                name="name"
                                //placeholder="Enter Event Name"
                                value={formState.name}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </fieldset>
                        {/* Add more form fields here */}
                        <fieldset>
                            <label>
                                Id
                            </label>
                            <input
                                type="text"
                                id="add-id-name"
                                //placeholder="Enter ID"
                                name="id"
                                value={formState.id}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </fieldset>
                        <fieldset>
                            <label>
                                Description</label>
                            <input
                                type="text"
                                id="add-description-name"
                                name="description"
                                //placeholder="Enter Description"
                                value={formState.description}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </fieldset>
                        <fieldset>
                            <label>
                                Category</label>
                            <input
                                type="text"
                                id="add-category-name"
                                name="category"
                                //placeholder="Enter Category"
                                value={formState.category}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <fieldset>
                                <label>
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="add-event-date"
                                    name="date"
                                    //placeholder="Enter Event Name"
                                    value={formState.date}
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </fieldset>
                            <input type="submit" />
                        </fieldset>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default EventsForm;
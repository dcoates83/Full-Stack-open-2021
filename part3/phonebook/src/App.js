import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import FilterNotes from "./components/filter";
import InputFilter from "./components/input";
import Form from "./components/form";
import utils from "./services/service";

const Notification = ({ message, response }) => {
  if (message) {
    return <div className='success'>{message}</div>;
  } else if (message === false) {
    return (
      <div className='error'>
        {response} has already been deleted from the server, please refresh the
        page
      </div>
    );
  } else return null;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [response, setResponse] = useState();
  const baseUrl = "/api/persons";
  // Fetch person data from json-server
  useEffect(() => {
    axios.get(`${baseUrl}`).then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    axios.get(`${baseUrl}`).then((response) => {
            // Check to see if there is someone already
      let check = response.data.find((person) => {
        return (
          person.name === newName.charAt(0).toUpperCase() + newName.slice(1)
        );
      });
// If not true, then create the object
      if (!check) {
        const noteObject = {
          name: newName,
          phone: newPhone,
        };
      
        utils.create(noteObject)
          .then((returnedPerson) => {
          console.log(returnedPerson);
        });

        setPersons(persons.concat(noteObject))
        setNewName("");
        setNewPhone("");
        setErrorMessage(`Added '${noteObject.name}'`);
        setTimeout(() => {
          setErrorMessage(null);
          window.location.reload();
        }, 5000);
      } else {
        // alert(`${newName} has already been added`)

        const newObject = {
          name: check.name,
          phone: newPhone,
          id: check.id,
        };

        utils.update(newObject);
        setNewName("");
        setNewPhone("");
        window.location.reload();
      }
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <InputFilter value={filter} setFilter={setFilter} />
      <h3>Add a New</h3>
      <Form
        newName={newName}
        addNote={addNote}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
      />

      <h2>Numbers</h2>
      <Notification
        message={errorMessage}
        persons={persons}
        response={response}
      />
      <FilterNotes
        persons={persons}
        filter={filter}
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage}
        setResponse={setResponse}
      />
    </div>
  );
};


{/* <h1> Languages <\h1>

HTML & CSS // Advanced

CSS Preprocessors
(SCSS/SASS, Tailwind, Bootstrap, Webpack) // Advanced low */}

Let knowledge = [
  { javaScript: "Intermidiate-High" },
  { react: "Intermediate" },
  {
    node: {
      express: "Novice"
    }
  }];
// bash echo “Intermediate hello world”

// <!~~ Software ~~>

// Github, Git: git commit -m ”Intermediate High”

// SEO - metadata title="Novice Mid"

// Static Site Generators - SSG:
// Gatsby "Intermediate Low", Jekyll-"Novice High"

// Content Management Systems - CMS:
// Strapi - "Novice Mid", Contentful - "Novice Mid", Netlify-CMS - "Intermediate"

// Hosting:
// Netlify, Heroku, GitHub

// query Databases {

// skill(level:"novice"){
// GraphQL
// MongoDB
// }
// }

// Other stuff:
// Figma - Novice, API, EsLint, Prettier, Testing, Debugging, Ajax, SOLID

// The levels of proficiency of my knowledge are listed above.

// This is meant to be written in a fun way. If you don’t know the various code, it can look confusing. Ask and I can clarify further!


export default App;

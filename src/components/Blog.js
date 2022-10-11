import { Accordion } from "flowbite-react";
import React from "react";

const Blog = () => {
  return (
    <Accordion style={{"margin-top": "50px"}} flush={true}>
      <Accordion.Panel>
        <Accordion.Title><h1 className="text-2xl text-amber-700">Purpose of react router?</h1></Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500">
          React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title><h1 className="text-2xl text-amber-700">How context API works?</h1></Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          <h1 className="text-2xl text-amber-700">Describe something about useRef hook?</h1>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Blog;

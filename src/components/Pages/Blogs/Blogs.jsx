import React from 'react';
import { Helmet } from 'react-helmet';
import WaveStart from '../../Shares/Wave/Wave';

const Blogs = () => {
  return (
    <>
      <Helmet><title>Blogs</title></Helmet>

      <WaveStart></WaveStart>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 mx-8">
        <div className="card w-full cardbackground shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> Question 1 :   What are the different ways to manage a state in a React application ? </h2>
            <p>
              React's useState is the best option for local state management.
              If you need a global state solution, the most popular ones are Redux and
              MobX. Your choice will depend on the
              size of your project, your needs, and your engineers' expertise.
            </p>
          </div>
        </div>

        <div className="card w-full  cardbackground shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used
              to add methods and properties in objects. It is a method by which
              an object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the
              Prototype of an object, we use Object.
              getPrototypeOf and Object.</p>
          </div>
        </div>
        <div className="card w-full  cardbackground shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> What is a unit test? Why should we write unit tests?</h2>
            <p>
              1 * Unist testing:
              Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. “Unit testing is a great discipline,
              which can lead to 40% – 80% reductions in bug density.”
              2* Use of unit testing :
              Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components
            </p>
          </div>
        </div>

        <div className="card w-full  cardbackground shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> React vs. Angular vs. Vue ?</h2>
            <p>
              Vue  provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular and React
              with respect to their functionality like the use of components. Hence,
              the transition to Vue from either of the two is an easy option and
              Angular is a highly popular web development
              framework that offers rich user experiences, fast responsiveness, and
              code maintainability.
            </p>
          </div>
        </div>


        <div className="card w-full  cardbackground shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> Payment system</h2>
            <p>You can use this three of any number to payment us.  Beacause this is demo of payment not real.</p>
            <br />
            <p>
              4242424242424242
            </p>
            <p>
              4000056655665556
            </p>
            <p>
              2223003122003222
            </p>
          </div>
        </div>


        <div className="card w-full  cardbackground shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> WHY DSA</h2>
            <p>
              **Data Structures and Algorithms (DSA)** refer to the study of methods for organizing and storing data and the design of procedures (algorithms) for solving problems that operate on these data structures. It's a fundamental part of computer science that teaches you how to think and solve complex problems systematically. DSA skills are crucial for every computer science student. Learning DSA involves several steps:
              1. **Learn at least one programming language**: Choose a language you're comfortable with.
              2. **Learn Data Structures**: Understand essential components like arrays, linked lists, stacks, queues, trees, and graphs. These structures help organize and store data efficiently.
              3. **Learn Algorithms**: Study various algorithms for solving specific problems. Algorithms are closely related to data structures.
              4. **Understand Time and Space Complexities**: Analyze the efficiency of your algorithms.
              5. **Practice Problems**: Solve DSA problems to reinforce your understanding¹. Remember, using the right data structure and algorithm can significantly improve program performance, especially when dealing with large datasets². 🚀
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Blogs;
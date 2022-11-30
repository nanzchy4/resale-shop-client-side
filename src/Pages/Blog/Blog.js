import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-9/12 lg:max-w-5xl mx-auto'>
            <div className="card w-full mb-8 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p >There are four main types of state you need to properly manage in your React apps:
                        1.Local state  2.Global state 3.Server state 4.URL state</p>
                    <p><span className='font-bold'>Local (UI) state </span>: Local state is data we manage in one or another component.
                        Local state is most often managed in React using the useState hook.
                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.<br />
                        <span className='font-bold'>Global (UI) state</span> : Global state is data we manage across multiple components.
                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.<br></br>
                        <span className='font-bold'>Server state</span> : Data that comes from an external server that must be integrated with our UI state.
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                        Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br></br>

                        <span className='font-bold'>URL state </span>: Data that exists on our URLs, including the pathname and query parameters.
                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                       </p>
                </div>
            </div>

            <div className="card w-full mb-8 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> How does prototypical inheritance work?</h2>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
                </div>
                <div className="card w-full mb-8 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"> What is a unit test? Why should we write unit tests?</h2>
                        <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
                            <br></br>
                            A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                            Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.<br></br>
                            Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.

                            Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.
                        </p>
                    </div>
                </div>
                <div className="card w-full mb-8 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"> React vs. Angular vs. Vue?</h2>
                        <p className='font-bold'>Angular vs React</p>
                        <p>
                            React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                            React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.</p>
                        <p className='font-bold'>React vs Vue</p>
                        <p>
                            The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.</p>
                        <p className='font-bold'>Angular vs Vue</p>
                        <p>
                            In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.</p>
                    </div>
                </div>
            </div>
    );
};

export default Blog;
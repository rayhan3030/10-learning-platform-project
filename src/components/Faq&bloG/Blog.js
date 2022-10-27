import React from 'react';

const Blog = () => {
    return (
        <div className='flex justify-center mt-20 min-h-screen'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Language Biz</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Welcome to Language Biz Learning Platform</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Knowledge is Power</p>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-purple-300 font-semibold">What is Cors ?</summary>
                            <div className="px-4 pb-4">
                                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                                    For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-purple-300 font-semibold">How Does Private Route Works ?</summary>
                            <div className="px-4 pb-4">
                                <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

                                    The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                                    The App component is the root component of the example app, it contains the outer html, main nav and routes for the application.

                                    The /login route is public, and the home route (/) is protected by the private route component that uses Redux to check if the user is logged in.

                                    The last route is a catch-all redirect route that redirects any unmatched paths to the home page.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-purple-300 font-semibold">why are we using firebase?  What other options do we have to implement authentication?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login. This tutorial gets you started with Firebase Authentication by showing you how to add email address and password sign-in to your app.
                                    Before talking about how your app authenticates users, let's introduce a set of tools you can use to prototype and test Authentication functionality: Firebase Local Emulator Suite. If you're deciding among authentication techniques and providers, trying out different data models with public and private data using Authentication and Firebase Security Rules, or prototyping sign-in UI designs, being able to work locally without deploying live services can be a great idea.

                                    An Authentication emulator is part of the Local Emulator Suite, which enables your app to interact with emulated database content and config, as well as optionally your emulated project resources (functions, other databases, and security rules).
                                    It provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google,
                                    Firebase Authentication is a tool in the User Management and Authentication category of a tech stack. Example <br />
                                    * Auth0 <br />
                                    * MongoDB <br />
                                    * Passport <br />
                                    * Keycloak <br />
                                    *Okta <br />
                                </p>

                            </div >
                        </details >
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-purple-300 font-semibold">What is Node? How Does Node works?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                                    Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                                    Node.js basically works on two concept

                                    Asynchronous
                                    Non-blocking I/O
                                    Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.

                                    Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

                                    To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

                                    Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

                                    Libuv implements two extremely important features of node.js

                                    Event loop
                                    Thread pool
                                    Event loop: The event loop contains a single thread and is responsible for handling easy tasks like executing callbacks and network I/O. When the program is to initialize all the top-level code is executed, the code is not in the callback function. All the applications code that is inside callback functions will run in the event loop. EventLoop is the heart of node.js. When we start our node application the event loop starts running right away. Most of the work is done in the event loop.

                                    Nodejs use event-driven-architecture.

                                    Events are emitted.
                                    Event loop picks them up.
                                    Callbacks are called.
                                    Event queue: As soon as the request is sent the thread places the request into a queue. It is known as an event queue. The process like app receiving HTTP request or server or a timer will emit event as soon as they are done with the work and event loop will pick up these events and call the callback functions that are associated with each event and response is sent to the client.

                                    The event loop is an indefinite loop that continuously receives the request and processes them. It checks the queue and waits for the incoming request indefinitely.

                                    Thread pool: Though node.js is single-threaded it internally maintains a thread pool. When non-blocking requests are accepted there are processed in an event loop, but while accepting blocking requests it checks for available threads in a thread pool, assigns a thread to the client’s request which is then processed and send back to the event loop, and response is sent to the respective client.</p>

                            </div>
                        </details>
                    </div >
                </div >
            </section >
        </div >
    );
};

export default Blog;
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                                <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                            </div>
                        </details>
                    </div >
                </div >
            </section >
        </div >
    );
};

export default Blog;
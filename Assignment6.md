1- what is microservices?
-ans -Frontend application is broken into smaller components called microservices, UI, DB, Authentication, Backend etc are diffrent and they make calls to each other and execute the required work.Microservices can be scaled independelty .
----------------------------------------------------------------------------------
2- What is monolith structure?
ans- Monolith structure , where the whole frontend is build as a single unit. all the units, UI, data layer, logic are a single codebase.
To implement a monolithic framework in React JS, you would create a single React app containing all of your application’s code.
--------------------------------------------------------------------------------
3- Difference between Monolith and Microservices
ans- monolith architecture is applied where a small app is build or when there are fewer developers. while, microserivces architecture apps required a lot of developers since there is a seperate react app for each microservice. 
microservices are more flexible than monolithic structure because every microservice can be developed and maintained independatly.
-------------------------------------------------------------------------------
4 - Need of Use Effect Hook?
- it takes two argumets -One is callbackfunction and other is a dependency Array.

-------------------------------------------------------------------------
5- What is shimmer UI ?
ans- ShimmerUI is a ui which is mimicking our website . it does not contains any data or something it is just there to give a effect for user and give a sense to user . it is usually rendered while the actual data is being fetched. 
it make our UI look better and gives better user experience.
---------------------------------------------------------------------
6- Diffren b/w Js expression and JS Statement?
ans- Statements are declared. for eg let x=10;
whilist, expressions are used where we expect some value, {2+2} for example
----------------------------------------------------------------------
7- Conditional Rendering?
ans- We use conditional statements so that if there is somekind of error or something happens which is not supposed to happen happens can be handled,. 
for example in our app code we have used conditional rendering, if there are no restro. list are returned from APICALL we will show the ShimmerUI otherwise we simply display our results.
 
 return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (// body component Code)
--------------------------------------------------------------------
8- CORS?
ans-Stands for CROSS-ORIGIN-RESOURCE-SHARING. it is mechanism using which resources can be shared between websites running on diffrent domains.by default it is not allowed by browser for security purposes. using CORS server can make exception so that those exempted sites can access resources. 
--------------------------------------------------------------------
9- What is Async and Await ?
ans- async word is used before a function that the fucntion will return a promise. Promise have three states - PENDING, RESOLVE, REJECT.
even if we dont use return keyword js will automatically wrap returned value to a promise.
await keyword is used only with async function. it will make JS to wait(stop executing next line) untill Promise returns a result (RESOLVE/REJECT).
---------------------------------------------------------------------
10- Use of " const apiData = await data.json();" in my code .
ans-  We take await keyword here will make sure to wait untill the promise is resolved or reject and is converted to json object before executing the next line of code . by using await we dont have to use .then() methods or callback functions.
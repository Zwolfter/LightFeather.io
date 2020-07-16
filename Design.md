When I started thinking about the ShiftCipher part of the project and how I would approach a solution, the thing that kept going through my head was simplicity.
Too often programmers use frameworks because its the newest and "BEST" thing.  However this particular situation the api was simply wrapping an algorithm, NOT a backend service, or a database call or some large calculation of data.  So something simple was in order, no need to complicate the process.  I needed as webserver to handle the http calls and a language I could use to manipulate the JSON so Javascript and Node.js were the tools that seemed most appropriate.

To start with I created a collection in Postman to handle the client side calls.(you can take advantage of this as I added it to the project in the ShiftCipher folder).
I did not write the actual CeaserShift Javascript module,  I found that online.  Big thing in programming, Don't reinvent the wheel.  So I found this nice little free use javascript module.  Which I actually found a bug in and had to modify it a bit.  I may run a fork of his code and send a pull request to update his code, which is cool.  I've never had to do that with code out there on the web, only local repositories of colleagues.

I also added the /api/decode to the service because if you have encode, you should have a decode.

When I started working on the Registration form I decided to use node.js to serve as a simple webserver.  There was no requirement for any backend services, but using a webserver to server up the html made things easier.
I also decided to use as much of the built in HTML5 validation, because once again, don't reinvent wheels.  So with a bit of CSS and a few javascript validation functions, the Form now preforms just as the requirements specify.

This has been a fun experience.

Thanks,
Matthew Davidson

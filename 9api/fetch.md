
The fetch() function in JavaScript is used to make network requests, similar to XMLHttpRequest, but it provides a more modern, flexible, and powerful way to work with asynchronous operations. It is part of the Web APIs and works with promises, making it easier to handle responses and errors.


.this = current context (currently konta ude kartoy to);
jar ekach object madhe username varti define ahe ani tych obj madhe ek function define kel ani ty madhe jr username ghyach asel tr .this vaprla jato

ex {
    const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        
         console.log(`Username: ${this.username}`);

        console.log(this);
    }

}
}

jason =>

In JavaScript, JSON (JavaScript Object Notation) is a lightweight data format used for storing and transporting data, typically between a server and a web application. Although JSON is inspired by JavaScript object syntax, it is a text format that is language-independent and used across various platforms.
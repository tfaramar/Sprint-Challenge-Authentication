# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add your _Team Lead_ as collaborator on Github.
- [ ] Clone your forked version of the Repository.
- [ ] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

Using sessions makes it possible to persist authentication information although new requests are made and the server refreshes. User sessions are stored in memory either via files or in the database on the server. When a user logs in with valid credentials, a new user session is created and a logged-in cookie is sent to the browser. When the user makes an authenticated request, they send the cookie to the backend, and the server checks the session based on the cookie, authenticates the user, and sends a response to the browser.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

Bcrypt uses hashing, a one-way process in which the password is translated into a string. By hashing the password before it is passed into the database, we never actually store the plaintext password in the database — and because it is hashed, the string that is stored can never be turned back into the password. 

- [ ] What does bcrypt do to slow down attackers?

Bcrypt autogenerates and adds a “salt”, a unique string, to the password before hashing it. The plaintext password and salt are hashed together, creating a string that is longer than the password alone. Length increases the number of possible combinations and therefore makes it much more difficult (/time intensive) for hackers to decipher a hashed password. It also allows the developer to select a base 2 number of times that the hash will be re-hashed. 

- [ ] What are the three parts of the JSON Web Token?

The three parts of a JSON Web Token (JWOT) are 1) the header, 2) the payload, and 3) the signature. The header contains the key of the algorithm used to make the token, and the type of token. The payload includes information that we want to store in the token. Lastly, the signature is created when the header and payload are encoded together and ‘signed’ with a secret string. 

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [ ] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!

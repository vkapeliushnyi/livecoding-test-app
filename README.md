This file contains info about the interview.

# Getting started

- `npm install`
- `npx json-server -p 8000 --watch db.json` (Launching fake REST API)
- `npm start` (Launching app)

# Already implemented

- 3 Pages(Home Page, Admin Page, User Page) and base routing between them.
- db.json file which contains array of users and getUsers method to fetch list of users.
- Bootstrap library cdn to create styles.

# Task

1. Read and understand the requirements from the [REQUIREMENTS.md](REQUIREMENTS.md)

2. Produce a breakdown of work with estimated time for each subtask and some details about the task.

Use 3-points estimate approach where each job is estimated in 3 figures:

    1. Optimistic estimate - Accounts for positive risks
    2. Best guess estimate - No risks occur
    3. Pessimistic estimate - Accounts for negative risks

Example:
You have to make implement login form in the project that you're not familiar with. You suggest that you will be
able to copypaste boilerplate code from some other login form for a different resource, but you cannot be sure because you
haven't yet seen the code base.

Optimistically you expect to copypaste the code and simply replace the resource name.
Pessimistically you expect that all the code in this codebase is horrible, and you'll have to write your own CRUD from
scratch.
Best guess estimate is something in between

Work breakdown example:

Create login form layout - 5m - 20m - 1h
Add styles to login form - 5m - 10m - 15m
Add login form fields handling - 1m - 5m - 10m
Add fields validation - 5m - 10m - 15m
Update routing - 1m - 5m - 10m

This is impossible to implement all the requirements during the interview session. So don't worry about completing
everything, just focus on going as far as possible as fast as possible 😁

3. Start implementing the features presented

# Hint

Feel free to use google 😁
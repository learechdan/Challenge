# Challenge

Features
● Ability to view a gallery of movies.
○ Sorting system (top, trending, popular… etc…)**
○ Picture/thumbnail for the movie**
○ Description of movie**
○ Genre: Comedy, Romance, Drama, etc…**
● Ability to create a profile.
● Ability to rate movies.
○ Rating: 5 star system?
● Ability to modify ratings a user has given.**
● Ability to delete movies entirely from their profile.**
● Ability to search for a movie**
**Features marked with two asterisks are considered lower priority

What I think about is :
- Using Node.js for backend coding
- Connect to MongoDB
- Each user has an array of JSON {title: xx (ID of the movie), rating: y}
- When user adds a rating, we make sure that he adds a rating between 1 and 5
- The user profile, to be simple in the timeframe that i have, will be: unique username & password (if i have time left, the password will be hashed using jwt)
- We don't want to delete from the DB, we should keep everything tracked. So when user deletes movie from profile, we can add an element to the JSON as deleted: true.
When the user get his movies, we don't show him the deleted ones
- Search for a movie: GET request

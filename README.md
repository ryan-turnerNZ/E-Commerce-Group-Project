# How to use our system

1. Navigate into the folder

```
cd team4rentflix/Angular/Rentflix
```

2. Install dependencies

```
npm install
```

3. Run the application in your browser

```
ng serve
```

4. Explore the application at `http://localhost:4200/`

Alternatively, view our app at https://rent-flix.herokuapp.com/
```
Username: annisha
Password: password
```

Enjoy!


# Our REST interface

### User end points

**GET `/user/authentication`**\
Verifies user's log in details and generates log in token on success

**DELETE `/user/authentication`**\
Destroys user's log in token and logs out user

**GET `/user/details`**\
Returns user's account information

**POST `/user`**\
Creates a new user

**PUT `/user`**\
Updates a user's name

**DELETE `/user`**\
Deletes a user's account

**GET `/user/password`**\
Generates an email to reset password

**GET `/user/password/{token}`**\
Resets the password of a user with the given `token`


### Cart end points
**GET `/cart`**\
Returns a list of all `movie` objects within the cart of an authenticated user

**POST `/cart`**\
Adds an item to the cart for the authenticated user

**DELETE `/cart/{item_id}`**\
Deletes the `movie` object with matching `item_id` from the authenticated user's cart


### Order end points

**GET `/orders`**\
Returns a list of all `movie` objects within the orders list of past purchases for an authenticated user

**POST `/orders`**\
Adds an item to the orders list of past purchases for an authenticated user

#### Note: we also use the publicly available TMDB (The Movie Database) API

# Error handling

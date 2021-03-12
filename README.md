# Google-Book-Search

## Description
This is an application that allows users to search and save books. It is built using the Google Books API, MERN stack (MongoDB, Express, React and Node), Bulma framework and Socket.io. 

* Link to the app on Heroku: https://google-search-book-api-react.herokuapp.com/
* Link to the Github repository: https://github.com/akwanmtl/Google-Book-Search


## Table of Contents

* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Usage 

Here is the demo of the application.

![Google Book Search walkthrough](demo.gif)

On the homepage, the user can search for a book. The Google Books API will provide a list of books that is shown to the user who can then choose to view the details in Google Books or can save it in their saved list. In the saved page, all the books that have been saved will be shown and the user can choose to remove the book from the list as well as view it on Google. 

There is the addition on use Socket.io to show notifications when a book has been added or removed from the saved list. The notifcation will appear for a short duration to all open pages of the website application. 

Here is the demo showing the notifications appearing on two browser pages at the same time.

![Socket walkthrough](demo-socket.gif)

## Credits

* [Photo by Clem Onojeghuo from Pexels](https://www.pexels.com/@conojeghuo)
* [Bulma](https://bulma.io/)
* [Bulma Navbar Toogle with React Hooks](https://dev.to/eclecticcoding/bulma-navbar-toogle-with-react-hooks-18ek)
* [How To Setup Bulma CSS Frameowrk with React Under 5 Minutes](https://medium.com/@thexap/how-to-setup-bulma-css-framework-with-react-under-5-minutes-a3d8c2c33a87)
* [Socket.io](https://socket.io/)
* [Sockets with express router](https://stackoverflow.com/a/31732867)
* [Font Awesome](https://fontawesome.com/)
* [License badge link](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) [2021] [Annie Kwan]
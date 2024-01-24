# e-Shop

## Resources

### Fonts

- Krona One
  - https://fonts.google.com/specimen/Krona+One

### Icons

https://www.icons8.com

- Vinyl
  - https://icons8.com/icon/nkCsuxTboA0z/vinyl
- Cart
  - https://icons8.com/icon/zhda2EVBCvHY/cart
  - https://icons8.com/icon/Vfx42bq0G2lJ/cart
- Search
  - https://img.icons8.com/sf-regular/48/000000/search.png
- Favourite
  - https://icons8.com/icon/64767/favourite
  - https://icons8.com/icon/fzAoxIsUMv0P/favorite
- Right chevron
  - https://icons8.com/icon/85789/chevron
- Left chevron
  - https://icons8.com/icon/88110/chevron
- Instagram
  - https://icons8.com/icon/RhYNENh5cxlS/instagram
- X
  - https://icons8.com/icon/phOKFKYpe00C/twitterx
- Facebook
  - https://icons8.com/icon/434/facebook
- TikTok
  - https://icons8.com/icon/aaoukT8evpOE/tiktok
- Spotify
  - https://icons8.com/icon/99983/spotify
- Bin
  - https://icons8.com/icon/nerFBdXcYDve/bin

### Design Inspiration

https://dribbble.com/shots/22395878-Vinyl-Records-E-Commerce-Store

https://dribbble.com/shots/11037958-E-commerce-App-Dark-Mode

https://dribbble.com/shots/23222296-Vogue-Ecommerce-of-clothing-and-footwear

https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bb145c57779427.59e3bcce5efa9.jpg

## Task Completion History

### January 24, 2024

- Linked button in carousel to corresponding product page
- Made audio format buttons on product page functional and applied styling depending on whether the audio format is or isn't selected
- Created and styled NumberInput component that has a minimum and maximum input value based on the available quantity of the selected product

I've managed to make the buttons representing the available audio formats of a product functional. When on a specific product page, clicking a different audio format displays it's corresponding price. I've also created a re-usable NumberInput component to deal with quantities. Additionally, I added a wrapper component, PaddingWrapper, to mimic the spacing of content as designed in my mockup.

### January 23, 2024

- Added additional products to Firestore database
- Made each product card a link to a corresponding product page via React Router DOM
- Added foundational content to display in produce page component
- Created cart and favourites pages, added links to such pages into navigation bar, and constructed context for cart
- Created cart feature-related components and begun functionality

Today, I was able to create a product page to display a selected user-selected product on the 'Products' page. It doesn't display all available audio formats for sale, nor does it allow for proper user interactivity, but the foundations are there!

I've also added pages for favourited products and the user's shopping cart with corresponding buttons in the navigation bar. The 'Cart' page in particular displays information fetched from the Firestore database; via a function that grabs information in the 'cart' collection. The next step is to figure out how I want to properly store cart items in the Firestore database. This'll probably involve me having to sketch out a schema.

One of the small tasks I completed was styling the overlaying information of the carousel component. I found that PNG images cannot have a drop shadow applied to the image itself; it was applying around the border of the image instead. I managed to fix this with the help of this [Stack Overflow post](https://stackoverflow.com/questions/3186688/drop-shadow-for-png-image-in-css).

The next big milestone to reach is a fully functional shopping cart feature. This would entail a user being able to add a specific audio format of a product to their cart, and allowing them to add a user-specified quantity.

### January 22, 2024

- Constructed a basic and function carousel component
- Created a Firestore database with some data
- Created fetching functions to grab data from Firestore database
- Utilised data fetched from Firestore database to display information in carousel component

I've created a simple carousel component for the landing page to showcase featured products. It's not pretty, but it works! It can be further refactored to increase the modularity of my code, but for now I'm focusing on the minimum viable product goals of this project. I've also managed to create a Firestore database with some data, made a reference to the service, and successfully fetched data from it to load information into the carousel component!

### January 18, 2024

- Started a design mockup of the React application
- Created basic header and functional navigation bar component

The first thing I needed to do was to brainstorm what my fake online store was going to sell, and came up with the idea of physical audio formats (i.e., CDs, vinyls, and cassettes). Since they're quite 'old', I thought it would be cool to contrast this with a modern aesthetic for the React application.

As usual, I started a design mockup of my fake online store (in Figma) to get a clear image of what I wanted the final product to look like. I went with a very simple colour palette which uses black as the background colour, white as the foreground, and a dark sky blue for an accent colour.

I've also constructed a basic header and a functional navigation bar to start off the code of this project.

## To-Do

### High Priority

- Sketch a schema for cart items
- Allow user to add a product with a specified quantity and format to the cart
- Allow user to favourite products
- Store cart items in Firestore database
- Store favourited items in Firestore database

### Medium Priority

- Format prices to 2 decimal places
- Create an enum for button variants and sizes
- Add animation and intervals to switching images in carousel
- Add content to Returns page
- Add content to Privacy Policy page
- Add content to Terms of Service page
- Make subscription form in footer functional

### Low Priority

- Format and re-structure 'Resources' section of `README.md` file
- Change icons in navbar to be filled icons when link is active
- Create an administrator portal to perform CRUD tasks on Firestore database

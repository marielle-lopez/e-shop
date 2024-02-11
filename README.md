![Vinyl icon](/vinyl.png)

# Sound

Welcome to Sound, your trusted source for exceptional audio products. Find CDs, cassettes, and vinyls of music from the top global artists and order them right to your door with just the click of a button. Prefer to shop in-person? Find one of our stores near you.

[Deployed version](https://shiny-marigold-33e42a.netlify.app)

## Task Completion History

### February 4, 2024

- Added loading states and spinners to improve UX
- Handled out-of-stock items
- Allowed Carousel component to automatically change its showcase image every 8 seconds
- Utilised React-Toastify library to add toast notifications

One of the important features I hadn't implemented until now was loading states and spinners; they inform the user that content is yet to display on the page — an important concept in UX.

Since I had items in the database that had quantities of 0, I had to handle these in a way to not only tell the user it was out-of-stock, but also to prevent them from adding such products to the cart. I did this by adding conditional rendering to the 'Add item to cart' button and NumberInput component. These two components would be replaced by the text 'Out of Stock' for items with quantities of 0.

One of the quality-of-life features I wanted to add to my application was toast notifications. This ended up being a really simple aspect to implement, which I did by using the [React-Toastify](https://fkhadra.github.io/react-toastify/) library. The only time toast notifications are used are when a user clicks the 'Add to cart' button on a product page.

### February 3, 2024

- Updated cart item quantity if a user added a product that already exists on the Cart page (also considers item's format)
- Allowed user to favourite/un-favourite products
- Displayed favourited products on Favourites page

Reaching the end of the timeblock to complete this project! Today's focus was finishing off the main functional features of this website, such as updating existing cart item quantities if a user added such products to their cart. In addition to this, I managed to allow the user to favourite/un-favourite products, and displayed favourited products on the Favourites page.

### January 30, 2024

- Fixed main content to fill remaining vertical space in browser

### January 27, 2024

- Added an 'On Sale' label to discounted products that would appear on the product page

Didn't have a lot of time today; majority of the work done today was associated with styling. I added a sale label that would display if a specific product variant was discounted, formatted prices to 2 decimal places and ensured product images are not stretched. The next mini goal would be to display the original price of discounted products, as well as show the percentage taken off from the original price.

### January 25, 2024

- Fixed a bug with the Button component when a prop function wasn't passed
- Added hover animations to links and buttons
- Created a backup database to use when quota on original database is reached
- Utilised ChatGPT to generate content for the Returns, Privacy Policy, and Terms of Service pages

There appears to be a bug with the email input in the footer. For some reason, you can't directly click on it to enter input. I utilised the element selector feature in the 'Inspect' view on my browser - it turns out that the overlaying carousel content lays on top of the email input. To fix this, I adjusted the carousel content wrapper height to match that of the carousel image.

I also changed the primary font of the application to Inter, which fit the aesthetic I was after better than Helvetica did.

Interestingly, I reached the quota on my database, so I had to create backup one to work with to continue developing. I will admit that my original database has a lot of data, and it doesn't help that I have a listener constantly watching for changes in my cart collection. So, my backup database contains much less data (only 2 products). I'd like to see if I can reduce the amount of reads from my original database and to help cut my reads and writes in half, I turned off Strict Mode.

I placed `console.log()` statements in each function that requests to interact with the database and found that the listener for cart data was being called many, many time - the quota drainer.

### January 24, 2024

- Linked button in carousel to corresponding product page
- Made audio format buttons on product page functional and applied styling depending on whether the audio format is or isn't selected
- Created and styled NumberInput component that has a minimum and maximum input value based on the available quantity of the selected product
- Created functions to add and remove products to cart from the product page

I've managed to make the buttons representing the available audio formats of a product functional. When on a specific product page, clicking a different audio format displays it's corresponding price. I've also created a re-usable NumberInput component to deal with quantities. Additionally, I added a wrapper component, PaddingWrapper, to mimic the spacing of content as designed in my mockup.

I've hit a milestone - I was able to implement the shopping cart feature, but it needs to be refined. The cart items rendered on the cart page immediately update the database and the cart page itself. At the moment however, if the same audio format of a product is added to the cart, and if that particular audio format of the product already exists in the cart, it doesn't adjust the quantity. It insteads renders a new cart item card. This is because in the database, a new cart item is generated instead of checking if the same product and its audio format already exists in the database.

The next step is to get the product information (specially the quantities of each available audio format) to display real-time quantities. I also need to consider other cases such as out-of-stock items and items that are not yet available for sale.

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


## Resources

- W3Schools
  - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
- Stripe for checkout
- Deployment with Netlify, Firebase, GitHub pages

### External Component Libraries

- [Material UI](https://mui.com/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/)

### Fonts

- [Krona One](https://fonts.google.com/specimen/Krona+One)
- [Inter](https://fonts.google.com/specimen/Inter)

### Icons

- [Vinyl](https://icons8.com/icon/nkCsuxTboA0z/vinyl)
- [Cart](https://icons8.com/icon/zhda2EVBCvHY/cart)
- [Search](https://img.icons8.com/sf-regular/48/000000/search.png)
- Favourite
  - [Outline](https://icons8.com/icon/64767/favourite)
  - [Filled](https://icons8.com/icon/59805/heart)
- [Right chevron](https://icons8.com/icon/85789/chevron)
- [Left chevron](https://icons8.com/icon/88110/chevron)
- [Instagram](https://icons8.com/icon/kfnjM4KPaLxk/instagram)
- [X](https://icons8.com/icon/yoQabS8l0qpr/twitterx)
- [Facebook](https://icons8.com/icon/8818/facebook)
- [TikTok](https://icons8.com/icon/118640/tiktok)
- [Spotify](https://icons8.com/icon/99983/spotify)
- [Bin](https://icons8.com/icon/nerFBdXcYDve/bin)

### Design Inspiration

- [Vinyl Records E-Commerce Store](https://dribbble.com/shots/22395878-Vinyl-Records-E-Commerce-Store) by Conceptzilla
- [E-Commerce App Dark Mode](https://dribbble.com/shots/11037958-E-commerce-App-Dark-Mode) by Gagandeep Singh
- [Vogue® - E-Commerce of Clothing and Footwear](https://dribbble.com/shots/23222296-Vogue-Ecommerce-of-clothing-and-footwear) by Haqqi Ilmiawan
- [Shopping Cart UI](https://www.behance.net/gallery/57779427/Shopping-Cart-UI) by Nnamdi Awili

### Other

- [ChatGPT](https://chat.openai.com/)

## To-Do

### High Priority

- Make showcase images change
- Add error handling
- Media queries
- Add placeholder images
- Add `config` directory to `.gitignore` file and mention in `README.md` for the read to request API key from project owner or to create their own Firestore service with a specific database schema
- Add NumberInput component to cart items on Product page
- Add subtotal price to Cart page
- Make page reset to top when footer links are clicked
- Fix changing width of number input component
- Show sale label for sale items on Products page
- Show cheapest price for products on Products page
- Refactor styling of footer icons
- Display real-time product quantities, especially when the user adds items to the cart

### Medium Priority

- Fix grid for last items on Products page
- Add contact information to footer
- Create an enum for button variants and sizes
- Add animation and intervals to switching images in carousel
- Make subscription form in footer functional
- Create a Contact page
- Create an Our Stores page
- Filter types of products
- Display when a product is on sale, show the product's original price as well
- Add product description to Product page
- Add React testing

### Low Priority

- Link cart items to their corresponding Product page but with specific format selected
- Implement a checkout feature (look at using Stripe)
- Make NavBar sticky to the top
- Format and re-structure 'Resources' section of `README.md` file
- Change icons in navbar to be filled icons when link is active
- Create an administrator portal to perform CRUD tasks on Firestore database
- Allow for user to sign in and sign out
- Add order history to user account
- Create a Careers page

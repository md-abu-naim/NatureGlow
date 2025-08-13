# 🌿 NatureGlow - Organic Skincare & Beauty Products

#### Live URL: [NatureGlow](https://natureglow-740e8.web.app)
#### Backend Repo: [Server Link](https://github.com/md-abu-naim/NatureGlow_Server)

## 📌 Overview
NatureGlow is a modern and user-friendly e-commerce website where customers can easily browse, search, filter, and purchase natural and organic skincare and beauty products. The project is built with a responsive design and dynamic features, ensuring a seamless experience across both desktop and mobile devices.

## 🛠️ Main Functionalities
### 1. User Registration & Authentication
#### Secure Registration and Login:
- Users can register by providing their name, email, and password.
- Default user role is "User." Admin roles can be updated manually.
- Sign In and Sign Up system using **Facebook** and **Google** authentication.
#### JWT (JSON Web Token):
- A JWT token is generated upon login to authenticate the user.
- The token is stored securely in cookies to maintain user sessions.
- Upon logout, the token is cleared from cookies, and users are redirected to the login page.

### 🌐 2. Public Routes
#### Home Page:
- **Navber:** Includes logo, navigation items, and a cart icon for the cart page. If no user is logged in → Shows **Sign In** and **Sign Up** buttons. If a user is logged in → Displays the user's name, profile, and **Sign Out** button instead.
- **Banner:** Banner with left-aligned welcome message, large bold project name **NatureGlow**, a short description, a **Shop Now** button, and an image on the right side.
- **Featured Categories:** Section displaying category cards with name, short description and image. Clicking a card navigates the user to the corresponding category page, where they can browse all products in that category with search and sorting options.
- **Best Selling Products:** Section displaying 8 products arranged in a grid layout, showcasing the top-selling items.
- **New Arrivals:** Section showcasing 8 latest products recently introduced to the store.
- **Promotional Section:** Promo Section With a left-aligned title, description, and a "Shop Now" button below, complemented by a skin-care related image on the right side.
- **Testimonials:** Section showcasing the best customer reviews along with their ratings.
- **FAQ:** Frequently Asked Questions providing answers to common user questions.
- **Newsletter Subscription:** section where users can subscribe to receive updates, news, and exclusive offers.
- **Footer:** section with navigation links, company information, contact details, and social media integration.

#### Shop Page
- **Page Title:** Section at the top of the page, displaying the title and description of the shop page.
- **Searching & Sorting:** Feature allowing users to search products by name and sort them by **Price: High to Low**, **Price: Low to High**, **Newest**, or **Best Selling**.
- **Filtering System (Left Side):** Enables users to filter products by **Category**, **Price Range**, and **Availability**.
- **Dynamic Results:** Updates the displayed products based on selected filters or search queries.
- **Product Cards (Right Side):** Displaying each product's **name**, **image**, **category**, **status**, **price**, along with **View Details** and **Quick Buy** buttons.
- **Pagination:** Allows users to navigate through multiple pages of products easily.

#### About Us
- **Page Title:** Section at the top of the page, displaying the title and description of the shop page.
- **Our Journey:** Section Left-aligned image with a heading and description on the right side.
- **Mission & Values:** Section highlights key principles such as **Natural Ingredients**, **Kind to All**, and **Transparency**, each accompanied by a short description.
- **Team Section:** Showcasing each team member with their **name**, **image**, and **position/role** within the company.
- **Newsletter Subscription:** section where users can subscribe to receive updates, news, and exclusive offers.

#### Contact Us
- **Page Title:** Section at the top of the page, displaying the title and description of the shop page.
- **FAQ:** Frequently Asked Questions providing answers to common user questions.
- **Newsletter Subscription:** section where users can subscribe to receive updates, news, and exclusive offers.
- **Contact Section:** Left side displays **address**, **Google Maps**, and **social links**, while the right side contains a **contact form** for users to get in touch.

#### Products Details
- **Product Details Section:** Left side displays the product **image**, and right side Shows product **name**, **category**, **price**, **status**, **description with features**, along with **Add to Cart** and **Quick Purchase** buttons.
- **Related Products:** Section displays other products related to the current product in **card format**.
- **Review Section:** Left side displays all reviews and ratings for the product, while the right side contains a form for customers to submit their own review and rating.

#### Cart Page
- **Page Title:** Section at the top of the page, displaying the title and description of the shop page.
- **Cart Section:** Displays all products added to the cart in a card format with a **delete button**; the right side shows the **order summary** for all added products, with data retrieved from **local storage**.

#### Checkout Page
- **Page Title:** Section at the top of the page, displaying the title and description of the shop page.
- **Customer Information Form:** Allows users to enter **name**, **email**(optional), **phone number**, **address**, and an **order note**(optional).
- **Products List:** Displays one or multiple products in **card format**, allowing users to **change quantity** and **delete** each product.
- **Order Summary:** Displays the total amount for all products, including **shipping charges** and the **grand total**.
- **Payment Method:** Allows users to choose from **Cash on Delivery**, with **Stripe** and **SSLCOMMERZ** (coming soon), and includes a **Place Order** button to confirm the order.


### 🔒 3. Private Routes
#### Dashboard (role-based)
- **Profile:** Allows users to view and update their **profile**, **change password**, **update name**, and **change profile/cover images** via modals.
- LogOut syestem and redirect to signIn page.

**Admin Dashboard**
- **Admin Dashboard Page:** Admin can view **daily, monthly, and yearly orders** with status, see **1-year user overview** and **last 7 days' user activity** via multiple charts, and manage **recent orders** in a table with details, **Update**, and **delete** options.
- **Products Page:** Displays all products in a **table format** with **pdate** and **Delete** options, and allows **searching by product name**.
- **Add Product Page:** Includes **page title** and input fields for **name**, **price**, **category**, **status**, **image**(file), and **description with features**.
  - With Product Update Page includes product update form.
- **Orders Page:** Displays **total order status** using cards and shows all orders in a **table format** with **details**, **Update**, and **Delete** buttons.
  - **Order Details:** Displays **customer information, order summary, ordered products**, and **status tracking** for each order.
- **Users Page:** Displays all users in a **table format** with **Update Role** and **Delete** buttons, along with **searching by name** functionality.

**User Dashboard**
- **User Dasboard:** Users can view **daily and total order status** via cards, see a **7-day order overview** in a chart, and check the **last week's orders** in a table format.
- **Orders Page:** Displays her **total order status** using cards and shows all orders in a **table format** with **details**, **Cancel**, buttons.
- **Address Book:** Users can **add or update** their addresses **through a form**.

##  🎨 UI/UX Design
- **Responsive Design:** The application is fully responsive, ensuring optimal performance on all screen sizes.
- **Error Handling:** Provides user-friendly error messages for login failures, registration issues, or failed operations.
- **Loading States:** Displays loaders or spinners during API calls like login or data fetching.
- **Toasts:** Notify users of actions such as "Login successful" or "Order placed."

## ⚡ Installation and Setup
To run the project locally, follow these steps:

**Clone the repository:**
```
git clone https://github.com/md-abu-naim/NatureGlow.git
cd <project_folder>
npm install
npm start

### Instructions

1. **Save the Content:** Save the above content into a file named `README.md` in the root directory of your project.
2. **Update Placeholders:** Replace `<repository_url>` and `<project_folder>` with the actual URL and folder name of your project.
3. **Review and Customize:** Review the content to ensure it accurately reflects your project's features and setup instructions. Customize any sections as needed.

This `README.md` file provides a comprehensive overview of your Bicycle Store Application, making it easier for users and developers to understand and set up your project.
```
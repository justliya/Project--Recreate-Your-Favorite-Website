
// Function 1: Simulate adding a product to a shopping cart
function addToCart(productName) {
  let cart = []; // Array to store cart items
  cart.push(productName); // Add the product to the cart
  console.log(`${productName} has been added to your cart.`);
  return cart;
}

// Function 2: Simulate submitting a user review
function submitReview(userName, rating, reviewText) {
  const review = {
    name: userName,
    rating: rating,
    text: reviewText,
  };
  console.log(`Review submitted by ${userName}:`);
  console.log(`Rating: ${rating} stars`);
  console.log(`Comment: ${reviewText}`);
  return review;
}

// Function 3: Simulate calculating total reviews
function calculateReviews(reviewsArray) {
  const totalReviews = reviewsArray.length;
  const averageRating =
    reviewsArray.reduce((acc, review) => acc + review.rating, 0) / totalReviews;

  console.log(`Total Reviews: ${totalReviews}`);
  console.log(`Average Rating: ${averageRating.toFixed(1)} stars`);
  return { totalReviews, averageRating };
}

// Function 5: Simulate an easily changeable announcement bar
function updateAnnouncement(newMessage) {
  let announcement = "Welcome to ParentCo! Your child’s safety is our priority.";
  console.log(`Previous Announcement: ${announcement}`);
  announcement = newMessage;
  console.log(`Updated Announcement: ${announcement}`);
  return announcement;
}


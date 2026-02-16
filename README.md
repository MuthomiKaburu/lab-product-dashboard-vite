# Product Dashboard (React)

A simple React app that displays a list of products and lets the user filter them by availability (All / In Stock / Out of Stock).  


# Features

- Display a list of products (name, price, and availability)
- Filter products using buttons:
  - All
  - In Stock
  -Out of Stock
- Show a friendly message when no products match the filter
- Clean component structure (reusable components)

---



# 1) Props

- `App` → `ProductList` via `products`
- `ProductList` → `ProductCard` via `product`

# 2) State (`useState`)
the current filter in state:
- `"all"` for all products
- `"in"` for in-stock only
- `"out"` for out-of-stock only

# 3) Filtering Data
We use `.filter()` to decide which products should remain in the list.
Remember:
- `filter()` must return true or false

# 4) Rendering Lists (`map`)
We use `.map()` to turn the array into UI components 

# 5) Conditional Rendering
We show different UI based on conditions:
- If the products list is empty → show `"No products found."`
- If `product.inStock` is true → show `"In Stock"` else `"Out of Stock"`



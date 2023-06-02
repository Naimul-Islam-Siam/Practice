import React, { useState } from "react";

const PRODUCTS = [
   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function SearchBar({ filterableText, inStockOnly, onFilterableTextChange, onInStockOnlyChange }) {
   return (
      <form>
         <input
            type="text"
            value={filterableText}
            placeholder="Search..."
            onChange={(e) => onFilterableTextChange(e.target.value)}
         />
         <label>
            <input
               type="checkbox"
               value={inStockOnly}
               onChange={(e) => onInStockOnlyChange(e.target.checked)}
            />
            {" "}
            Only show products in stock
         </label>
      </form>
   );
}

function ProductCategoryRow({ category }) {
   return (
      <tr>
         <th colSpan={2}>{category}</th>
      </tr>
   );
}

function ProductRow({ product }) {
   const name = product.stocked ? (
      product.name
   ) : (
      <span style={{ color: "red" }}>{product.name}</span>
   );

   return (
      <tr>
         <td>{name}</td>
         <td>{product.price}</td>
      </tr>
   );
}

function ProductTable({ products, filterableText, inStockOnly }) {
   const rows = [];
   let lastCategory = null;

   products.map((product) => {
      if (product.name.toLowerCase().indexOf(filterableText.toLowerCase()) === -1) {
         return;
      }

      if (inStockOnly && !product.stocked) {
         return;
      }

      if (product.category !== lastCategory) {
         rows.push(
            <ProductCategoryRow
               category={product.category}
               key={product.category}
            />
         );
      }

      rows.push(<ProductRow product={product} key={product.name} />);

      lastCategory = product.category;
   });

   return (
      <table>
         <thead>
            <tr>
               <th>Name</th>
               <th>Price</th>
            </tr>
         </thead>
         <tbody>{rows}</tbody>
      </table>
   );
}

function FilterableProductTable({ products }) {
   /*
      1. Identify components that use state:
         - `ProductTable` needs to filter the product list based on that state (search text and checkbox value).
         - `SearchBar` needs to display that state (search text and checkbox value).
      2. Find their common parent: The first parent component both components share is `FilterableProductTable`.
      3. Decide where the state lives: We’ll keep the filter text and checked state values in `FilterableProductTable`.
      
      So the state values will live in `FilterableProductTable`.
   */
   const [filterableText, setFilterableText] = useState("");
   const [inStockOnly, setInStockOnly] = useState(false);

   /*
      The state is owned by `FilterableProductTable`, 
      so only it can call `setFilterText` and `setInStockOnly`

      To let `SearchBar` update the `FilterableProductTable`’s state, 
      you need to pass these functions down to `SearchBar`
   */
   return (
      <>
         <SearchBar
            filterableText={filterableText}
            inStockOnly={inStockOnly}
            onFilterableTextChange={setFilterableText}
            onInStockOnlyChange={setInStockOnly}
         />
         <ProductTable
            products={products}
            filterableText={filterableText}
            inStockOnly={inStockOnly}
         />
      </>
   );
}

export default function App() {
   return (
      <div className="App">
         <FilterableProductTable products={PRODUCTS} />
      </div>
   );
}
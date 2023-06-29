import ProductTable from "./productTable";
import SearchBar from "./searchBar";

export default function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
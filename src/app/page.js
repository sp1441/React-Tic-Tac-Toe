import Image from 'next/image'
import styles from './page.module.css'
import FilterableProductTable from './components/filterableProductTable';


const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

const MORE_PRODUCTS = [
  { category: "Cars", price: "$29999", stocked: true, name: "Toyota" },
  { category: "Cars", price: "$27999", stocked: true, name: "Tesla" },
  { category: "Cars", price: "$4000", stocked: true, name: "Ford" },
  { category: "Trucks", price: "$70000", stocked: true, name: "Ford" },
  { category: "Trucks", price: "$78800", stocked: true, name: "Tesla" },
  { category: "Trucks", price: "$56000", stocked: true, name: "Toyota" }
]


function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <>
      {/* <FilterableProductTable products={PRODUCTS} />
      <FilterableProductTable products={MORE_PRODUCTS} /> */}

      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>

    </>
  );
}

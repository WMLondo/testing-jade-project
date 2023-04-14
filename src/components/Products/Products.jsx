import React from "react";
import classes from "./Products.module.css";
import ComboBox from "../ui/Input/ComboBox/ComboBox";
import ProductCard from "../ui/Card/ProductCard/ProductCard";

const sortByOption = [
  { label: "Ordenar por revelancia", value: "revelance", isDefault: true },
  { label: "Ordenar por mas nuevo", value: "new" },
  { label: "Ordenar por precio mayor a menor", value: "max-min-price" },
  { label: "Ordenar por precio menor a mayor", value: "min-max-price" },
  { label: "Ordenar por mejor vendidos", value: "best-selling" },
  { label: "Ordenar por mejor evaluacion", value: "best-rating" },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <div className={classes.header}>
        <h2>9,999 resultados para “producto”</h2>
        <ComboBox options={sortByOption} />
      </div>
      <div className={classes["products-container"]}>
        <ProductCard
          imgUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          imgAlt="maquillaje"
          productBrand="MAC"
          productTitle="Studio Fix Fluid SPF 15"
          productPrice="9,999.99"
          buttonLabel="AGREGAR"
        />
        <ProductCard
          imgUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          imgAlt="maquillaje"
          productBrand="MAC"
          productTitle="Studio Fix Fluid SPF 15"
          productPrice="9,999.99"
          buttonLabel="AGREGAR"
        />
        <ProductCard
          imgUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          imgAlt="maquillaje"
          productBrand="MAC"
          productTitle="Studio Fix Fluid SPF 15"
          productPrice="9,999.99"
          buttonLabel="AGREGAR"
        />
        <ProductCard
          imgUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          imgAlt="maquillaje"
          productBrand="MAC"
          productTitle="Studio Fix Fluid SPF 15"
          productPrice="9,999.99"
          buttonLabel="AGREGAR"
        />
        <ProductCard
          imgUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          imgAlt="maquillaje"
          productBrand="MAC"
          productTitle="Studio Fix Fluid SPF 15"
          productPrice="9,999.99"
          buttonLabel="AGREGAR"
        />
        <ProductCard
          imgUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          imgAlt="maquillaje"
          productBrand="MAC"
          productTitle="Studio Fix Fluid SPF 15"
          productPrice="9,999.99"
          buttonLabel="AGREGAR"
        />
      </div>
    </section>
  );
};

export default Products;

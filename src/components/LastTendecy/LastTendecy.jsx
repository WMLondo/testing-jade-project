import React from "react";
import QuickViewCard from "../ui/Card/QuickViewCard/QuickViewCard";
import classes from "./LastTendecy.module.css";

const LastTendecy = () => {
  return (
    <section className={classes["last-tendecy"]}>
      <h2 className={classes.title}>Lo ultimo en cuidado de la piel</h2>
      <div className={classes.options}>
        <QuickViewCard
          imageUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          tagLabel="MAC"
          tagUrl="store/label"
          titleLabel="Studio Fix Fluid SPF 15"
        />
        <QuickViewCard
          imageUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          tagLabel="MAC"
          tagUrl="store/label"
          titleLabel="Studio Fix Fluid SPF 15"
        />
        <QuickViewCard
          imageUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          tagLabel="MAC"
          tagUrl="store/label"
          titleLabel="Studio Fix Fluid SPF 15"
        />
        <QuickViewCard
          imageUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          tagLabel="MAC"
          tagUrl="store/label"
          titleLabel="Studio Fix Fluid SPF 15"
        />
        <QuickViewCard
          imageUrl="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
          tagLabel="MAC"
          tagUrl="store/label"
          titleLabel="Studio Fix Fluid SPF 15"
        />
      </div>
    </section>
  );
};

export default LastTendecy;

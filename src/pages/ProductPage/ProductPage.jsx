import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const pathVariables = useParams();
  const id = pathVariables.id;

  return <main>{id && <p>Product ID: {id}</p>}</main>;
};

export default ProductPage;

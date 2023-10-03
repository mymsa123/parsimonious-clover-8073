import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("Category") || []
  );
  const [order, setOrder] = useState(searchParams.get("order") || []);

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  useEffect(() => {
    let params = {
      Category: category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);

  return (
    <div className={styles.category}>
      <h3>Product Categories</h3>

      <div className={styles.category_list}>
        <div>
          <input
            type="checkbox"
            value={"Dietary Supplements"}
            onChange={handleCategory}
            checked={category.includes("Dietary Supplements")}
          />
          <label>Dietary Supplements</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Cough, Cold, Fever"}
            onChange={handleCategory}
            checked={category.includes("Cough, Cold, Fever")}
          />
          <label>Cough, Cold, Fever</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Nutrition"}
            onChange={handleCategory}
            checked={category.includes("Nutrition")}
          />
          <label>Nutrition</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Vitamins and Minerals"}
            onChange={handleCategory}
            checked={category.includes("Vitamins and Minerals")}
          />
          <label>Vitamins and Minerals</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Allergies"}
            onChange={handleCategory}
            checked={category.includes("Allergies")}
          />
          <label>Allergies</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Eye Care"}
            onChange={handleCategory}
            checked={category.includes("Eye Care")}
          />
          <label>Eye Care</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Personal Care"}
            onChange={handleCategory}
            checked={category.includes("Personal Care")}
          />
          <label>Personal Care</label>
        </div>
      </div>

      <h3>Sort By Price</h3>
      <div className={styles.radio_input_wrapper}>
        <div className={styles.category_list} onChange={handleOrder}>
          <div>
            <input
              type="radio"
              name="order"
              value={"asc"}
              defaultChecked={order === "asc"}
            />
            <label>Low to High</label>
          </div>
          <div>
            <input
              type="radio"
              name="order"
              value={"desc"}
              defaultChecked={order === "desc"}
            />
            <label>High to Low</label>
          </div>
          <div>
            <input
              type="radio"
              name="order"
              value={""}
              defaultChecked={order === ""}
            />
            <label>Reset</label>
          </div>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */
import "./exploremenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ catagory, setCatagory }) => {
  console.log(catagory);
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu </h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise.{" "}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((v, i) => {
          return (
            <div
              onClick={() =>
                setCatagory((e) => (e === v.menu_name ? "All" : v.menu_name))
              }
              className="explore-menu-list-item"
              key={i}
            >
              <img
                className={catagory === v.menu_name ? "active" : ""}
                src={v.menu_image}
              />
              <p>{v.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

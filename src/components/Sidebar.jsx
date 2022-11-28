import { Stack } from "@mui/material";
// import { useState } from "react";
import { categories } from "../utils/constants";
function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#FC1503",
              color: "#fff",
            }}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Sidebar;

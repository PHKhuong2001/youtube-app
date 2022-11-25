import { Stack } from "@mui/material";
import { useState } from "react";
import { categories } from "../utils/constants";
function Sidebar() {
  const [selected, setSelected] = useState("New");
  console.log(selected);
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
            className="category-btn"
            style={{
              background: category.name === selected && "#FC1503",
              color: "#fff",
            }}
            onClick={() => setSelected(category.name)}
          >
            <span
              style={{
                color: category.name === selected ? "white" : "red",
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

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useLocation, useNavigate } from "react-router-dom";
import { setActiveProd } from "../Redux/activeProdSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HomeTabs() {
  const { active } = useSelector((state) => state.activeProd);

  React.useEffect(() => {
    let val;
    if (active === "all" || active == "wooden") {
      val = 3;
    } else if (active === "bamboo") {
      val = 0;
    } else if (active === "earthenware") {
      val = 1;
    } else if (active === "art & paintings") {
      val = 2;
    }
    setValue(val);
  }, [active]);
  const [value, setValue] = React.useState(3);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let active = "";
    if (newValue === 0) active = "bamboo";
    else if (newValue === 1) active = "earthenware";
    else if (newValue === 2) active = "art & paintings";
    else if (newValue === 3) active = "all";
    else if (newValue === 4) active = "wooden";
    dispatch(setActiveProd(active));
    navigate("/all-products");
  };

  const handleClick = () => {
    navigate("/all-products");
  };

  let { pathname } = useLocation();

  return (
    <Box
      display={
        pathname === "/signin" ||
        pathname.startsWith("/users") ||
        pathname == "/my-account" ||
        pathname === "/signup" ||
        pathname === "/dashboard"
          ? "none"
          : "flex"
      }
      justifyContent="center"
      sx={{ width: "100%", bgcolor: "background.paper" }}
      padding={{ xs: "5px 0", sm: "10px 0" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ color: "#424874" }}
        aria-label="scrollable auto tabs example"
      >
        <Tab onClick={handleClick} label="bamboo" />
        <Tab onClick={handleClick} label="earthenware" />
        <Tab onClick={handleClick} label="art & paintings" />
        <Tab onClick={handleClick} label="all products" />
      </Tabs>
    </Box>
  );
}

import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

export default function GlobalStyles() {
  return (
    <MUIGlobalStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box"
        },
        html: {
          scrollBehavior: "smooth"
        },
        body: {
          backgroundColor: "#fafafa",
          color: "#263238",
          fontFamily: "Inter, Arial, sans-serif"
        },
        a: {
          textDecoration: "none",
          color: "inherit"
        },
        img: {
          display: "block",
          maxWidth: "100%",
          height: "auto"
        }
      }}
    />
  );
}

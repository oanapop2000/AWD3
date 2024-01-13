import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  navlinks: {
    display: "flex",
    marginLeft: "auto",
    alignItems: "center",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  button: {
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
    padding: "0px 0px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
  }
});

export default styles;

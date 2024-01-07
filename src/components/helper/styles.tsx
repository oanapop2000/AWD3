import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  navlinks: {
    display: "flex",
    marginLeft: 10,
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: 20,
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  button: {
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
    marginLeft: 20,
    padding: 0,
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
});

export default styles;

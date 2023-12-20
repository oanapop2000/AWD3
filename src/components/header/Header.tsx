import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import imageToAdd from "../header/logo_en.png";
import styles from "../helper/styles";

function Navbar() {

  const classes = styles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
            <img src={imageToAdd} alt="Image" />
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
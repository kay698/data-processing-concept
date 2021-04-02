import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { FooterNavItems } from "../../helpers/footerNavItems";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useStyles } from "./footer.styles";
import FooterSpots from "../../assets/Images/footerSpots.png";

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.footerGrid}>
      <img src={FooterSpots} alt="footer spots" className="droplets" />
      <Grid container className={classes.footerGrid__HeaderSection}>
        <h5 className={classes.footerGrid__HeaderText}>ARShakir</h5>
        <section className={classes.socials}>
          <a href="/" target={"_blank"}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="/" target={"_blank"}>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </a>
          <a href="/" target={"_blank"}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>
        </section>
      </Grid>
      <Grid container className={classes.footerGrid__linkSection}>
        <Grid className={classes.linksWrap}>
          {FooterNavItems.map((list, index) => (
            <Grid item key={index}>
              <h6>{list.header}</h6>
              <MenuList>
                {list.items.map((item, idx) => (
                  <MenuItem key={idx}>
                    <a href="/">{item}</a>
                  </MenuItem>
                ))}
              </MenuList>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container className={classes.footerGrid__copyrightSection}>
        <Grid>
          <MenuList>
            <MenuItem>
              <a href="/"> &copy;Copyright 2021</a>
              <a href="/"> Privacy policy</a>
              <a href="/"> Terms of service</a>
            </MenuItem>
          </MenuList>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;

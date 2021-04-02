import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  footerGrid: {
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    height: "max-content",

    "& img": {
      width: "100%",
      height: "120%",
      zIndex: "-1",
      position: "absolute",
      bottom: "0",
      objectFit: "cover",
    },

    // footer link items with media query
    "& a": {
      color: "#FFFFFF",
      textDecoration: "none",
      fontSize: "15px",
      lineHeight: "20px",
      letterSpacing: "0.2px",
      fontWeight: "normal",
      transition: "all .3s ease",

      "&:hover": {
        color: "#bbb",
      },

      "@media (max-width: 510px)": {
        fontSize: "12px",
        margin: "0",
      },
    },
  },
  footerGrid__HeaderSection: {
    backgroundColor: "inherit",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#F3F3F3 !important",
    padding: "0 13rem",

    "& h5": {
      fontWeight: "bold",
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "0.325px",
      color: "#F2994A",
      margin: "15px 0 30px 0",
      "@media (max-width: 420px)": {
        fontSize: "18px",
      },
    },
    "@media (max-width: 1110px)": {
      padding: "0.5rem 3rem",
    },
    "@media (max-width: 380px)": {
      padding: "0.5rem 2rem",
    },
  },

  footerGrid__linkSection: {
    backgroundColor: "inherit",
    padding: "1rem 2rem",
    flexDirection: "column",
    justifyContent: "center",
    color: "#F3F3F3 !important",

    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },

  footerGrid__copyrightSection: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "100px",
    alignItems: "center",
    "& a": {
      color: "#8D8D8D",
      fontSize: "14px",
      margin: "0 20px",

      "@media (max-width: 420px)": {
        margin: "0 10px",
        fontSize: "12px",
      },
    },
  },
  linksWrap: {
    display: "flex",
    margin: "2rem 0 2rem",
    padding: "0 11rem",
    justifyContent: "space-between",
    alignItems: "start",

    //media query for links body
    "@media (max-width: 1110px)": {
      padding: "0.5rem 3rem",
    },

    "@media (max-width: 600px)": {
      flexWrap: "wrap",

      "& .MuiGrid-item": {
        width: "50%",
        marginBottom: "3rem",
      },
    },
    "@media (max-width: 380px)": {
      padding: "0 2rem",
      flexWrap: "wrap",

      "& .MuiGrid-item": {
        width: "max-content",
        minWidth: "40%",
        marginBottom: "3rem",
      },
    },

    //  Headers (H6)
    "& h6": {
      textTransform: "uppercase",
      fontWeight: 600,
      fontSize: "1.05rem",
    },

    //  Grid items
    "& .MuiMenuItem-root": {
      padding: "0.5rem 0",
      color: "#919191",

      "&:hover": {
        color: "#FCFCFC",
      },
    },
  },

  // socia media icons section
  socials: {
    display: "flex",
    margin: "15px 0 30px 0",

    "& a": {
      marginRight: "10px",
    },

    "& button": {
      width: "40px",
      height: "40px",
      background: "#F6F6F61a",
      transition: "all .3s ease",

      "@media (max-width: 420px)": {
        width: "30px",
        height: "30px",
      },

      "&:hover": {
        background: "#F6F6F64d",
      },
    },
    "& svg": {
      color: "white",
      fontSize: "16px",
    },
  },
}));

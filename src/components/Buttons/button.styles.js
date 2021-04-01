import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "uppercase",
    backgroundColor: (props) => (props.outline ? "transparent" : "#F2994A"),
    borderRadius: "5px",
    color: (props) => (props.outline ? "#F2994A" : "#FFFFFF"),
    transition: "all .3s ease",
    padding: "8px 20px",
    height: (props) => (props.sm ? "max-content" : "50px"),
    width: (props) => (props.sm ? "max-content" : "150px"),
    fontSize: "12px",
    letterSpacing: "0px",
    border: "1px solid #F2994A",
    boxShadow: (props) =>
      props.shadow
        ? "-11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.23)"
        : "none",
    fontWeight: "500",
    letterSpacing: "2px",

    "&:hover": {
      backgroundColor: (props) => (props.outline ? "#F2994A" : "transparent"),
      color: (props) => (props.outline ? "#FFFFFF" : "#F2994A"),
    },
  },
}));

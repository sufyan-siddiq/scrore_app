import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      fontFamily: "Poppins, sans-serif !important",
    },
  },
  score: {
    fontSize: "36px !important",
    fontFamily: '"Trade Winds", cursive !important',
    textTransform: "uppercase",
    letterSpacing: " 3px !important",
    padding: "0 0.7em ",
    color: "#012817 !important",
  },
  scoreTab: {
    fontSize: "17.6px !important",
    fontWeight: "500 !important",
  },
  rowDiv: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "0.7em 0.5em",
    borderRadius: "7px",
    marginBottom: "1.8em",
  },
  headerMain: {
    cursor: "pointer",
    position: "relative",
    padding: "1.5em",
  },
  leftBarMain: {
    cursor: "pointer",
    backgroundImage:
      "linear-gradient(rgb(0, 143, 62), rgb(14, 154, 75) 15%, rgb(26, 168, 87) 34%, rgb(34, 180, 100) 53%, rgb(43, 191, 112) 68%, rgb(51, 204, 125) 79%, rgb(59, 216, 138) 87%, rgb(67, 229, 153) 93%, rgb(74, 242, 167) 97%, rgb(77, 255, 178))",
    padding: "2em 1.5em",
    height: "100vh",
  },
  alignRowDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowDivOnly: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: "1.5em !important",
    fontWeight: " bold !important",
  },
  dBoard: {
    paddingBottom: "30px !important",
    background: "#43E498",
  },
  tabDiv: {
    marginTop: "6em !important",
  },
  namelable: {
    fontSize: "16px !important",
    fontWeight: " bold !important",
  },
  name: {
    fontSize: "16px !important",
  },
  namelableVs: {
    fontSize: "2rem !important",
    fontWeight: " 700 !important",
  },
  scoreCard: {
    backgroundColor: " #5cf8b5",
    borderRadius: " 12px",
    boxShadow: " 10px 10px 80px -50px dimgray",
    marginBottom: " 2em",
    margin: "20px 70px !important",
    padding: " 1em",
  },
  upcomingMatch: {
    backgroundColor: " #405402",
    boxShadow: " 10px 10px 80px -50px dimgray",
    marginBottom: " 2em",
    margin: "20px !important",
    padding: " 1.5em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamsPerform: {
    backgroundColor: " #5cf8b5",
    borderRadius: " 12px",
    boxShadow: " 10px 10px 80px -50px dimgray",
    marginBottom: " 2em",
    margin: "30px !important",
    height: "250px",
    padding: " 2em",
  },
  teamsPerformMain: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  playerPerform: {
    backgroundColor: " #5cf8b5",
    borderRadius: " 12px",
    boxShadow: " 10px 10px 80px -50px dimgray",
    marginBottom: " 2em",
    margin: "20px !important",
    padding: " 1em",
  },
  homeIcon: {
    color: "#BABD81",
    marginTop: "2px",
    fontSize: "17px  !important",
  },
  globalStyle: {
    color: "red",
    fontFamily: "Arial",
  },
}));

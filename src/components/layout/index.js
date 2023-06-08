import { Grid } from "@mui/material";
import React from "react";
import { Header, LeftBar } from "..";
import { useStyles } from "../../styles";
const Index = ({ children }) => {
  const styles = useStyles();
  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid item md={2.5}>
          <LeftBar />
        </Grid>
        <Grid
          item
          md={9.5}
          className={styles.dBoard}
          style={{
            height: "100vh",
            overflowY: "scroll",
            position: "sticky !important",
          }}
        >
          <Header />
          <Grid ml={4}>{children}</Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Index;

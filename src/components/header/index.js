import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "../../styles";
import { teamTabs } from "../arrays";
import { useGlobal } from "../../services/context";
const Index = () => {
  const [activeTab, setActiveTab] = useState(0);
  const styles = useStyles();
  const { activeValue, setActiveValue } = useGlobal();

  const handleActive = (index) => {
    setActiveTab(index);
    setActiveValue(index);
    console.log(activeValue);
  };
  return (
    <>
      <Grid item md={12} mt={2} className={styles.headerMain}>
        <Typography m={2} className={styles.title}>
          Teams
        </Typography>
        <Grid container>
          {teamTabs.map((item, index) => {
            return (
              <Grid
                m={2}
                item
                md={2.6}
                justifyContent="center"
                onClick={() => {
                  handleActive(index);
                }}
                className={styles.rowDiv}
                style={{
                  color: activeTab === index ? "yellow" : "",
                  backgroundColor: activeTab === index ? "black" : "#008f3e",
                }}
              >
                <Typography className={styles.scoreTab}>{item}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default Index;

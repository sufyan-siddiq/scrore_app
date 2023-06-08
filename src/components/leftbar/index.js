import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useStyles } from "../../styles";
import { useNavigate, useLocation } from "react-router-dom";
import { tabs } from "../arrays";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const styles = useStyles();

  const handleActive = (index) => {
    setActiveTab(index === activeTab ? -1 : index);
  };

  useEffect(() => {
    const activeTabIndex = tabs.findIndex(
      (item) => item.link === location.pathname
    );

    if (activeTabIndex !== -1 && activeTabIndex !== activeTab) {
      setActiveTab(activeTabIndex);
    }
  }, [location.pathname]);

  return (
    <>
      <Grid item md={12} className={styles.leftBarMain}>
        <Grid item md={12} onClick={() => navigate("/")}>
          <Typography className={styles.score}>Scooer</Typography>
        </Grid>
        <Grid item md={11} className={styles.tabDiv}>
          {tabs.map((item, index) => (
            <Box
              key={index}
              onClick={() => {
                navigate(item.link);
                handleActive(index);
              }}
              className={`${styles.rowDiv} ${
                activeTab === index ? styles.activeTab : styles.tab
              }`}
              style={{
                backgroundColor: activeTab === index ? "#008F3E" : "",
              }}
            >
              {item.icon}
              <Typography ml={2} className={styles.scoreTab}>
                {item.name}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Index;

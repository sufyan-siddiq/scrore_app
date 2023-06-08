import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles";
import { Layout } from "../../components";
import { ground, groundPlayer } from "../../imageSource";
import { useGlobal } from "../../services/context";
const Index = () => {
  const { activeValue } = useGlobal();
  const styles = useStyles();
  return (
    <Layout>
      <Grid item md={12}>
        <Typography ml={1} className={styles.title}>
          Team Setup
        </Typography>
      </Grid>
      <Grid item md={12} mt={2} style={{ position: "relative", width: "100%" }}>
        <img
          src={ground}
          alt={"ground"}
          width="95%"
          style={{ position: "relative" }}
        />
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={groundPlayer}
            alt="Ground Player"
            width="71px"
            style={{ borderRadius: "30%" }}
          />
        </Box>

        {activeValue === 2 ? (
          <Box
            style={{
              position: "absolute",
              top: "40%",
              left: "70%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={groundPlayer}
              alt="Ground Player"
              width="71px"
              style={{ borderRadius: "30%" }}
            />
          </Box>
        ) : null}
        {activeValue === 6 ? (
          <Box
            style={{
              position: "absolute",
              top: "20%",
              left: "80%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={groundPlayer}
              alt="Ground Player"
              width="71px"
              style={{ borderRadius: "30%" }}
            />
          </Box>
        ) : null}
        <Box
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={groundPlayer}
            alt="Ground Player"
            width="71px"
            style={{ borderRadius: "30%" }}
          />
        </Box>

        {activeValue === 5 ? (
          <Box
            style={{
              position: "absolute",
              top: "80%",
              left: "80%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={groundPlayer}
              alt="Ground Player"
              width="71px"
              style={{ borderRadius: "30%" }}
            />
          </Box>
        ) : null}
        <Box
          style={{
            position: "absolute",
            top: "70%",
            left: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={groundPlayer}
            alt="Ground Player"
            width="71px"
            style={{ borderRadius: "30%" }}
          />
        </Box>
        <Box
          style={{
            position: "absolute",
            top: "20%",
            left: "90%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={groundPlayer}
            alt="Ground Player"
            width="71px"
            style={{ borderRadius: "30%" }}
          />
        </Box>
      </Grid>
    </Layout>
  );
};
export default Index;

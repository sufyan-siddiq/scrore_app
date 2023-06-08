import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles";
import { Layout } from "../../components";
import { player } from "../../components/arrays";
import { players } from "../../imageSource";
const Index = () => {
  const styles = useStyles();
  return (
    <Layout>
      <Grid item md={12}>
        <Typography ml={2} className={styles.title}>
          Player's Information
        </Typography>
      </Grid>
      <Grid container>
        {player.map((item) => {
          return (
            <Grid item className={styles.playerPerform}>
              <img
                src={players}
                style={{ width: "268px", borderRadius: "12px" }}
              />
              <Box className={styles.alignRowDiv}>
                <Typography className={styles.namelable}>Name</Typography>
                <Typography className={styles.name}>{item.name}</Typography>
              </Box>
              <Box className={styles.alignRowDiv}>
                <Typography className={styles.namelable}>
                  Appearances{" "}
                </Typography>{" "}
                <Typography className={styles.name}>
                  {item.appearances}
                </Typography>
              </Box>{" "}
              <Box className={styles.alignRowDiv}>
                <Typography className={styles.namelable}>Goals </Typography>{" "}
                <Typography className={styles.name}>{item.goals}</Typography>
              </Box>{" "}
              <Box className={styles.alignRowDiv}>
                <Typography className={styles.namelable}>Assists </Typography>{" "}
                <Typography className={styles.name}>{item.assists}</Typography>
              </Box>{" "}
              <Box className={styles.alignRowDiv}>
                <Typography className={styles.namelable}>
                  Cross Accuracy
                </Typography>{" "}
                <Typography className={styles.name}>
                  {item.crossAccuracy}
                </Typography>
              </Box>
              <Box className={styles.alignRowDiv}>
                <Typography className={styles.namelable}>Key passes</Typography>{" "}
                <Typography className={styles.name}>
                  {item.keyPasses}
                </Typography>
              </Box>
              <Box className={styles.alignRowDiv}>
                <Typography className={styles.namelable}>Tackles </Typography>{" "}
                <Typography className={styles.name}>{item.tackles} </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};
export default Index;
import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles";
import { Layout } from "../../components";
import { dScore } from "../../components/arrays";
const Index = () => {
  const styles = useStyles();
  return (
    <Layout>
      <Grid item md={12}>
        <Typography ml={1} className={styles.title}>
          Scorecard
        </Typography>
      </Grid>
      <Grid container>
        {dScore.map((item) => {
          return (
            <Grid item md={4} className={styles.scoreCard}>
              <Box className={styles.rowDivOnly}>
                <Typography ml={2} className={styles.namelableVs}>
                  VS
                </Typography>
                <Typography ml={1} mt={2} className={styles.name}>
                  {item.vs}
                </Typography>
              </Box>
              <Box mt={1.5} className={styles.alignRowDiv}>
                <Typography ml={2} className={styles.namelable}>
                  Goal Keeper Save
                </Typography>
                <Typography ml={2} className={styles.name}>
                  {item.goalKeeperSave}
                </Typography>
              </Box>
              <Box className={styles.alignRowDiv}>
                <Typography ml={2} className={styles.namelable}>
                  Highest Scorer
                </Typography>
                <Typography ml={2} className={styles.name}>
                  {item.highestScorer}
                </Typography>
              </Box>
              <Box className={styles.alignRowDiv}>
                <Typography ml={2} className={styles.namelable}>
                  Most Assists
                </Typography>
                <Typography ml={2} className={styles.name}>
                  {item.mostAssists}
                </Typography>
              </Box>
              <Box className={styles.alignRowDiv}>
                <Typography ml={2} className={styles.namelable}>
                  Best Defence
                </Typography>
                <Typography ml={2} className={styles.name}>
                  {item.bestDefence}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};
export default Index;

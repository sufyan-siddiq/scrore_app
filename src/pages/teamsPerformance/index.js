import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles";
import { Layout } from "../../components";
import { world } from "../../imageSource";
import { useGlobal } from "../../services/context";
const Index = () => {
  const { activeValue } = useGlobal();
  const styles = useStyles();
  return (
    <Layout>
      <Grid item md={12}>
        <Typography ml={1} className={styles.title}>
          Teams's Performance
        </Typography>
      </Grid>
      <Grid pl={6} className={styles.teamsPerformMain}>
        <Grid item md={5} className={styles.teamsPerform}>
          <Box className={styles.alignRowDiv}>
            <Typography ml={2} className={styles.namelable}>
              Total Goals
            </Typography>
            <Typography ml={2} className={styles.name}>
              {activeValue === 1
                ? 20
                : activeValue === 2
                ? 15
                : activeValue === 3
                ? 22
                : activeValue === 4
                ? 26
                : activeValue === 5
                ? 28
                : activeValue === 6
                ? 9
                : 17}
            </Typography>
          </Box>
          <Box className={styles.alignRowDiv}>
            <Typography ml={2} className={styles.namelable}>
              Shots PG
            </Typography>
            <Typography ml={2} className={styles.name}>
              24.6
            </Typography>
          </Box>
          <Box className={styles.alignRowDiv}>
            <Typography ml={2} className={styles.namelable}>
              Discipline
            </Typography>
            <Typography ml={2} className={styles.name}>
              8
            </Typography>
          </Box>
          <Box className={styles.alignRowDiv}>
            <Typography ml={2} className={styles.namelable}>
              Possession
            </Typography>
            <Typography ml={2} className={styles.name}>
              87.7
            </Typography>
          </Box>
          <Box className={styles.alignRowDiv}>
            <Typography ml={2} className={styles.namelable}>
              Pass
            </Typography>
            <Typography ml={2} className={styles.name}>
              90
            </Typography>
          </Box>
          <Box className={styles.alignRowDiv}>
            <Typography ml={2} className={styles.namelable}>
              Aerials Won
            </Typography>
            <Typography ml={2} className={styles.name}>
              12.3
            </Typography>
          </Box>
          <Box className={styles.alignRowDiv}>
            <Typography ml={2} className={styles.namelable}>
              Rating
            </Typography>
            <Typography ml={2} className={styles.name}>
              9.1
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <img src={world} alt="world" />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Index;
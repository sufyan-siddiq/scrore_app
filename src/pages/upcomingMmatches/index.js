import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles";
import { Layout } from "../../components";
import { matchData } from "../../components/arrays";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
const Index = () => {
  const styles = useStyles();
  return (
    <Layout>
      <Grid item md={12}>
        <Typography ml={1} className={styles.title}>
          Upcoming Matches
        </Typography>
      </Grid>
      <Grid container>
        {matchData.map((item) => {
          return (
            <Grid item md={11.3} className={styles.upcomingMatch}>
              <Box>
                <Typography color="#E8EA00" className={styles.namelable}>
                  {item.title}
                </Typography>
                <Box className={styles.alignRowDiv}>
                  <Box className={styles.rowDivOnly}>
                    <Typography color="#BABD81" className={styles.namelable}>
                      {item.subtitle}
                    </Typography>
                    <Typography
                      sx={{ fontStyle: "italic" }}
                      ml={12}
                      color="#BABD81"
                      className={styles.namelable}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.alignRowDiv}>
                  <Box className={styles.rowDivOnly}>
                    <Typography color="#F77900" className={styles.name}>
                      {item.opponent}
                    </Typography>
                    <Typography
                      ml={5}
                      color="#BABD81"
                      className={styles.namelable}
                    >
                      {item.time}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.rowDivOnly}>
                <HomeWorkIcon className={styles.homeIcon} />
                <Typography ml={1} color="#BABD81" className={styles.namelable}>
                  {item.venue}
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

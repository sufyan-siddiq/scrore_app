import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Home,
  PlayersPerformance,
  ScoreCard,
  TeamSetup,
  TeamsPerformance,
  UpcomingMmatches,
} from "../pages";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayersPerformance />} />
        <Route path="/teamsPerformance" element={<TeamsPerformance />} />
        <Route path="/teamSetup" element={<TeamSetup />} />
        <Route path="/upcomingMmatches" element={<UpcomingMmatches />} />
        <Route path="/scoreCard" element={<ScoreCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

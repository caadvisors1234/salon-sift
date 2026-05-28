import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VoiceListPage from './pages/VoiceListPage';
import VoiceDetailPage from './pages/VoiceDetailPage';
import SalonInfoPage from './pages/SalonInfoPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import FAQListPage from './pages/FAQListPage';
import AboutPage from './pages/AboutPage';
import SimulationPage from './pages/SimulationPage';
// Area pages
import TakasakiPage from './pages/area/TakasakiPage';
// Work style pages
import SeishainPage from './pages/work/SeishainPage';
import GymuitakuPage from './pages/work/GymuitakuPage';
import FreelancePage from './pages/work/FreelancePage';
import PartTimePage from './pages/work/PartTimePage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="simulation" element={<SimulationPage />} />
          <Route path="voice" element={<VoiceListPage />} />
          <Route path="voice/:slug" element={<VoiceDetailPage />} />
          <Route path="salons" element={<SalonInfoPage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
          <Route path="faq" element={<FAQListPage />} />
          {/* Area pages */}
          <Route path="area/takasaki" element={<TakasakiPage />} />
          {/* Work style pages */}
          <Route path="work/seishain" element={<SeishainPage />} />
          <Route path="work/gyoumuitaku" element={<GymuitakuPage />} />
          <Route path="work/freelance" element={<FreelancePage />} />
          <Route path="work/parttime" element={<PartTimePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;

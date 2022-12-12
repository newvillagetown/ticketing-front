import HomePage from "src/pages/home/HomePage";
import MainLayout from "src/components/layouts/main/MainLayout";
import React from "react";

const Home = () => {
  return <HomePage />;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

import HomePage from "src/pages/home/Home.page";
import MainLayout from "src/components/layouts/main/main.layout";
import React from "react";

const Home = () => {
  return <HomePage />;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

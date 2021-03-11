import Layout from "../../components/Layout";

const DashboardScreen = () => {
  return (
    <Layout>
      <p>Bread crumbs</p>
      <h2>Jobs posted by you</h2>
      {[1,2,3].map(()=><p>Card</p>)}
    </Layout>
  );
};

export default DashboardScreen;

// Vendor packages
import { Layout } from 'antd';

// Local components
import Header from './header';
import Content from './Content';
import Footer from './Footer';

export default ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

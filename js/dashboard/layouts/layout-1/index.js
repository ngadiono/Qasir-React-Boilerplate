// Vendor packages
import { Layout } from 'antd';

// Local components
import Header from './header';
import Content from './Content';
import Footer from './Footer';

const Layout1 = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default Layout1;

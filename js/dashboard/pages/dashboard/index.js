// Vendor packages
import React from 'react';
import Link from 'next/link';

// Layouts
import Layout1 from '../../layouts/layout-1';

const Dashboard = () => {
  return (
    <p>
      This is the <strong style={{ color: 'blue' }}>Blue</strong> page, it's borders are blue
    </p>
  );
};

Dashboard.Layout = Layout1;

export default Dashboard;

import React from 'react';
import SideBar from './SideBar';
import Section from './Section';
import styled from 'styled-components';
import Layout from './Layout';

const ContentArea = styled.div`
  display: flex;
  width: 1000px;
`;

function Content(props) {
  return (
      <Layout>
        <SideBar/>
        <Section/>
      </Layout>
  );
}

export default Content;
import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Layout from './Layout';

const GnbContents = styled.div`
  width: 1000px;
  height: 97px;
  display: flex;
  justify-content: flex-end;
`;

function Gnb() {
  return (
      <Layout style={{
        'height': '97px',
        'backgroundColor': '#1ea1f7',
        'alignItems': 'center',
      }}>
          <GnbContents>
            <Search/>
          </GnbContents>
      </Layout>
  );
}

export default Gnb;
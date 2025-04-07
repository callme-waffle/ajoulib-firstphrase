'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const LogoImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoImage
        src="/ajoulib_logo_4x.png"
        alt="아주대학교 도서관 로고"
        width={200}
        height={50}
        priority
      />
    </LogoContainer>
  );
};

export default Logo; 
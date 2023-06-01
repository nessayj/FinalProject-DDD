import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

const Logo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(prevExpanded => !prevExpanded);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LogoContainer>
      <motion.span
        style={{ whiteSpace: 'nowrap' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isExpanded ? ':Diverse DD' : ':DDD'}
        <motion.span
          style={{ display: 'inline-block', width: '0.5ch', overflow: 'hidden' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {isExpanded ? 'ifferent D' : ''}
        </motion.span>
        <motion.span
          style={{ display: 'inline-block', width: '0.5ch', overflow: 'hidden' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          {isExpanded ? 'isplay' : ''}
        </motion.span>
      </motion.span>
    </LogoContainer>
  );
};

export default Logo;

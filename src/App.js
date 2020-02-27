import React from 'react';
import { space } from 'styled-system'
import  styled  from '@emotion/styled'

const Box = styled.div`
  text-align: center;
  ${space}
`;

function App() {
  return (
    <Box  p={4}>
      hello
    </Box>
  );
}

export default App;

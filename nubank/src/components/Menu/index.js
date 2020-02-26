import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import { Container, Code } from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://lucaleonardofr.github.io"
          size={80}
          bgColor="#FFF"
          fgColor="#8B10AE"
        />
      </Code>
    </Container>
  );
}




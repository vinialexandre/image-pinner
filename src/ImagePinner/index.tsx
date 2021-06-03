/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Provider } from './store/Provider';
import { Background } from './view/ViewBackground';
import { IDefaultProps } from './properties/IProperties';

const ImagePinner: React.FC<IDefaultProps> = props => {
  return (
    <Provider>
      <Background {...props} />
    </Provider>
  );
};

export default ImagePinner;

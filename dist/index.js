/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Provider } from './store/Provider';
import { Background } from './view/ViewBackground';
const ImagePinner = props => {
    return (React.createElement(Provider, null,
        React.createElement(Background, Object.assign({}, props))));
};
export default ImagePinner;
//# sourceMappingURL=index.js.map
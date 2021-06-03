/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines-per-function */
import React, { useRef, useEffect, useState } from 'react';
import { sizeBackground } from '../properties/IProperties';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { Properties } from './ViewProperties';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import { useDispatch, useSelector } from '../store/Provider';
import { actionInitAll, actionEditZoom } from '../action/ActionComponent';
import { selectorSaveData } from '../reducer/Selector';
export const Background = (props) => {
    const dispatch = useDispatch();
    const svgRef = useRef(null);
    const pins = useSelector(({ pins }) => (pins ? pins : []));
    const zoom = useSelector(({ zoom }) => zoom);
    const [zoomLocal, setZoomLocal] = useState(props.zoom);
    const dataSave = selectorSaveData(useSelector(state => state));
    function returnSave() {
        return props.onSaved(dataSave);
    }
    useEffect(() => {
        if (props)
            dispatch(actionInitAll(props, svgRef));
    }, []);
    useEffect(() => {
        dispatch(actionEditZoom(zoomLocal));
    }, [zoomLocal]);
    const handleZoomIn = () => {
        setZoomLocal(zoomLocal + 5);
    };
    const handleZoomOut = () => {
        setZoomLocal(zoomLocal - 5);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { css: { padding: `15px` } },
            React.createElement(Grid, { md: 12, item: true },
                React.createElement(Box, { style: {
                        background: `url(${props.srcImg}) center center / ${zoomLocal}% no-repeat`,
                        backgroundPosition: 'center center',
                        backgroundSize: `${zoomLocal}% auto`,
                        height: `${sizeBackground.heigth}px`,
                        width: `${sizeBackground.width}px`,
                        margin: `auto`,
                        boxShadow: `0px 2px 4px 1px rgba(0,0,0,0.13)`,
                        borderRadius: `2px`
                    } },
                    React.createElement("svg", { ref: svgRef, width: sizeBackground.width, height: sizeBackground.heigth })),
                React.createElement(Box, { display: "flex", alignItems: "center", css: { height: 50 }, flexDirection: "row-reverse" },
                    React.createElement(Button, { onClick: () => handleZoomIn() },
                        React.createElement(ZoomInIcon, null)),
                    React.createElement(Button, { onClick: () => handleZoomOut() },
                        React.createElement(ZoomOutIcon, null)),
                    React.createElement(Box, { display: "flex", alignItems: "center" },
                        React.createElement(Typography, { gutterBottom: true, component: "p" }, "Zoom:")))),
            React.createElement(Properties, { svgRef: svgRef }),
            React.createElement(Box, { display: "flex", alignItems: "center", css: { height: 50 }, flexDirection: "row-reverse" },
                React.createElement(Button, { className: "default-btn-custom", onClick: () => returnSave() }, "Save")))));
};
//# sourceMappingURL=ViewBackground.js.map
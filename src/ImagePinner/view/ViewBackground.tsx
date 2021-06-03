/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines-per-function */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { IPin } from '../store/IState';
import {
  IDefaultProps,
  sizeBackground,
  ISaveData
} from '../properties/IProperties';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { Properties } from './ViewProperties';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import { useDispatch, useSelector } from '../store/Provider';
import { actionInitAll, actionEditZoom } from '../action/ActionComponent';
import { selectorSaveData } from '../reducer/Selector';

export const Background: React.FC<IDefaultProps> = (props: IDefaultProps) => {
  const dispatch = useDispatch();
  const svgRef = useRef<SVGSVGElement>(null);
  const pins = useSelector<IPin[]>(({ pins }) => (pins ? pins : []));
  const zoom = useSelector<number>(({ zoom }) => zoom);
  const [zoomLocal, setZoomLocal] = useState(props.zoom);
  const dataSave = selectorSaveData(useSelector(state => state));

  function returnSave() {
    return props.onSaved(dataSave);
  }

  useEffect(() => {
    if (props) dispatch(actionInitAll(props, svgRef));
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

  return (
    <>
      <Box css={{ padding: `15px` }}>
        <Grid md={12} item={true}>
          <Box
            style={{
              background: `url(${props.srcImg}) center center / ${zoomLocal}% no-repeat`,
              backgroundPosition: 'center center',
              backgroundSize: `${zoomLocal}% auto`,
              height: `${sizeBackground.heigth}px`,
              width: `${sizeBackground.width}px`,
              margin: `auto`,
              boxShadow: `0px 2px 4px 1px rgba(0,0,0,0.13)`,
              borderRadius: `2px`
            }}
          >
            <svg
              ref={svgRef}
              width={sizeBackground.width}
              height={sizeBackground.heigth}
            ></svg>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            css={{ height: 50 }}
            flexDirection="row-reverse"
          >
            <Button onClick={() => handleZoomIn()}>
              <ZoomInIcon />
            </Button>
            <Button onClick={() => handleZoomOut()}>
              <ZoomOutIcon />
            </Button>
            <Box display="flex" alignItems="center">
              <Typography gutterBottom component="p">
                Zoom:
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Properties svgRef={svgRef} />
        <Box
          display="flex"
          alignItems="center"
          css={{ height: 50 }}
          flexDirection="row-reverse"
        >
          <Button className="default-btn-custom" onClick={() => returnSave()}>
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
};

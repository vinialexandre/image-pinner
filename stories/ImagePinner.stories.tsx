/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ImagePinner from '../src/ImagePinner';
import { IPin } from '../src/ImagePinner/store/IState';
import { ISaveData } from '../src/ImagePinner/properties/IProperties';

const Component1 = () => (
  <ImagePinner
    onSaved={e => console.log(e)}
    data={[]}
    srcImg={
      'https://imagens-revista-pro.vivadecora.com.br/uploads/2019/05/planta-baixa-com-mobili%C3%A1rio-detalhado.jpg'
    }
    zoom={70}
  />
);

const result: any = {
  zoom: 70,
  data: [
    {
      id: 'g3510b8ca-df7e-b0e3-f8d2-3d65dabd135d',
      initX: 183.00000381469727,
      initY: 128,
      endX: 183.00000381469727,
      endY: 128,
      mouseX: 188.8000030517578,
      mouseY: 131,
      order: 1,
      description: 'Local'
    },
    {
      id: 'g57e8ac32-78c2-6e3f-680c-4e0b719214b9',
      initX: 202.00000286102295,
      initY: 221,
      endX: 202.00000286102295,
      endY: 221,
      mouseX: 209.8000030517578,
      mouseY: 253,
      order: 2,
      description: 'Local'
    },
    {
      id: 'g0351953e-99f3-1f83-d1a0-44bac126b0bf',
      initX: 284.9999876022339,
      initY: 30,
      endX: 284.9999876022339,
      endY: 30,
      mouseX: 307.79998779296875,
      mouseY: 24,
      order: 3,
      description: 'Local'
    }
  ]
};

const Component2 = () => (
  <ImagePinner
    onSaved={e => console.log(e)}
    data={result.data}
    srcImg={
      'https://imagens-revista-pro.vivadecora.com.br/uploads/2019/05/planta-baixa-com-mobili%C3%A1rio-detalhado.jpg'
    }
    zoom={result.zoom}
  />
);

const Component3 = () => (
  <ImagePinner onSaved={e => console.log(e)} data={[]} srcImg={''} zoom={70} />
);

storiesOf('ImagePinner', module).add('1 - Case', Component1);
storiesOf('ImagePinner', module).add('2 - Case', Component2);
storiesOf('ImagePinner', module).add('3 - Case', Component3);

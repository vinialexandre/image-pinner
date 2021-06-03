/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as d3 from 'd3';
import { Guid } from 'guid-typescript';
import { sizePin, sizeBackground, markerBase64 } from '../properties/IProperties';
export const createPinDrag = (ref, pins, newData, save) => {
    //update or insert
    let ID = 'g' + (newData.id ? newData.id : Guid.create().toString());
    ID = ID.replace('gg', 'g');
    const pinObj = d3
        .select(ref.current)
        .append('g')
        .attr('id', ID)
        .attr('x', 0)
        .attr('y', 0)
        .attr('transform', `translate(${newData.endX ? newData.endX : 0},${newData.endY ? newData.endY : 0})`)
        .append('image')
        .attr('xlink:href', markerBase64)
        .attr('width', sizePin.width)
        .attr('height', sizePin.heigth);
    d3.select(`#${ID}`)
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('transform', 'translate(' + (matchOrder(newData, pins) > 9 ? '12' : '17') + ',20)')
        .attr('fill', '#fff')
        .text(matchOrder(newData, pins));
    const pin = {
        id: ID,
        selection: pinObj,
        initX: newData.initX ? newData.initX : 0,
        initY: newData.initY ? newData.initY : 0,
        endX: newData.endX ? newData.endX : 0,
        endY: newData.endY ? newData.endY : 0,
        mouseX: newData.mouseX ? newData.mouseX : 0,
        mouseY: newData.mouseY ? newData.mouseY : 0,
        order: matchOrder(newData, pins),
        description: newData.description
            ? newData.description
            : 'Local '
    };
    const drag = d3
        .drag()
        .on('start', e => {
        //att mouse posicao x e y iniciais
        pin.mouseX = d3.event.x;
        pin.mouseY = d3.event.y;
    })
        .on('drag', e => {
        //att endX, y com a posicao
        pin.endX = Math.max(pin.initX + d3.event.x - pin.mouseX, 0);
        pin.endX = Math.min(pin.endX, sizeBackground.width - sizePin.width);
        pin.endY = Math.max(pin.initY + d3.event.y - pin.mouseY, 0);
        pin.endY = Math.min(pin.endY, sizeBackground.heigth - sizePin.heigth);
        d3.select(`#${ID}`).attr('transform', `translate(${pin.endX},${pin.endY})`);
    })
        .on('end', e => {
        //att init com posicao x e y finais
        pin.initX = pin.endX;
        pin.initY = pin.endY;
    });
    d3.select(`#${ID}`).call(drag);
    return pin;
};
export const updateOrderPinDrag = (newData, pins) => {
    d3.selectAll(`#${newData.id} text`)
        .attr('transform', 'translate(' + (matchOrder(newData, pins) > 9 ? '12' : '17') + ',20)')
        .text(newData.order);
};
export function matchOrder(pin, pins) {
    if (pins.length) {
        pins.sort((a, b) => {
            if (a.order > b.order) {
                return 1;
            }
            if (a.order < b.order) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        return pin.order ? pin.order : parseInt(pins[pins.length - 1].order.toString()) + 1;
    }
    return 1;
}
export function repositionTextPin(pin) {
    if (pin && pin.order > 9)
        return '12';
    return '17';
}
//# sourceMappingURL=utils.js.map
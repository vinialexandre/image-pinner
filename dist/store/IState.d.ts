export interface IPin {
    id: string;
    selection: d3.Selection<SVGImageElement, unknown, null, undefined>;
    initX: number;
    initY: number;
    endX: number;
    endY: number;
    mouseX: number;
    mouseY: number;
    order: number;
    description: string;
}
export interface IComponentState {
    srcImg: string;
    zoom: number;
    pins: IPin[];
}
//# sourceMappingURL=IState.d.ts.map
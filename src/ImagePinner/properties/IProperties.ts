/* eslint-disable prettier/prettier */
import { IPin } from '../store/IState';

export const markerBase64 = 'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAyCAYAAAAweqkjAAAFIElEQVRYhc1ZXahUVRT+1tr7nHPH36y8EuRPRhCR+uJDBaYgRfQjtwchCsH+SOot6qWLb9FL9RJFWIkglRDVxScfAguMgurBQssUrze56i1NrzqTM+ecvVes+enOzJl7m+udO3c+2MzMmrX3/s5eP3vvdUiQxQgzvDEIieAAsAhKImBjwETwIisI2CjAfQBuB7AKwFIABsBVAOcADDNwREQOOqJvCUDoHDwAYobOS94jz4x+53Czcw082iJmvEdRCRrzOAFPC/Co9s10bIJMKJ0A8Jlx7gNnzOl6raJIS2KcGa2edfXTEQ0w82EAXwrwWDuk0Kh0B4DB1JiTLPKu8X5JRrkJkxIjEYhI5In2psxDIFrXDpmpQID1RC+lzMeMyJYpVFsT0yf1RGsT5l89sK2t5Zke+lOi/ez965P1ak2MaH1qzE9CtHoWSJUfvPzwzIPCvFt9uBn2RJ1A3W8+850UBD9Y7SutQqOzCIBnCtYmS5JkR/3AZicRIiLkiBAQ8aUw/JmJFnIXSKGaXwrGrCeR8zmRHz0RhAh0livW1KV11g6VmAdEpL2w6xCk4tOI0nSNETmiluI+EWhzRA/nmQfQZVKoSysp86eB9zDK4QxVxEkY/pESraAumbAVRK0XxwPwfj9fNAaXrd2SAiu65VeTQuc35m0lSCNRpPvX9x64p9smbAVfMe0m9kTLpUdIoRqlRLSVyftH5tiADShzEXlAV2xDr6xWHVZrErs7I557FJXYTT1ITJTYgoy4B6DEbK8Sy2ekPQCGyGgP8grYEn2XPabNLUTPkDc4N4RaYusBOD3+iBziK0RfE/BXzyRZEd2WvuBLlbvjLqLeoGaAJAY+4RtFkPP+HT21zrk59Ugt8qED/qFTVVli7cds7VNzdVCk6mVI4ngpRC5wULmpYL5zr2EOg0Cd3nq/NydyIadEL1lbqTGIIG/Me0XmF7t9kpWKCbHQuX4DnFcZa9ovaPpX5/f+ZQGuZXrOIqh6aoXIzqvGnC9U+dBvPHEZ1wAImZ/lIPhIurRqulrs3KgwL9ffaZKU5TRmJ/ZwqipeM+YXJ7KmGwlE75PzvN9cJDqovxdXy1F02piMMkRuS8JweLZLBErKOrfPMz9Zk4VpWv40z4sgrmtJ5ft4ufBh7aZZSx/q0yLjSJJ7Ycx/k7gkgdML71iTfk1DiRWj6HBCtG42olTTw6I43lwIgrIJF5VKjbwLmS4TKBEtuxhFZe6dXLmUCAuce19TU012SzOx4Uy3uj/1yYx5AkGwr1PENLjE+6NM1HAJCpuJHct0bYQmEw6CPWTtdrQosF0PMVMqrfRh2FAk9s3EzmW6ZqF08lGkdbO15jo3e139EjMWxPHWnHOf/98YNJIRNUJqAcHc78NwTLRMfx1m1UKJTdO3bJK8ym2UvVvW+SdD3piHRoPgQDCNGprqJWo+7w/dGsf3t93vckY0OfQh8ta+UgqCN8X7tsipGwREZ6JSaZURSdtdiCmjshV0n7gWhnsM8/Z2TKon43lxvLrP+1PTCR0az4imhlTPbxei6JsS0cZgkmBQPypowTlJHgyc+0ra8KsGYq0GbQdFonAkDI9bYGXzywIdU1+GLUzTHaU03dWOs3eMmOIK87KzYfh7ILK4NjFVSf3t/RuI48FaYWS688yImOKiMXedC4KjWvnmaq7Keb97URw/Nz6T3UI60Mas3XAyiuR4X5+cjKKh8er7yJm0jhDTNhyGLxzJ5Q78qXvhTMcD8C8/J2A4nzm/UgAAAABJRU5ErkJggg==';
export interface IDefaultProps {
  onSaved: (e: ISaveData) => void,
  data: IPin[],
  srcImg: string,
  zoom: number
}

export interface ISaveData {
  data?: IPin[],
  zoom: number
}

export interface InputProperties {
  svgRef: React.RefObject<SVGSVGElement>
}

export const defaultProps: IDefaultProps = {
  onSaved: e => console.log('Default: save onSaved', e),
  data: [],
  srcImg: '../src/ImagePinner/icons/unnamed.png',
  zoom: 70
};

export interface ISizeBackground{
  width: number,
  heigth: number
}

export const sizeBackground: ISizeBackground = {
  width: 600,
  heigth: 300
}

export interface ISizePin{
  width: number,
  heigth: number
}

export const sizePin: ISizePin = {
  width: 40,
  heigth: 40
}

import colors from 'css-color-names';
import { Color } from './types';

const colorNames: Color[] = [];

Object.keys(colors).forEach((colorName: string) => {
  colorNames.push({
    name: colorName,
    value: (colors as any)[colorName],
  });
});

export default colorNames;

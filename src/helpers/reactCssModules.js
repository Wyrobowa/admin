import CSSModules from 'react-css-modules';

export default function ReactCssModules(component, styles) {
  return CSSModules(component, styles, { allowMultiple: true });
}

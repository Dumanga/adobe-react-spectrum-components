# Adobe React Sprectrum Step By Step Guide

A modern React application showcasing Adobe's React Spectrum components with a centered, responsive layout.




## Installation

Install guide

https://react-spectrum.adobe.com/react-spectrum/

```bash
 npm create vite@latest my-spectrum-app -- --template react
 cd my-spectrum-app
```
```bash
 npm install @adobe/react-spectrum @react-spectrum/provider
```
```bash
 npm install 
```
```jsx
import { Provider, defaultTheme } from '@adobe/react-spectrum'
import { Button } from '@adobe/react-spectrum'

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Button variant="cta" onPress={() => alert('Button pressed!')}>
        Hello React Spectrum
      </Button>
    </Provider>
  );
}

export default App
```



    
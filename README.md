## typescript create-react-native-app with react-navigation3

## 순서 

- yarn add -D react-native-typescript-transformer
- yarn add -D @types/react @types/react-native
- app.json 에 추가

```
"packagerOpts": {
      "sourceExts": [
        "ts",
        "tsx"
      ],
      "transformer": "node_modules/react-native-typescript-transformer/index.js"
    }
```

- tsc --init
- tsconfig -> "jsx": "react-native" (주석 제거 후 수정)
- app.js -> app.tsx
- tsconfig -> "target": "es6"  

## 현재 expo version 은 static contextType = AppContext 을 지원하지 않는다.

## 기능 
- context and pass funtion to children without context (props)
- react-navigation3
- loading
- gesture multi touch 
- mapview with location (not googlemap)
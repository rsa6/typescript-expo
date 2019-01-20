# typescript create-react-native-app with react-navigation3

# 순서 

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
- 주석 제거 후 수정 -> "jsx": "react-native"
- app.js -> app.tsx
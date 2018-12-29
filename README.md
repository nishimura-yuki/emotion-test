`emotion` を使って、共通のCSSをReact, Vanillaの両方で利用してみるサンプル。  
結果としては予想通り同じCSSを利用できたけど、 styled-components の利点であるprops機能とかを考えると、このやりかたでは「使いやすくなった `CSS Modules`」 くらいな状態。

```
root/
　├ src/
　│　├ react/  ← ここにReactでのレンダリング処理を記載
　│　├ styles/  ← ここに共通CSSを記載(実態は文字列)
　│　├ vanilla/  ← ここにVanillaでのレンダリング処理を記載

 ```
 

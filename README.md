This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The app has been ejected for inject custom webpack loader.
All related files:
- `babel-plugin/styled-system-transform.js`
the babel plugin that inject `customTransform` function. 
This plugin detects the occurance of the statement `import { system, get } from '@styled-system/core'` and prepend statement `import { customTransform } from "customTransform";`. Finally, it transform `system(config)` to `system(customTransform(config))`.
https://astexplorer.net/#/gist/432fe410c9506924215357c83fb84bef/9de7c96af1a8d95b1bb3fefa04475d903397c032
- `config/webpack.config.js`
config webpack to load the custom babel plugin and transform all the js files inside node_modules/@styled-system.
https://github.com/ILovePug/styled-sysytem-transform/blob/master/config/webpack.config.js#L361
- `customTransform.js`
the customTransform function to be called and trasnform the config object before it returns to styled-system `system` function.

# jest-stduy

jest 学习 dmeo

## 搭建

```
mkdir jest-study
cd jest-study
npm init

// 安装jest
npm install --save-dev jest

// 生成基础配置文件： jest.config.mjs
jest --init

// jest.config.js添加如下：
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }

// 安装babel
npm install --save-dev babel-jest @babel/core @babel/preset-env

// package.json 添加如下:
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
```

## 配置

新建 `babel.config.js`，用于配置与当前Node版本兼容的Babel。若使用import/export语法，则需后缀改成cjs: `babel.config.cjs`，否则报错。

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

package.json添加`type`:
```
"type": "module"
```
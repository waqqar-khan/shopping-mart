# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Note For Developer

React Official Documentation:
PropTypes aren’t commonly used in modern React. Use TypeScript for static type checking.

If you don't want to use prop-types for prop validation but still want to avoid the warnings related to missing prop validation, you have a few alternative options:

Disable Prop Validation Warnings: You can disable prop validation warnings for your entire project or for specific files or components, but this is generally not recommended as it can lead to issues in the long term. It's better to have prop validation for better code quality.

To disable prop validation warnings, you can add comments at the top of the file where you want to disable warnings:

javascript
Copy code
/* eslint-disable react/prop-types */
This will disable prop-type warnings for the entire file.

i. Use TypeScript: TypeScript is a statically-typed superset of JavaScript that provides type checking for your code. If you switch to TypeScript, you can define interfaces or types for your props, and type checking will catch type-related issues at compile time, eliminating the need for prop-types. TypeScript is a powerful solution for improving code quality and reducing runtime errors.

ii. Flow Type: Similar to TypeScript, Flow is a static type checker for JavaScript. You can use Flow annotations to specify types for your props, which can catch type-related issues at compile time.

iii. ESLint Plugin: You can use ESLint with a custom ESLint plugin or configuration that enforces prop validation rules without using prop-types. This approach allows you to define custom rules for your project. However, it still involves some form of static analysis.

iv. React.StrictMode: If you're using React Strict Mode, it provides additional checks during development, including prop validation checks. In production, these checks are disabled automatically. You can continue to use prop-types during development and benefit from the checks provided by Strict Mode.

Keep in mind that while these options can help you avoid prop-types warnings, they don't provide the same level of runtime prop validation and documentation that prop-types offer. Using a statically-typed language like TypeScript or Flow is generally the best practice for improving code quality and reducing runtime errors in React applications.


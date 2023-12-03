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

## Node Correct Installation and path setup

For Windows:

Uninstall Node.js and npm:
Open "Control Panel."
Go to "Programs" > "Programs and Features."
Find "Node.js" in the list, right-click, and choose "Uninstall."
Follow the uninstallation prompts.

Delete npm and npm-cache folders:
Go to C:\Users\your_username\AppData\Roaming\ and delete the npm and npm-cache folders.

Download the Latest Node.js Installer:
Visit the official Node.js website: Node.js Downloads[https://nodejs.org/en/download/].
Download the latest LTS version (recommended for most users).
Run the installer and follow the installation prompts.

Verify Installation:
Open a new command prompt.
Run the following commands to verify that Node.js and npm are installed:
node -v
npm -v

### The node command is not recognized by the command prompt. This typically means that the directory containing the Node.js executable is not in your system's PATH.
Uninstall node and clear 
To resolve this issue on Windows, you'll need to ensure that the Node.js installation directory is added to the PATH environment variable. Here are the steps to do that:

Find Node.js Installation Directory:

Locate the directory where Node.js is installed. The default installation directory is usually C:\Program Files\nodejs\.
Copy Node.js Path:

Copy the path to the "bin" directory within the Node.js installation directory. This directory contains the executable files for Node.js.
Example path: C:\Program Files\nodejs\node_modules\npm\bin
Add Path to System Environment Variables:

Right-click on "This PC" or "Computer" on your desktop or in File Explorer.
Select "Properties" and click on "Advanced system settings."
In the System Properties window, click on the "Environment Variables" button.
In the "System Variables" section, find and select the "Path" variable, then click "Edit."
Click "New" and paste the path you copied in step 2.
Click "OK" to close the windows.
Verify Installation:

Open a new command prompt and run the following commands to verify that Node.js is in your PATH:
node -v

After following these steps, the node command should be recognized by the command prompt. If you encounter any issues or the problem persists, double-check the paths in the "Path" variable to ensure they are correct, and make sure to restart any open command prompt windows to apply the changes.

The error indicates that npm is unable to find the directory C:\Users\yt\AppData\Roaming\npm. This directory is typically used as the global installation directory for npm packages.

Here are steps to resolve this issue:

Create the Missing Directory:
Open a command prompt as an administrator.
Run the following command to create the missing directory:
mkdir C:\Users\yt\AppData\Roaming\npm

Set npm Global Prefix:
Run the following command to set the global npm prefix to the newly created directory:
npm config set prefix C:\Users\yt\AppData\Roaming\npm

First try to create react app again in your desired directory if not than please follow this step, Install create-react-app Globally:
Run the following command to install create-react-app globally:
npm install -g create-react-app

Try creating the React app again:
Run the following command:
npx create-react-app todo-app

This should resolve the issue by creating the necessary directory and configuring npm to use it as the global installation directory. If you still encounter issues, ensure that you have the necessary permissions to create directories in the specified path and that there are no issues with your user account's permissions.

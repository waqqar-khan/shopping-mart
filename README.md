# Shopping Mart

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

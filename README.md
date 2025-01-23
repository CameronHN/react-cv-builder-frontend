# React and TypeScript CV Builder

This project is a personal portfolio website designed using React and TypeScript. It is developed for incremental development.

The technologies being used are:
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mantine](https://mantine.dev/)

## Installation
Before you get started, ensure that you have Node.js installed on your device. Node can be downloaded from the [Node.js&nbsp;website](https://nodejs.org/en).

Follow the prompts and after completing the download, type ```cmd``` in your seach bar on your machine to open the command prompt, and open the first option.

To check if Node has successfully installed, type the following prompt in the command prompt:
```
node -v
```
This should display the version of Node that you have installed.

To check if npm has successfully installed, type the following prompt in the command prompt: 
```
npm -v
```
This should display the version of the npm package manager that you have installed.

To get up and running, download the project to your machine. Alternatively, you may clone the project to your machine by using the following command:
```
git clone https://github.com/CameronHN/react-cv-builder.git
```

Once downloaded/cloned, open the command prompt or terminal, and use the change directory command to enter into the project's root directory:
```
cd <path-to-project-directory/react-cv-builder>
```
It should look like this:
```
cd C:/Users/<Name>/<Paths>/react-cv-builder
```

After you have successfully entered the project's directory, enter the following command in the command prompt to install the required packages and dependencies:
```
npm install
```

Wait for the packages to install. Once completed, enter the following command into the terminal or command prompt to run the project:
```
npm run dev
```
Your terminal should display a localhost and port, indicating where the project is running. For example: ```http://localhost:5173/```. Copy and paste it into your browser to view the project.

## Components

**Mantine**
- Images are sparingly used either directly into the image component, or are assigned to a variable and then referenced in the image component.
- The contact form is assembled by using Input and Button

**React**
- Data is displayed on to the page using React functional components.
- All data is not hard coded to the web pages. Instead, they are populated into objects with enforced data types. 

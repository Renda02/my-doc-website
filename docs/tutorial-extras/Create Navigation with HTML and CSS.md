# Create-simple-navigation-with-HTML-and-CSS

This tutorial will guide you in creating simple navigation with HTML and CSS.

Hypertext Markup Language (HTML) is used to develop and edit web pages. The markup language is a computer language that uses tags to define elements within documents. 

CSS stands for  Cascading Style Sheet, a language used for describing the presentation of documents written in HTML or XML. CSS styles elements on your web pages, such as colors, fonts, and headings.

## What you'll need

 This tutorial requires familiarity with the following:

- Using HTML to develop basic web pages.
- Basic word processing with a text editor.
- CSS Flexbox.
- Command-line -creating a directory and a file.

## Project Set up

1. Follow this [documentation](https://code.visualstudio.com/docs/setup/setup-overview) for installing the Visual Studio Code. 

2. Run the following commands to create the files you need for your project:
  - Create an src directory: `mkdir navigation`
  - Open an src folder: `cd navigation`
  - Create HTML and CSS files:  `touch index.html style.css`
  - Open text editor up with:  `code .`
 
 ## Code Setup
 
- Open index.html to add boilerplate HTML code and CSS links.
- To create navigation, add a div container around the navigation. Additionally, add a nav element that wraps text tags and nested lists. 

Here is the HTML code snippet:
```html 
<div class="container">
        <nav>
            <h2>FinestBrew</h2>
            <ul>
                <li>Home</li>
                <li>Our Coffee</li>
                <li>Locations</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  ```

  ## Styling

  You will use CSS flexbox to style navigation, and here is a CSS code snippet:
  ```cs
  body {
  width: 100%;
  margin: 0 auto;
  font-size: 1em;
  background-color: #eef5f5;
}

nav {
  padding: 1em 1.2em;
  display: flex;
  justify-content: space-between;
  background-color: #a2dbd7;
}

h2 {
  font-size: 600;
  font-size: 1.6em;
}

ul {
  padding: 0;
  display: flex;
  list-style: none;
}

li {
  margin: 0 1em;
  padding-left: 0.5em;
  cursor: pointer;
}

 ```

 ## Start your site
 
In the browser, the navigation must look like the image below:

![navigation image](https://user-images.githubusercontent.com/64105005/180049851-e4d9c332-7b28-4705-a85b-3c68535d3830.png)




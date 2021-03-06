module.exports = (options) => {
  return `
 <!DOCTYPE html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8">
   <title>Unical UPE</title>
   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
   <meta name="description" content="Description">
   <meta name="viewport"
     content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css">
   <style>
   .markdown-section{
      padding: 0 !important;
    }
   </style>
 </head>
 
 <body>
   <div id="app"></div>
   <script>
     window.$docsify = {
        "name": "Unical UPE",
        "repo": "https://github.com/NathanaelCarauna/UniCalUPE-Client",
        "loadSidebar": true,
        "auto2top": true,
        "homepage": "HOME.md",
        "plantuml": {
        "skin": "classic"
        },
      "stylesheet": "https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css"
      
    };
   </script>   
   <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
   <script src="//unpkg.com/docsify-plantuml/dist/docsify-plantuml.min.js"></script>
   <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
   <script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script>
 </body>
 
 </html>
 `;
};

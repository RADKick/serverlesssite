#serverless website - kicksite

Here you are going to use a lightweight js framework kickjs (See kick repo at https://github.com/radkick/kickjs) to host a website. 

Also we will serverless framwork to deploy it on AWS S3 or Azure blob

Sample is at src/sample1

## Install



## Getting Started and Documentation

Serverlesssite or kicksite has following main components:

Themes (coming shortly) which will be hire than layouts

Layouts (can be multiple, like default layout, blog layout, category page layout etc)

  |_ Widgets (pages which can be used to store pieces of html)

  |_ Pages (page which are rendered to the users)

Every html page we create in kicksite is a clone of a layout html, default is _/_$layout.html

Root file is is index.html, which is a copy of _/_$layout.html

```html
<html kick-app>    
    <head>
        <kicker :file="_head.html"></kicker>
        <!-- Bootstrap core CSS -->
        <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom styles for this template -->
        <link href="/assets/css/cover.css" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js"></script>
        <script src="https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"></script>

    </head>
    <body class="text-center">        
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <kicker :file="_header.html"></kicker>
            <kicker id="kicksitebody" :file="-inc-index.html"></kicker>        
            <kicker :file="_footer.html"></kicker>
        </div>
    </body>
    <script id="kicksitejs" src="/_$kicksite.js"></script>
    <script id="kickjs" src="https://cdn.jsdelivr.net/npm/@radkick/kick@0.9.88/dist/kick.min.js"></script>
    <script>kick.bind('', kickSitePageInfo);</script>
</html>
```




## Building and Testing

Make sure you have nodejs and npm running

Clone the repository.

Install http-server if you don't have

```
$ npm -g http-server
```

Run http-server from the folder where you cloned the repo.

```
$ http-server src/sample1
```

#### Building

No building required

#### Publishing

You can use AWS Cli to publish, very soon I will post an article on that.

You can use serverless framwork to publish to AWS S3/Azure Blob, very soon I will post an article on that too.


## Contributing

#### Bug Reporting

1. Ensure the bug can be reproduced on the latest master.
2. Open an issue on GitHub and include an isolated [Stackblitz](https://stackblitz.com) demonstration of the bug. The more information you provide, the easier it will be to validate and fix.

#### Pull Requests

1. Fork the repository and create a topic branch.
5. Push your topic branch to your fork and submit a pull request. Include details about the changes as well as a reference to related issue(s).

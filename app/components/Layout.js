import React from 'react';

const Layout = (props) => (
  <html>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation/6.1.2/foundation.min.css"/>
    </head>

    <body>
      <div className="row">
        <div
          data-app
          className="small-12 columns"
          dangerouslySetInnerHTML={{ __html: props.markup }}
        >
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: props.state}}></script>

      <script src="/public/js/main.js"></script>
    </body>
  </html>
);

export default Layout;

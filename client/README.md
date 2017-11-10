1. Proxy setting in client package.json
  
  React always makes request to the webpack development server. Normally, this is localhost:3000. The proxy option makes wepback redirect the requests to a server of your choosing, instead of trying to solve them himself.
  
  We specify this only in development, so we can use the API we build, inside React.
  
  After we build the app, the front end will be static, so there will only be the express server. Thus, this option will be ignored.


export default {
  port: 3000,
  mongoose: {
    url: "mongodb://localhost/chat",
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        }
      }
    }
  },
  session: {
    secret: "KillerIsJim",
    kye: "sid",
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: null
    }
  }
};

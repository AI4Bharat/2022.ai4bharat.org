const withSvgr = require("next-svgr");

module.exports = withSvgr({
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/testing",
        destination: "/areas",
      },
    ];
  },  
  images: {
    domains: ['res.cloudinary.com'],
  },
});

// generate-sitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { resolve } = require("path");

// Define your routes
const routes = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/computer-society", changefreq: "monthly", priority: 0.8 },
  { url: "/signal-processing-society", changefreq: "monthly", priority: 0.8 },
  { url: "/circuits-systems-society", changefreq: "monthly", priority: 0.8 },
  { url: "/robotics-automation-society", changefreq: "monthly", priority: 0.8 },
  { url: "/women-engineering-society", changefreq: "monthly", priority: 0.8 },
  { url: "/education-society", changefreq: "monthly", priority: 0.8 },
  { url: "/login", changefreq: "monthly", priority: 0.8 },
  { url: "/power-energy-society", changefreq: "monthly", priority: 0.8 },
  { url: "/vehicular-technology-society", changefreq: "monthly", priority: 0.8 },
  { url: "/events/:id", changefreq: "monthly", priority: 0.8 },
  { url: "/add-event", changefreq: "monthly", priority: 0.8 },
  { url: "*", changefreq: "monthly", priority: 0.8 },
];

// Create a sitemap stream
const sitemapStream = new SitemapStream({
  hostname: "https://cbit-ieee.netlify.app",
});

// Create a write stream to public/sitemap.xml
const writeStream = createWriteStream(
  resolve(__dirname, "public", "sitemap.xml")
);

// Pipe the sitemap stream to the write stream
sitemapStream.pipe(writeStream);

// Add each route to the sitemap
routes.forEach((route) => sitemapStream.write(route));

// End the sitemap stream
sitemapStream.end();

// Wait for the stream to finish and log the result
streamToPromise(sitemapStream)
  .then((sm) => console.log("Sitemap created:", sm.toString()))
  .catch(console.error);

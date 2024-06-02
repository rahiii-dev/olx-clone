import { Facebook, Twitter, Instagram } from "lucide-react";

const footerLinks = [
    {
      title: "POPULAR LOCATIONS",
      links: [
        { name: "Kolkata", url: "/kolkata" },
        { name: "Mumbai", url: "/mumbai" },
        { name: "Chennai", url: "/chennai" },
        { name: "Pune", url: "/pune" }
      ]
    },
    {
      title: "TRENDING LOCATIONS",
      links: [
        { name: "Bhubaneshwar", url: "/bhubaneshwar" },
        { name: "Hyderabad", url: "/hyderabad" },
        { name: "Chandigarh", url: "/chandigarh" },
        { name: "Nashik", url: "/nashik" }
      ]
    },
    {
      title: "ABOUT US",
      links: [
        { name: "Contact Us", url: "/contact" },
        { name: "Tech@OLX", url: "mailto:tech@olx.in" }
      ]
    },
    {
      title: "OLX",
      links: [
        { name: "Blog", url: "/blog" },
        { name: "Help", url: "/help" },
        { name: "Sitemap", url: "/sitemap" },
        { name: "Legal & Privacy information", url: "/legal" },
        { name: "Vulnerability Disclosure Program", url: "/vulnerability-disclosure" }
      ]
    },
    {
      title: "FOLLOW US",
      linkType : 'icon',
      links: [
        { name: "Facebook", url: "https://facebook.com", icon: Facebook },
        { name: "Twitter", url: "https://twitter.com", icon: Twitter },
        { name: "Instagram", url: "https://instagram.com", icon: Instagram }
      ]
    }
  ];
  
  export default footerLinks;
  
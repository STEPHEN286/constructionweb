
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';

const socialMediaLinks = [
    {
      platform: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/tednomex',
    },
    {
      platform: 'Twitter',
      icon: FaTwitter,
      url: 'https://www.twitter.com/tednomex',
    },
    {
      platform: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/tednomex',
    },
    {
      platform: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/company/tednomex',
    },
    {
      platform: 'Pinterest',
      icon: FaPinterest,
      url: 'https://www.pinterest.com/tednomex',
    },
  ];

export default function SocialMediaSection() {
  return (
    <div className="flex space-x-2 md:space-x-4">
      {socialMediaLinks.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 border-1 border-gray-600  p-1 md:p-2  bg-gray-700 hover:text-blue-500"
          aria-label={item.platform}
        >
        <item.icon className ='h-3 w-3 md:h-4 md:w-4'  />
        </a>
      ))}
    </div>
  );
}

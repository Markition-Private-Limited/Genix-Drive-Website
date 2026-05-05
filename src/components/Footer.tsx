import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white font-cairo py-16 px-[58px] border-t border-surface-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="h-10 w-32 rounded flex items-center justify-center text-sm font-bold text-primary tracking-wider">
            <img src={logo} alt="" />
          </div>
          <p className="mt-4 text-sm text-gray-600">
            GenixDrive — your smart driving companion.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold mb-3 text-gray-900">Product</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Features</li>
            <li>Pricing</li>
            <li>Download</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold mb-3 text-gray-900">Company</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold mb-3 text-gray-900">Resources</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Blog</li>
            <li>Support</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} GenixDrive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

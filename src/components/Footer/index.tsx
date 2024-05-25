const Footer = () => {
  return (
    <footer className="footer px-4 py-6">
      <div className="footer-content">
        <p className="text-sm text-gray-600 text-center">
          © FileDrive {new Date().getFullYear()}. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

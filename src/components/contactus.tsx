import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
const ContactPage = () => {
 return (
    <div id="contact" className="">
    <footer className="bg-gradient-to-b from-black to-gray-900 py-12 text-gray-300">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Column 1 - About */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold text-[#A4B5C4] mb-4">CURIEX</h3>
        <p className="text-gray-400 mb-4">Building community through technology and innovation</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" className="text-gray-400 hover:text-[#A4B5C4] transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/curieux.sgtbkhalsa/" className="text-gray-400 hover:text-[#A4B5C4] transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/company/curieux-the-computer-science-society/"className="text-gray-400 hover:text-[#A4B5C4] transition-colors">
           <Linkedin className="h-5 w-5"/>
          </a>
        </div>
      </div>
      
      {/* Column 2 - Quick Links */}
      <div className="text-center">
        <h4 className="text-lg font-semibold text-[#A4B5C4] mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#home" className="hover:text-[#A4B5C4] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#A4B5C4] transition-colors">About</a></li>
          <li><a href="#events" className="hover:text-[#A4B5C4] transition-colors">Events</a></li>
          <li><a href="#projects" className="hover:text-[#A4B5C4] transition-colors">Projects</a></li>
          <li><a href="#team" className="hover:text-[#A4B5C4] transition-colors">Our Team</a></li>
        </ul>
      </div>
      
      {/* Column 3 - Contact */}
      <div className="text-center md:text-right">
        <h4 className="text-lg font-semibold text-[#A4B5C4] mb-4">Contact Us</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-center md:justify-end">
            <Mail className="h-5 w-5 mr-2 text-[#A4B5C4]" />
            <a href="mailto:curiexsociety@gmail.com" className="hover:text-[#A4B5C4] transition-colors">
              curieuxsgtb@gmail.com 
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Phone className="h-5 w-5 mr-2 text-[#A4B5C4]" />
            <a href="tel:+919999999999" className="hover:text-[#A4B5C4] transition-colors">
              +801010100001 
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <span>Computer Science Department, Shri Guru Tegh Bhadur Khalsa College Campus</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} CURIEX Computer Science Society. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
);
};

export default ContactPage;
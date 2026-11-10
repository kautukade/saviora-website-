import React, { useState, useEffect } from 'react';
import { RoutePath } from '../../types';
import { SavioraLogo } from '../common/SavioraLogo';
import { 
  Stethoscope, 
  ChevronDown, 
  Menu, 
  X, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  UserCheck, 
  ShieldCheck, 
  Calendar,
  Building2,
  FileText
} from 'lucide-react';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onRequestDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setSolutionsOpen(false);
    setLoginDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100' 
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Ultra HD Saviora Crest */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            aria-label="Saviora Health Home"
          >
            <SavioraLogo 
              size={46} 
              showText={true} 
              subtext="Clinical Care & Intelligence" 
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {/* Products Dropdown */}
            <div className="relative" onMouseLeave={() => setProductsOpen(false)}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath.startsWith('/products') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div 
                  className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1"
                  onMouseEnter={() => setProductsOpen(true)}
                >
                  <button
                    onClick={() => handleNavClick('/products/doctor-platform')}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">Doctor Platform</div>
                      <div className="text-xs text-slate-500">OPD workspace, discharge summary & queue</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('/products/patient-platform')}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">Patient Platform</div>
                      <div className="text-xs text-slate-500">Multilingual health literacy & health locker</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('/products/ai-assistant')}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">AI Clinical Assistant</div>
                      <div className="text-xs text-slate-500">WhatsApp post-consultation query routing</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('/products/clinical-workflow')}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">Clinical Workflow Engine</div>
                      <div className="text-xs text-slate-500">Fast 2-min consult to education pack conversion</div>
                    </div>
                  </button>

                  <div className="border-t border-slate-100 my-1 pt-1">
                    <button
                      onClick={() => handleNavClick('/products')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50 flex items-center justify-between"
                    >
                      <span>Explore Product Ecosystem</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative" onMouseLeave={() => setSolutionsOpen(false)}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath.startsWith('/solutions') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsOpen && (
                <div 
                  className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1"
                  onMouseEnter={() => setSolutionsOpen(true)}
                >
                  <button
                    onClick={() => handleNavClick('/solutions/doctors')}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">For Clinicians & Hospitals</div>
                      <div className="text-xs text-slate-500">Solo clinics, polyclinics & hospital OPDs</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('/solutions/patients')}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">For Patients & Families</div>
                      <div className="text-xs text-slate-500">Chronic care adherence & post-op clarity</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/technology')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath === '/technology' ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Technology
            </button>

            <button
              onClick={() => handleNavClick('/pricing')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath === '/pricing' ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavClick('/resources')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath === '/resources' ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Resources
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath === '/about' ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath === '/contact' ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Login dropdown pointing to official platforms */}
            <div className="relative" onMouseLeave={() => setLoginDropdownOpen(false)}>
              <button
                onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                aria-expanded={loginDropdownOpen}
              >
                <span>Sign In</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {loginDropdownOpen && (
                <div className="absolute right-0 top-full w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1 z-50 animate-in fade-in">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Select Application Portal
                  </div>
                  <a
                    href="https://app.saviorahealth.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="font-medium">Doctor Workspace</div>
                        <div className="text-[11px] text-slate-400">app.saviorahealth.com</div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://patient.saviorahealth.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="font-medium">Patient Portal</div>
                        <div className="text-[11px] text-slate-400">patient.saviorahealth.com</div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              )}
            </div>

            {/* Request Demo Primary Button */}
            <button
              onClick={onRequestDemo}
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Request a Demo</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestDemo}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 animate-in fade-in">
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1">Products</div>
            <button
              onClick={() => handleNavClick('/products/doctor-platform')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Doctor Platform (OPD & Discharge)
            </button>
            <button
              onClick={() => handleNavClick('/products/patient-platform')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Patient Platform & Records
            </button>
            <button
              onClick={() => handleNavClick('/products/ai-assistant')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              AI Clinical Assistant (WhatsApp)
            </button>
            <button
              onClick={() => handleNavClick('/products/clinical-workflow')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Clinical Workflow Engine
            </button>
            <button
              onClick={() => handleNavClick('/products')}
              className="w-full text-left px-3 py-2 text-xs font-semibold text-blue-600"
            >
              View All Products &rarr;
            </button>
          </div>

          <div className="border-t border-slate-100 pt-2 space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1">Solutions</div>
            <button
              onClick={() => handleNavClick('/solutions/doctors')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              For Doctors & Clinics
            </button>
            <button
              onClick={() => handleNavClick('/solutions/patients')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              For Patients & Chronic Care
            </button>
          </div>

          <div className="border-t border-slate-100 pt-2 space-y-1">
            <button
              onClick={() => handleNavClick('/technology')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Technology & Security
            </button>
            <button
              onClick={() => handleNavClick('/pricing')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Pricing & Plans
            </button>
            <button
              onClick={() => handleNavClick('/resources')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Clinical Resources & Papers
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              About Saviora
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Contact & Sales
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Access Portals</div>
            <a
              href="https://app.saviorahealth.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-800 bg-slate-50 rounded-md"
            >
              <span>Doctor Portal (app.saviorahealth.com)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a
              href="https://patient.saviorahealth.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-800 bg-slate-50 rounded-md"
            >
              <span>Patient Portal (patient.saviorahealth.com)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

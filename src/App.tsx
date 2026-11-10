import React, { useState, useEffect } from 'react';
import { RoutePath, PlanTier } from './types';
import { PLANS } from './utils/pricing';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { DemoModal } from './components/modals/DemoModal';
import { CheckoutModal } from './components/modals/CheckoutModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { DoctorPlatformPage } from './pages/DoctorPlatformPage';
import { PatientPlatformPage } from './pages/PatientPlatformPage';
import { AiAssistantPage } from './pages/AiAssistantPage';
import { ClinicalWorkflowPage } from './pages/ClinicalWorkflowPage';
import { SolutionsDoctorsPage } from './pages/SolutionsDoctorsPage';
import { SolutionsPatientsPage } from './pages/SolutionsPatientsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { PricingPage } from './pages/PricingPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    const path = window.location.pathname as RoutePath;
    const validPaths: RoutePath[] = [
      '/',
      '/about',
      '/products',
      '/products/doctor-platform',
      '/products/patient-platform',
      '/products/ai-assistant',
      '/products/clinical-workflow',
      '/solutions/doctors',
      '/solutions/patients',
      '/technology',
      '/pricing',
      '/resources',
      '/contact',
      '/privacy',
      '/terms',
    ];
    return validPaths.includes(path) ? path : '/';
  });

  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoRole, setDemoRole] = useState<string>('doctor');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanTier>(PLANS[1]); // Practice Pro default

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as RoutePath;
      setCurrentPath(path || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: RoutePath) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenDemo = (role = 'doctor') => {
    setDemoRole(role);
    setDemoModalOpen(true);
  };

  const handleOpenCheckout = (plan?: PlanTier) => {
    if (plan) setSelectedPlan(plan);
    setCheckoutModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={handleNavigate} onRequestDemo={() => handleOpenDemo('doctor')} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} onRequestDemo={() => handleOpenDemo('doctor')} />;
      case '/products':
        return <ProductsPage onNavigate={handleNavigate} onRequestDemo={() => handleOpenDemo('doctor')} />;
      case '/products/doctor-platform':
        return (
          <DoctorPlatformPage 
            onNavigate={handleNavigate} 
            onRequestDemo={() => handleOpenDemo('doctor')}
            onSubscribe={() => handleOpenCheckout(PLANS[1])}
          />
        );
      case '/products/patient-platform':
        return (
          <PatientPlatformPage 
            onNavigate={handleNavigate} 
            onRequestDemo={() => handleOpenDemo('clinic_owner')}
          />
        );
      case '/products/ai-assistant':
        return (
          <AiAssistantPage 
            onNavigate={handleNavigate} 
            onRequestDemo={() => handleOpenDemo('doctor')}
            onSubscribe={() => handleOpenCheckout(PLANS[1])}
          />
        );
      case '/products/clinical-workflow':
        return (
          <ClinicalWorkflowPage 
            onNavigate={handleNavigate} 
            onRequestDemo={() => handleOpenDemo('hospital_admin')}
          />
        );
      case '/solutions/doctors':
        return (
          <SolutionsDoctorsPage 
            onNavigate={handleNavigate} 
            onRequestDemo={() => handleOpenDemo('doctor')}
          />
        );
      case '/solutions/patients':
        return (
          <SolutionsPatientsPage 
            onNavigate={handleNavigate}
          />
        );
      case '/technology':
        return (
          <TechnologyPage 
            onNavigate={handleNavigate} 
            onRequestDemo={() => handleOpenDemo('hospital_admin')}
          />
        );
      case '/pricing':
        return (
          <PricingPage 
            onNavigate={handleNavigate} 
            onRequestDemo={() => handleOpenDemo('doctor')}
          />
        );
      case '/resources':
        return (
          <ResourcesPage 
            onNavigate={handleNavigate} 
            onRequestDemo={() => handleOpenDemo('doctor')}
          />
        );
      case '/contact':
        return (
          <ContactPage 
            onNavigate={handleNavigate} 
            onRequestDemo={() => handleOpenDemo('doctor')}
          />
        );
      case '/privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case '/terms':
        return <TermsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onRequestDemo={() => handleOpenDemo('doctor')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      
      {/* Primary Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onRequestDemo={() => handleOpenDemo('doctor')}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Clinical Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestDemo={() => handleOpenDemo('doctor')}
      />

      {/* Request Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialRole={demoRole}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        selectedPlan={selectedPlan}
      />

    </div>
  );
}

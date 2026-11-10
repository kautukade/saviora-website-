import React, { useState } from 'react';
import { RoutePath, ResourceItem } from '../types';
import { BookOpen, Search, Download, ArrowRight, FileText, CheckCircle2, Clock, User } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

const RESOURCES: ResourceItem[] = [
  {
    id: 'r1',
    title: 'The Two-Minute Consultation Challenge: Addressing the Outpatient Communication Void',
    category: 'Position Paper',
    readTime: '8 min read',
    publishedDate: 'January 2026',
    excerpt: 'An in-depth empirical examination of consultation duration across high-volume primary care centers in India, demonstrating why verbal counseling consistently fails to result in long-term chronic adherence.',
    author: 'Saviora Clinical Health Economics Team',
    downloadable: true,
    featured: true,
  },
  {
    id: 'r2',
    title: 'The Ebbinghaus Forgetting Curve in Clinical Consultations: What Patients Remember 48h Later',
    category: 'Clinical Research',
    readTime: '6 min read',
    publishedDate: 'December 2025',
    excerpt: 'Analyzing memory retention rates following 2-3 minute consultations. Between 40% and 80% of instructions are lost immediately, and 50% of retained information is distorted.',
    author: 'Dr. Ananya Rao & Clinical Advisory Board',
    downloadable: true,
    featured: true,
  },
  {
    id: 'r3',
    title: 'Multilingual Digital Leaflets and Type 2 Diabetes Glycemic Control: A 1,200 Patient Cohort Study',
    category: 'Case Study',
    readTime: '10 min read',
    publishedDate: 'November 2025',
    excerpt: 'Evaluating 90-day HbA1c progression in patients receiving automatic WhatsApp summaries in Hindi, Gujarati, and Tamil compared to standard verbal discharge.',
    author: 'Saviora Research Group',
    downloadable: true,
  },
  {
    id: 'r4',
    title: 'Deterministic AI Guardrails for Post-Consultation Healthcare Communication',
    category: 'Whitepaper',
    readTime: '7 min read',
    publishedDate: 'October 2025',
    excerpt: 'Technical specifications on preventing LLM hallucination in healthcare through chart-anchored retrieval and deterministic red-flag escalation rules.',
    author: 'Vikram Mehta & AI Safety Council',
    downloadable: true,
  },
  {
    id: 'r5',
    title: 'The Outpatient Clinic Implementation Manual: Transitioning to Zero-Latency Digital Leaflets',
    category: 'Guide',
    readTime: '12 min read',
    publishedDate: 'August 2025',
    excerpt: 'Step-by-step operational handbook for clinic receptionists and doctors rolling out automated WhatsApp patient summaries.',
    author: 'Saviora Operations Team',
    downloadable: true,
  },
];

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate, onRequestDemo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const categories = ['All', 'Position Paper', 'Clinical Research', 'Case Study', 'Whitepaper', 'Guide'];

  const filtered = RESOURCES.filter((res) => {
    const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (id: string, title: string) => {
    setDownloadSuccessId(id);
    setTimeout(() => setDownloadSuccessId(null), 3000);
  };

  return (
    <div className="py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Clinical Research & Publications</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Evidence-Based Healthcare Technology Papers
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Access Saviora's clinical position papers, health economics evaluations, and peer-reviewed studies on bridging the consultation communication gap.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search papers & topics..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* Resources List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => {
            const isDownloaded = downloadSuccessId === item.id;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-600 uppercase tracking-wider">{item.category}</span>
                    <div className="flex items-center gap-2">
                      <span>{item.publishedDate}</span>
                      <span>·</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">By {item.author}</span>
                  
                  {isDownloaded ? (
                    <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>PDF Downloaded</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleDownload(item.id, item.title)}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

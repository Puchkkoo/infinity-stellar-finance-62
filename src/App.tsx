
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Flamingo from "./pages/Flamingo";
import Synapse from "./pages/Synapse";
import Sponge from "./pages/Sponge";
import IndianStreet from "./pages/IndianStreet";
import Markets from "./pages/Markets";
import Mission from "./pages/Mission";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/scroll-to-top";

// Service Pages
import Equity from "./pages/services/Equity";
import FuturesOptions from "./pages/services/FuturesOptions";
import International from "./pages/services/International";
import TaxReports from "./pages/services/TaxReports";
import PortfolioManagement from "./pages/services/PortfolioManagement";
import Forex from "./pages/services/Forex";
import Crypto from "./pages/services/Crypto";
import Gullak from "./pages/services/Gullak";

// Feature Pages
import AlgoTrading from "./pages/features/AlgoTrading";
import Security from "./pages/features/Security";
import AdvancedCharting from "./pages/features/AdvancedCharting";
import MobileTrading from "./pages/features/MobileTrading";
import LearningResources from "./pages/features/LearningResources";
import SentimentAnalysis from "./pages/features/SentimentAnalysis";
import StrategyBuilder from "./pages/features/StrategyBuilder";
import StockScreener from "./pages/features/StockScreener";
import PortfolioAnalytics from "./pages/features/PortfolioAnalytics";

// Blog Pages
import BlogPost from "./pages/blog/BlogPost";
import BlogCategory from "./pages/blog/BlogCategory";

// Sponge Pages
import SpongeForums from "./pages/sponge/Forums";

// Synapse Pages
import TaskManagement from "./pages/synapse/TaskManagement";

// Common placeholder components
const PlaceholderComponent = ({ title }) => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <p>Coming Soon</p>
  </div>
);

// Additional routes for Sponge product
const SpongeResources = () => <PlaceholderComponent title="Resources" />;
const SpongeMentors = () => <PlaceholderComponent title="Mentors" />;
const SpongeEvents = () => <PlaceholderComponent title="Events" />;
const SpongeAbout = () => <PlaceholderComponent title="About Sponge" />;

// Additional routes for Synapse product
const SynapseCalendar = () => <PlaceholderComponent title="Calendar" />;
const SynapseDocuments = () => <PlaceholderComponent title="Documents" />;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flamingo" element={<Flamingo />} />
          <Route path="/synapse" element={<Synapse />} />
          <Route path="/sponge" element={<Sponge />} />
          <Route path="/indian-street" element={<IndianStreet />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Service Pages */}
          <Route path="/services/equity" element={<Equity />} />
          <Route path="/services/fno" element={<FuturesOptions />} />
          <Route path="/services/forex" element={<Forex />} />
          <Route path="/services/crypto" element={<Crypto />} />
          <Route path="/services/gullak" element={<Gullak />} />
          <Route path="/services/international" element={<International />} />
          <Route path="/services/tax-reports" element={<TaxReports />} />
          <Route path="/services/portfolio-management" element={<PortfolioManagement />} />
          
          {/* Feature Pages */}
          <Route path="/features/algo-trading" element={<AlgoTrading />} />
          <Route path="/features/sentiment-analysis" element={<SentimentAnalysis />} />
          <Route path="/features/strategy-builder" element={<StrategyBuilder />} />
          <Route path="/features/security" element={<Security />} />
          <Route path="/features/advanced-charting" element={<AdvancedCharting />} />
          <Route path="/features/mobile-trading" element={<MobileTrading />} />
          <Route path="/features/learning-resources" element={<LearningResources />} />
          <Route path="/features/stock-screener" element={<StockScreener />} />
          <Route path="/features/portfolio-analytics" element={<PortfolioAnalytics />} />
          
          {/* Blog Pages */}
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/category/:category" element={<BlogCategory />} />
          
          {/* Sponge Routes */}
          <Route path="/sponge/forums" element={<SpongeForums />} />
          <Route path="/sponge/resources" element={<SpongeResources />} />
          <Route path="/sponge/mentors" element={<SpongeMentors />} />
          <Route path="/sponge/events" element={<SpongeEvents />} />
          <Route path="/sponge/about" element={<SpongeAbout />} />
          
          {/* Synapse Routes */}
          <Route path="/synapse/task-management" element={<TaskManagement />} />
          <Route path="/synapse/calendar" element={<SynapseCalendar />} />
          <Route path="/synapse/documents" element={<SynapseDocuments />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

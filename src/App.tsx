
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import IndianStreet from "./pages/IndianStreet";
import Flamingo from "./pages/Flamingo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Synapse from "./pages/Synapse";
import Sponge from "./pages/Sponge";
import TaskManagement from "./pages/synapse/TaskManagement";
import Mission from "./pages/Mission";
import Markets from "./pages/Markets";

// Services
import Equity from "./pages/services/Equity";
import Forex from "./pages/services/Forex";
import Crypto from "./pages/services/Crypto";
import FuturesOptions from "./pages/services/FuturesOptions";
import International from "./pages/services/International";
import PortfolioManagement from "./pages/services/PortfolioManagement";
import TaxReports from "./pages/services/TaxReports";
import Gullak from "./pages/services/Gullak";

// Features
import AdvancedCharting from "./pages/features/AdvancedCharting";
import SentimentAnalysis from "./pages/features/SentimentAnalysis";
import MobileTrading from "./pages/features/MobileTrading";
import PortfolioAnalytics from "./pages/features/PortfolioAnalytics";
import AlgoTrading from "./pages/features/AlgoTrading";
import Security from "./pages/features/Security";
import LearningResources from "./pages/features/LearningResources";
import StockScreener from "./pages/features/StockScreener";
import StrategyBuilder from "./pages/features/StrategyBuilder";
import SentimentAnalysisDetail from "./pages/features/SentimentAnalysisDetail";

// Blog
import BlogPost from "./pages/blog/BlogPost";
import BlogCategory from "./pages/blog/BlogCategory";
import Forums from "./pages/sponge/Forums";

// Learning
import CourseLesson from "./pages/learning/CourseLesson";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/indian-street" element={<IndianStreet />} />
        <Route path="/flamingo" element={<Flamingo />} />
        <Route path="/synapse" element={<Synapse />} />
        <Route path="/sponge" element={<Sponge />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/markets" element={<Markets />} />
        
        {/* Service Routes */}
        <Route path="/services/equity" element={<Equity />} />
        <Route path="/services/forex" element={<Forex />} />
        <Route path="/services/crypto" element={<Crypto />} />
        <Route path="/services/futures-options" element={<FuturesOptions />} />
        <Route path="/services/international" element={<International />} />
        <Route path="/services/portfolio-management" element={<PortfolioManagement />} />
        <Route path="/services/tax-reports" element={<TaxReports />} />
        <Route path="/services/gullak" element={<Gullak />} />
        
        {/* Feature Routes */}
        <Route path="/features/advanced-charting" element={<AdvancedCharting />} />
        <Route path="/features/sentiment-analysis" element={<SentimentAnalysis />} />
        <Route path="/features/sentiment-analysis/:type" element={<SentimentAnalysisDetail />} />
        <Route path="/features/mobile-trading" element={<MobileTrading />} />
        <Route path="/features/portfolio-analytics" element={<PortfolioAnalytics />} />
        <Route path="/features/algo-trading" element={<AlgoTrading />} />
        <Route path="/features/security" element={<Security />} />
        <Route path="/features/learning-resources" element={<LearningResources />} />
        <Route path="/features/stock-screener" element={<StockScreener />} />
        <Route path="/features/strategy-builder" element={<StrategyBuilder />} />
        
        {/* Blog Routes */}
        <Route path="/blog/post/:id" element={<BlogPost />} />
        <Route path="/blog/category/:category" element={<BlogCategory />} />
        
        {/* Sponge Routes */}
        <Route path="/sponge/forums" element={<Forums />} />
        
        {/* Synapse Routes */}
        <Route path="/synapse/task-management" element={<TaskManagement />} />
        
        {/* Learning Routes */}
        <Route path="/learning/:courseId/:lessonSlug" element={<CourseLesson />} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Contact from './pages/Contact'
import Mission from './pages/Mission'
import Markets from './pages/Markets'
import Login from './pages/Login'
import Register from './pages/Register'
import Equity from './pages/services/Equity'
import Forex from './pages/services/Forex'
import Crypto from './pages/services/Crypto'
import FuturesOptions from './pages/services/FuturesOptions'
import Gullak from './pages/services/Gullak'
import International from './pages/services/International'
import PortfolioManagement from './pages/services/PortfolioManagement'
import TaxReports from './pages/services/TaxReports'
import AdvancedCharting from './pages/features/AdvancedCharting'
import MobileTrading from './pages/features/MobileTrading'
import AlgoTrading from './pages/features/AlgoTrading'
import StrategyBuilder from './pages/features/StrategyBuilder'
import StockScreener from './pages/features/StockScreener'
import PortfolioAnalytics from './pages/features/PortfolioAnalytics'
import Security from './pages/features/Security'
import BlogCategory from './pages/blog/BlogCategory'
import BlogPost from './pages/blog/BlogPost'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import Flamingo from './pages/Flamingo'
import Synapse from './pages/Synapse'
import TaskManagement from './pages/synapse/TaskManagement'
import Sponge from './pages/Sponge'
import Forums from './pages/sponge/Forums'
import SentimentAnalysis from './pages/features/SentimentAnalysis'
import SentimentAnalysisDetail from './pages/features/SentimentAnalysisDetail'
import LearningResources from './pages/features/LearningResources'
import IndianStreet from './pages/IndianStreet'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services/equity" element={<Equity />} />
          <Route path="/services/forex" element={<Forex />} />
          <Route path="/services/crypto" element={<Crypto />} />
          <Route path="/services/fno" element={<FuturesOptions />} />
          <Route path="/services/gullak" element={<Gullak />} />
          <Route path="/services/international" element={<International />} />
          <Route path="/services/portfolio-management" element={<PortfolioManagement />} />
          <Route path="/services/tax-reports" element={<TaxReports />} />
          <Route path="/features/advanced-charting" element={<AdvancedCharting />} />
          <Route path="/features/mobile-trading" element={<MobileTrading />} />
          <Route path="/features/algo-trading" element={<AlgoTrading />} />
          <Route path="/features/strategy-builder" element={<StrategyBuilder />} />
          <Route path="/features/stock-screener" element={<StockScreener />} />
          <Route path="/features/portfolio-analytics" element={<PortfolioAnalytics />} />
          <Route path="/features/security" element={<Security />} />
          <Route path="/features/sentiment-analysis" element={<SentimentAnalysis />} />
          <Route path="/features/sentiment-analysis-detail" element={<SentimentAnalysisDetail />} />
          <Route path="/features/learning-resources" element={<LearningResources />} />
          <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
          <Route path="/blog/:postSlug" element={<BlogPost />} />
          <Route path="/flamingo" element={<Flamingo />} />
          <Route path="/synapse" element={<Synapse />} />
          <Route path="/synapse/task-management" element={<TaskManagement />} />
          <Route path="/sponge" element={<Sponge />} />
          <Route path="/sponge/forums" element={<Forums />} />
          <Route path="/sponge/resources" element={<LearningResources />} />
          <Route path="/indian-street" element={<IndianStreet />} />
        </Routes>
        <Toaster position="bottom-right" />
      </Router>
    </ThemeProvider>
  )
}

export default App

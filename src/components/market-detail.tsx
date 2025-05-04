
import React, { useState } from "react";
import { ArrowLeft, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import CompanyDetail from "./company-detail";

interface MarketDetailProps {
  market: string;
  onClose: () => void;
}

// Generate sample companies for each market index
const generateCompanies = (market) => {
  const companies = [];
  let baseNames = [];
  let baseSectors = [];
  
  // Different company sets based on market
  if (market.includes("NIFTY") || market.includes("SENSEX")) {
    baseNames = ["Reliance Industries", "TCS", "HDFC Bank", "Infosys", "ICICI Bank", "HUL", "ITC", "SBI", "Bharti Airtel", "L&T"];
    baseSectors = ["Energy", "IT", "Banking", "IT", "Banking", "FMCG", "FMCG", "Banking", "Telecom", "Construction"];
  } else if (market.includes("DOW") || market.includes("S&P") || market.includes("NASDAQ")) {
    baseNames = ["Apple", "Microsoft", "Amazon", "Google", "Meta", "Tesla", "Walmart", "Johnson & Johnson", "Visa", "Procter & Gamble"];
    baseSectors = ["Technology", "Technology", "Retail", "Technology", "Technology", "Automotive", "Retail", "Healthcare", "Financial Services", "Consumer Goods"];
  } else {
    baseNames = ["HSBC", "Toyota", "Samsung", "Unilever", "Volkswagen", "Sony", "Alibaba", "Shell", "Siemens", "BMW"];
    baseSectors = ["Banking", "Automotive", "Technology", "Consumer Goods", "Automotive", "Electronics", "Retail", "Energy", "Industrial", "Automotive"];
  }
  
  // Generate 50 companies by extending the base lists
  for (let i = 0; i < 50; i++) {
    const baseIndex = i % baseNames.length;
    const nameSuffix = i >= baseNames.length ? ` ${Math.floor(i / baseNames.length) + 1}` : "";
    const name = baseNames[baseIndex] + nameSuffix;
    const price = Math.round((Math.random() * 5000 + 100) * 100) / 100;
    const change = Math.round((Math.random() * 10 - 5) * 100) / 100;
    
    companies.push({
      symbol: name.replace(/\s+/g, '').substring(0, 5).toUpperCase() + (i + 1),
      name: name,
      price: price,
      change: change,
      marketCap: `₹${Math.round(Math.random() * 900 + 100)}B`,
      volume: `${Math.round(Math.random() * 90 + 10)}M`,
      sector: baseSectors[baseIndex],
      weight: Math.round((Math.random() * 9 + 1) * 100) / 100
    });
  }
  
  // Sort by market cap (weight)
  return companies.sort((a, b) => b.weight - a.weight);
};

const MarketDetail: React.FC<MarketDetailProps> = ({ market, onClose }) => {
  const companies = generateCompanies(market);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    window.scrollTo(0, 0); // Scroll to top when viewing company details
  };

  const handleCloseCompanyDetail = () => {
    setSelectedCompany(null);
  };

  if (selectedCompany) {
    return <CompanyDetail company={selectedCompany} onClose={handleCloseCompanyDetail} />;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={onClose}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Market Overview
        </Button>
        
        <h2 className="text-xl font-bold">{market} Index Components</h2>
      </div>
      
      <Card className="border-infinity-200 dark:border-infinity-800/30 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between">
            <span>Showing all {companies.length} companies</span>
            <Badge variant="outline">Updated: Today</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Rank</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>Sector</TableHead>
                    <TableHead className="text-right">Weight (%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {companies.map((company, index) => (
                    <TableRow 
                      key={company.symbol} 
                      onClick={() => handleCompanyClick(company)}
                      className="cursor-pointer hover:bg-muted/50"
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{company.symbol}</TableCell>
                      <TableCell>{company.name}</TableCell>
                      <TableCell>₹{company.price.toFixed(2)}</TableCell>
                      <TableCell className={company.change > 0 ? "text-green-600" : "text-red-600"}>
                        <div className="flex items-center">
                          {company.change > 0 ? 
                            <ArrowUpRight className="h-3 w-3 mr-1" /> : 
                            <ArrowDownRight className="h-3 w-3 mr-1" />}
                          {company.change.toFixed(2)}%
                        </div>
                      </TableCell>
                      <TableCell>{company.marketCap}</TableCell>
                      <TableCell>{company.volume}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{company.sector}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{company.weight.toFixed(2)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketDetail;

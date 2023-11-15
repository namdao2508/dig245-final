const stockData = [
    { 
      name: 'BioPharm Corp.',
      symbol: 'BPC',
      industry: 'Biotechnology',
      description: 'Leading the way in innovative biopharmaceutical research and development.',
      cost: 235
    },
    { 
      name: 'CloudCom Systems',
      symbol: 'CCS',
      industry: 'Technology',
      description: 'A cutting-edge technology company providing cloud-based solutions for businesses.',
      cost: 70
    },
    { 
      name: 'DeltaEnergy Ltd.',
      symbol: 'DEL',
      industry: 'Energy',
      description: 'A key player in the energy sector, specializing in sustainable and efficient energy production.',
      cost: 325
    },
    { 
      name: 'EcoFoods Group',
      symbol: 'EFG',
      industry: 'Food and Beverage',
      description: 'Dedicated to providing eco-friendly and sustainable food and beverage products.',
      cost: 107
    },
    { 
      name: 'Fusion Motors Inc.',
      symbol: 'FMI',
      industry: 'Automotive',
      description: 'Innovators in the automotive industry, creating cutting-edge and environmentally friendly vehicles.',
      cost: 135
    },
    { 
      name: 'GreenTech Solutions',
      symbol: 'GTS',
      industry: 'Renewable Energy',
      description: 'Pioneering sustainable solutions in renewable energy to combat climate change.',
      cost: 98
    }
  ];  

const marketFunds = [
    {
      name: "Tech Innovators Fund",
      industry: "Information Technology",
      description: "Invest in leading technology companies driving innovation and growth.",
      riskLevel: "Moderate-High",
      cost: 1000,
    },
    {
      name: "Healthcare Growth Fund",
      industry: "Healthcare",
      description: "Support healthcare breakthroughs and advancements with this fund.",
      riskLevel: "Moderate",
      cost: 545,
    },
    {
      name: "Global Real Estate Opportunities Fund",
      industry: "Real Estate",
      description: "Diversify your portfolio with global real estate investments.",
      riskLevel: "Moderate",
      cost: 267,
    },
    {
      name: "Sustainable Future Fund",
      industry: "ESG",
      description: "Invest in companies committed to Environmental, Social, and Governance principles.",
      riskLevel: "Low-Moderate",
      cost: 35,
    },
    {
      name: "Energy Leaders Fund",
      industry: "Energy/Oil",
      description: "Participate in the growth of leading energy and oil companies.",
      riskLevel: "High",
      cost: 98,
    },
    {
      name: "Financial Services Fund",
      industry: "Financial Services",
      description: "Strengthen your portfolio with stable and reliable financial industry investments.",
      riskLevel: "Moderate",
      cost: 132,
    },
  ];

  const bonds = [
    {
      name: "Tech Innovators Corp",
      industry: "Information Technology",
      cost: 1000,
      yield: 3.8,
      rating: "AAA",
    },
    {
      name: "EcoSolutions Green Bond",
      industry: "Energy/Oil",
      cost: 1500,
      yield: 4.2,
      rating: "AA",
    },
  ];

  const stockNews = [
    { company: 'BioPharm Corp.', news: 'Breakthrough in biotechnology leads to a surge in revenue.', sentiment: 'positive' },
    { company: 'CloudCom Systems', news: 'Unveils plans for a strategic partnership with a leading cybersecurity firm.', sentiment: 'positive' },
    { company: 'DeltaEnergy Ltd.', news: 'Invests in cutting-edge technology to boost energy efficiency and sustainability.', sentiment: 'positive' },
    { company: 'EcoFoods Group', news: 'Faces public scrutiny over allegations of using genetically modified ingredients.', sentiment: 'negative' },
    { company: 'Fusion Motors Inc.', news: 'Dominates the market with record-breaking sales of its latest electric vehicle model.', sentiment: 'positive' },
    { company: 'GreenTech Solutions', news: 'Collaborates with government agencies on a major renewable energy infrastructure project.', sentiment: 'positive' },
    { company: 'CloudCom Systems', news: 'CEO resigns, sparking speculation about the company future leadership.', sentiment: 'negative' },
    { company: 'EcoFoods Group', news: 'Recognized for corporate social responsibility efforts in reducing carbon footprint.', sentiment: 'positive' },
    { company: 'Fusion Motors Inc.', news: 'Faces challenges as a recall is issued for a popular vehicle model.', sentiment: 'negative' },
    { company: 'GreenTech Solutions', news: 'Pioneers a groundbreaking method for recycling electronic waste.', sentiment: 'positive' },
    { company: 'BioPharm Corp.', news: 'Collaborates with leading universities for groundbreaking research in gene therapy.', sentiment: 'positive' },
    { company: 'GreenTech Solutions', news: 'Faces public praise for achieving carbon neutrality in its operations.', sentiment: 'positive' },
    { company: 'Fusion Motors Inc.', news: 'Announces plans to expand into the European market with a new manufacturing plant.', sentiment: 'positive' },
    { company: 'DeltaEnergy Ltd.', news: 'Partners with environmental organizations to fund clean energy projects worldwide.', sentiment: 'positive' },
    { company: 'EcoFoods Group', news: 'Acquires a startup specializing in plant-based protein alternatives.', sentiment: 'positive' },
    { company: 'CloudCom Systems', news: 'Stocks surge after the successful launch of a revolutionary artificial intelligence platform.', sentiment: 'positive' },
    { company: 'Fusion Motors Inc.', news: 'Executives face insider trading allegations, prompting an investigation.', sentiment: 'negative' },
    { company: 'GreenTech Solutions', news: 'Wins a prestigious environmental award for its commitment to sustainability.', sentiment: 'positive' },
    { company: 'EcoFoods Group', news: 'Unveils plans for a global marketing campaign to promote eco-friendly food practices.', sentiment: 'neutral' },
    { company: 'BioPharm Corp.', news: 'Invests in research and development for a potential COVID-19 treatment, sparking investor interest.', sentiment: 'neutral' },
    { company: 'CloudCom Systems', news: 'Faces criticism over data privacy concerns, leading to a drop in stock prices.', sentiment: 'negative' },
    { company: 'DeltaEnergy Ltd.', news: 'Sponsors a major renewable energy conference, showcasing industry leadership.', sentiment: 'positive' },
    { company: 'Fusion Motors Inc.', news: 'Experiences a surge in demand for electric vehicles as governments announce green energy incentives.', sentiment: 'neutral' },
    { company: 'GreenTech Solutions', news: 'Announces plans to go public, attracting attention from investors worldwide.', sentiment: 'neutral' },
    { company: 'EcoFoods Group', news: 'Recalls a popular product due to contamination concerns, impacting quarterly earnings.', sentiment: 'negative' },
  ];

const usedStockStories = Array.from({ length: stockNews.length }, () => false);
  
const industryNewsWithBondEffect = [
    { industry: "Information Technology", news: "Cybersecurity legislation enhances data protection, boosting tech sector confidence.", sentiment: "positive", affectsBondPrice: "neutral" },
    { industry: "Healthcare", news: "New monetary policies allocate funds for telemedicine infrastructure, supporting healthcare innovation.", sentiment: "positive", affectsBondPrice: "positive" },
    { industry: "Real Estate", news: "Fiscal policies incentivize green building projects, driving sustainable real estate development.", sentiment: "positive", affectsBondPrice: "positive" },
    { industry: "ESG", news: "Increased government spending in ESG initiatives attracts socially responsible investors.", sentiment: "positive", affectsBondPrice: "positive" },
    { industry: "Energy/Oil", news: "Energy Leaders Fund announces strategic shift towards renewable energy, aligning with industry trends.", sentiment: "positive", affectsBondPrice: "positive" },
    { industry: "Financial Services", news: "Moderate market fluctuations prompt financial institutions to reassess risk management strategies.", sentiment: "neutral", affectsBondPrice: "neutral" },
    { industry: "Technology", news: "Urbanization trends drive demand for smart city technologies, positively impacting the tech sector.", sentiment: "positive", affectsBondPrice: "positive" },
    { industry: "Healthcare", news: "Regulatory challenges pose obstacles for pharmaceutical companies, impacting industry growth.", sentiment: "negative", affectsBondPrice: "negative" },
    { industry: "Real Estate", news: "Rising interest rates create uncertainties in the real estate market, affecting property values.", sentiment: "negative", affectsBondPrice: "negative" },
    { industry: "ESG", news: "Concerns arise as companies face criticism for greenwashing in ESG reporting.", sentiment: "negative", affectsBondPrice: "negative" },
    { industry: "Energy/Oil", news: "Oil prices surge following geopolitical tensions, affecting the performance of energy stocks.", sentiment: "negative", affectsBondPrice: "negative" },
    { industry: "Financial Services", news: "Positive sentiment as financial institutions adopt fintech innovations to enhance customer experience.", sentiment: "positive", affectsBondPrice: "positive" },
    { industry: "Technology", news: "Tech industry faces challenges with supply chain disruptions, impacting product launches.", sentiment: "negative", affectsBondPrice: "negative" },
    { industry: "Healthcare", news: "Positive outlook as healthcare companies collaborate on a joint initiative for disease prevention.", sentiment: "positive", affectsBondPrice: "positive" },
    { industry: "Real Estate", news: "Government initiatives drive affordable housing projects, positively impacting the real estate sector.", sentiment: "positive", affectsBondPrice: "positive" },
    { industry: "ESG", news: "Companies prioritize diversity and inclusion initiatives, aligning with ESG principles.", sentiment: "positive", affectsBondPrice: "positive" },
  ];

const usedIndustryStories = Array.from({ length: industryNews.length }, () => false);

function getStockStories(){
    return {stockNews, usedStockStories};
}

function getIndustryNews(){
    return {industryNewsWithBondEffectk, usedIndustryStories};
}

function getStock(index){
    return stockData;
}

function getMarketFund(index){
    return marketFunds;
}

function getBond(index){
    return bonds;
}

function changeStock(name, sentiment, maxAmount) {
    for (let i = 0; i < stockData.length; i++) {
        if (stockData[i].name === name) {
            if (sentiment === 'positive') {
                //random amount increase between $1 and maxAmount * Current Price
                const randomAmount = Math.floor(Math.random() * (stockData[i].cost * maxAmount)) + 1;
                stockData[i].cost += randomAmount;
                return;
            }else if(sentiment === 'negative'){
                //random amount decrease between $1 and maxAmount * Current Price
                const randomAmount = Math.floor(Math.random() * (stockData[i].cost * maxAmount)) + 1;
                stockData[i].cost -= randomAmount;
                return;
            }
            fluctuate = Math.random < 0.5;
            //randomly fluctuates between 5% 
            const randomAmount = Math.floor(Math.random() * (stockData[i].cost * 0.05));
            if(fluctuate){
                //fluctuated increase
                stockData[i].cost += randomAmount;
                return;
            }
            //fluctuates decrease
            stockData[i].cost -= randomAmount;
            return;
        }   
    }
}

function changeIndustry(industry, sentiment, maxAmount, affectsBondPrice) {
    for (let i = 0; i < marketFunds.length; i++) {
        if (marketFunds[i].industry === industry) {
            if (sentiment === 'positive') {
                //random amount increase between $1 and maxAmount * Current Price
                const randomAmount = Math.floor(Math.random() * (marketFunds[i].cost * maxAmount)) + 1;
                marketFunds[i].cost += randomAmount;
                return;
            }else if(sentiment === 'negative'){
                //random amount decrease between $1 and maxAmount * Current Price
                const randomAmount = Math.floor(Math.random() * (marketFunds[i].cost * maxAmount)) + 1;
                marketFunds[i].cost -= randomAmount;
                return;
            }
            fluctuate = Math.random < 0.5;
            //randomly fluctuates between 5% 
            const randomAmount = Math.floor(Math.random() * (marketFunds[i].cost * 0.05));
            if(fluctuate){
                //fluctuated increase
                marketFunds[i].cost += randomAmount;
                return;
            }
            //fluctuates decrease
            marketFunds[i].cost -= randomAmount;
            return;
        }
        if( i < bonds.length && bonds[i] === industry){
            // Assume a simple linear relationship in bond yields
            const yieldChange = percentageChange * 0.2; 
        
            // Adjust bond yields based on the affectsBondPrice property
            if (sentiment === 'positive' && affectsBondPrice === 'positive') {
                bonds[i].yield -= yieldChange;
            } else if (sentiment === 'negative' && affectsBondPrice === 'negative') {
                bonds[i].yield += yieldChange;
            }
            annualCouponPayment = bonds[i].yield * bonds[i].cost;
            recalculateBondPrice(bonds[i].yield, annualCouponPayment, bonds[i].cost, 5);
        }
    }
}

function calculateNewBondPrice(newYield, annualCouponPayment, faceValue, numberOfYears) {
    const presentValueFactor = 1 / Math.pow(1 + newYield, numberOfYears);
    const newPresentValue = annualCouponPayment * ((1 - presentValueFactor) / newYield) + faceValue * presentValueFactor;
    return newPresentValue;
}
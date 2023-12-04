let period = 0;
let year = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
numStocksInvested = new Set();
numFundsInvested = new Set();
numBondsInvested = new Set();

const stockData = [
  { 
    name: 'BioPharm Corp.',
    symbol: 'BPC',
    industry: 'Biotechnology',
    description: 'BioPharm Corp. is a biotechnology firm leading the way in innovative biopharmaceutical research and development.',
    cost: 235,
    data: [],
    owned: 0
  },
  { 
    name: 'CloudCom Systems',
    symbol: 'CCS',
    industry: 'Technology',
    description: 'CloudCom Systems is a cutting-edge technology company providing cloud-based solutions for businesses.',
    cost: 70,
    data: [],
    owned: 0
  },
  { 
    name: 'DeltaEnergy Ltd.',
    symbol: 'DEL',
    industry: 'Energy',
    description: 'DeltaEnergy Ltd. is a key player in the energy sector, specializing in sustainable and efficient energy production.',
    cost: 325,
    data: [],
    owned: 0
  },
  { 
    name: 'EcoFoods Group',
    symbol: 'EFG',
    industry: 'Food and Beverage',
    description: 'EcoFoods Group is a company in the food and beverages industry dedicated to providing eco-friendly and sustainable food and beverage products.',
    cost: 107,
    data: [],
    owned: 0
  },
  { 
    name: 'Fusion Motors Inc.',
    symbol: 'FMI',
    industry: 'Automotive',
    description: 'Fusion Motors Inc. are Innovators in the automotive industry, creating cutting-edge and environmentally friendly vehicles.',
    cost: 135,
    data: [],
    owned: 0
  },
  { 
    name: 'GreenTech Solutions',
    symbol: 'GTS',
    industry: 'Renewable Energy',
    description: 'GreenTech Solutions pioneer sustainable solutions in renewable energy to combat climate change.',
    cost: 98,
    data: [],
    owned: 0
  }
];  
const marketFunds = [
  {
    name: "Tech Innovators Fund",
    industry: "Technology",
    description: "Invest in leading technology companies driving innovation and growth.",
    cost: 1000,
    data: [],
    owned: 0,
    symbol: "TIF" // Add a symbol property with a suitable value
  },
  {
    name: "Healthcare Growth Fund",
    industry: "Healthcare",
    description: "Support healthcare breakthroughs and advancements with this fund.",
    cost: 545,
    data: [],
    owned: 0,
    symbol: "HGF" // Add a symbol property with a suitable value
  },
  {
    name: "Global Real Estate Opportunities Fund",
    industry: "Real Estate",
    description: "Diversify your portfolio with global real estate investments.",
    cost: 267,
    data: [],
    owned: 0,
    symbol: "GRO" // Add a symbol property with a suitable value
  },
  {
    name: "Sustainable Future Fund",
    industry: "ESG",
    description: "Invest in companies committed to Environmental, Social, and Governance principles.",
    cost: 35,
    data: [],
    owned: 0,
    symbol: "SFF" // Add a symbol property with a suitable value
  },
  {
    name: "Energy Leaders Fund",
    industry: "Energy/Oil",
    description: "Participate in the growth of leading energy and oil companies.",
    cost: 98,
    data: [],
    owned: 0,
    symbol: "ELF" // Add a symbol property with a suitable value
  },
  {
    name: "Financial Services Fund",
    industry: "Financial Services",
    description: "Strengthen your portfolio with stable and reliable financial industry investments.",
    cost: 132,
    data: [],
    owned: 0,
    symbol: "FSF" // Add a symbol property with a suitable value
  },
];

const bonds = [
  {
    name: "Tech Innovators Corp Bond",
    industry: "Technology",
    cost: 1000,
    interest: 0.05,
    data: [],
    owned: 0
  },
  {
    name: "EcoSolutions Green Bond",
    industry: "Energy/Oil",
    cost: 1500,
    interest: 0.03,
    data: [],
    owned: 0
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
  { company: 'BioPharm Corp.', news: 'Secures a partnership with a leading research institution to advance personalized medicine.', sentiment: 'positive' },
  { company: 'CloudCom Systems', news: 'Launches a new data encryption solution, enhancing data privacy for clients.', sentiment: 'positive' },
  { company: 'DeltaEnergy Ltd.', news: 'Commits to net-zero emissions by 2030, aligning with global sustainability goals.', sentiment: 'positive' },
  { company: 'EcoFoods Group', news: 'Introduces a transparency initiative, providing detailed sourcing information to consumers.', sentiment: 'positive' },
  { company: 'Fusion Motors Inc.', news: 'Releases an upgraded version of its electric vehicle, setting new standards for performance.', sentiment: 'positive' },
  { company: 'GreenTech Solutions', news: 'Launches a community outreach program to promote environmental education.', sentiment: 'positive' },
  { company: 'CloudCom Systems', news: 'Appoints a seasoned cybersecurity expert as the new Chief Information Security Officer.', sentiment: 'positive' },
  { company: 'EcoFoods Group', news: 'Expands its sustainable packaging initiative, reducing plastic usage across product lines.', sentiment: 'positive' },
  { company: 'Fusion Motors Inc.', news: 'Addresses recall challenges with improved quality control measures, reassuring consumers.', sentiment: 'neutral' },
  { company: 'GreenTech Solutions', news: 'Collaborates with start-ups for innovative solutions in renewable energy storage.', sentiment: 'positive' },
  { company: 'BioPharm Corp.', news: 'Receives FDA approval for a breakthrough treatment, opening new revenue streams.', sentiment: 'positive' },
  { company: 'GreenTech Solutions', news: 'Launches a biodiversity conservation project in partnership with environmental NGOs.', sentiment: 'positive' },
  { company: 'Fusion Motors Inc.', news: 'Expands its charging infrastructure to support the growing electric vehicle market.', sentiment: 'positive' },
  { company: 'DeltaEnergy Ltd.', news: 'Invests in cutting-edge green technologies, positioning itself as an industry leader.', sentiment: 'positive' },
  { company: 'EcoFoods Group', news: 'Enters the plant-based meat market with a range of innovative and sustainable products.', sentiment: 'positive' },
  { company: 'CloudCom Systems', news: 'Announces a breakthrough in quantum computing, sparking interest from tech enthusiasts.', sentiment: 'positive' },
  { company: 'Fusion Motors Inc.', news: 'Addresses legal challenges with a settlement, mitigating potential long-term impacts.', sentiment: 'neutral' },
  { company: 'GreenTech Solutions', news: 'Collaborates with universities to establish a research fund for sustainable technologies.', sentiment: 'positive' },
  { company: 'EcoFoods Group', news: 'Expands its organic farming network, ensuring a steady supply of natural ingredients.', sentiment: 'positive' },
  { company: 'BioPharm Corp.', news: 'Partners with global health organizations for affordable access to life-saving medications.', sentiment: 'positive' },
  { company: 'CloudCom Systems', news: 'Addresses privacy concerns with a comprehensive data protection policy, rebuilding trust.', sentiment: 'positive' },
  { company: 'DeltaEnergy Ltd.', news: 'Unveils plans for a green bond issuance to fund renewable energy projects globally.', sentiment: 'positive' },
  { company: 'Fusion Motors Inc.', news: 'Explores partnerships with ride-sharing companies to expand its electric vehicle market.', sentiment: 'positive' },
  { company: 'GreenTech Solutions', news: 'Initiates a tree-planting campaign to offset carbon emissions, fostering environmental stewardship.', sentiment: 'positive' },
  { company: 'EcoFoods Group', news: 'Launches an innovation hub to support sustainable food startups, driving industry progress.', sentiment: 'positive' },
  { company: 'CloudCom Systems', news: 'Experiences a data breach, leading to a decline in stock prices and heightened cybersecurity measures.', sentiment: 'negative' },
  { company: 'Fusion Motors Inc.', news: 'Recalls a popular vehicle model due to safety concerns, impacting consumer confidence.', sentiment: 'negative' },
  { company: 'EcoFoods Group', news: 'Faces backlash over a supply chain scandal, prompting a review of sourcing practices.', sentiment: 'negative' },
];

const usedStockStories = Array.from({ length: stockNews.length }, () => false);

const industryNewsWithBondEffect = [
  { industry: "Technology", news: "Cybersecurity legislation enhances data protection, boosting tech sector confidence.", sentiment: "positive", affectsBondPrice: "neutral" },
  { industry: "Healthcare", news: "New monetary policies allocate funds for telemedicine infrastructure, supporting healthcare innovation.", sentiment: "positive", affectsBondPrice: null },
  { industry: "Real Estate", news: "Fiscal policies incentivize green building projects, driving sustainable real estate development.", sentiment: "positive", affectsBondPrice: null },
  { industry: "ESG", news: "Increased government spending in ESG initiatives attracts socially responsible investors.", sentiment: "positive", affectsBondPrice: null },
  { industry: "Energy/Oil", news: "Energy Leaders Fund announces strategic shift towards renewable energy, aligning with industry trends.", sentiment: "positive", affectsBondPrice: "positive" },
  { industry: "Financial Services", news: "Moderate market fluctuations prompt financial institutions to reassess risk management strategies.", sentiment: "neutral", affectsBondPrice: null },
  { industry: "Technology", news: "Urbanization trends drive demand for smart city technologies, positively impacting the tech sector.", sentiment: "positive", affectsBondPrice: "positive" },
  { industry: "Healthcare", news: "Regulatory challenges pose obstacles for pharmaceutical companies, impacting industry growth.", sentiment: "negative", affectsBondPrice: null },
  { industry: "Real Estate", news: "Rising interest rates create uncertainties in the real estate market, affecting property values.", sentiment: "negative", affectsBondPrice: null },
  { industry: "ESG", news: "Concerns arise as companies face criticism for greenwashing in ESG reporting.", sentiment: "negative", affectsBondPrice: null },
  { industry: "Energy/Oil", news: "Oil prices surge following geopolitical tensions, affecting the performance of energy stocks.", sentiment: "negative", affectsBondPrice: "negative" },
  { industry: "Financial Services", news: "Positive sentiment as financial institutions adopt fintech innovations to enhance customer experience.", sentiment: "positive", affectsBondPrice: null },
  { industry: "Technology", news: "Tech industry faces challenges with supply chain disruptions, impacting product launches.", sentiment: "negative", affectsBondPrice: "negative" },
  { industry: "Healthcare", news: "Positive outlook as healthcare companies collaborate on a joint initiative for disease prevention.", sentiment: "positive", affectsBondPrice: null },
  { industry: "Real Estate", news: "Government initiatives drive affordable housing projects, positively impacting the real estate sector.", sentiment: "positive", affectsBondPrice: null },
  { industry: "ESG", news: "Companies prioritize diversity and inclusion initiatives, aligning with ESG principles.", sentiment: "positive", affectsBondPrice: null },
  { industry: "Technology", news: "Semiconductor shortage challenges tech companies, impacting production schedules.", sentiment: "negative", affectsBondPrice: "negative" },
  { industry: "Energy/Oil", news: "Renewable energy subsidies face potential cuts, raising concerns in the energy sector.", sentiment: "negative", affectsBondPrice: "negative" },
  { industry: "Financial Services", news: "Rising interest rates lead to increased borrowing costs, impacting financial sector profits.", sentiment: "negative", affectsBondPrice: null },
  { industry: "Healthcare", news: "Drug patent expirations create challenges for pharmaceutical companies, affecting revenue streams.", sentiment: "negative", affectsBondPrice: null },
  { industry: "Real Estate", news: "Commercial real estate market faces decline as remote work trends continue.", sentiment: "negative", affectsBondPrice: null },
  { industry: "Technology", news: "New breakthroughs in AI technology drive optimism in the tech sector.", sentiment: "positive", affectsBondPrice: "positive" },
  { industry: "Energy/Oil", news: "Major oil discovery boosts industry confidence, leading to positive market reactions.", sentiment: "positive", affectsBondPrice: "positive" },
  { industry: "Financial Services", news: "Fintech startups receive substantial funding, contributing to positive industry growth.", sentiment: "positive", affectsBondPrice: null },
  { industry: "Healthcare", news: "Medical research institutes collaborate on groundbreaking cancer treatment, positively impacting healthcare stocks.", sentiment: "positive", affectsBondPrice: null },
  { industry: "Real Estate", news: "Residential housing market experiences a surge in demand, driving up property values.", sentiment: "positive", affectsBondPrice: null },
  { industry: "ESG", news: "Companies adopt aggressive sustainability goals, attracting investors with a focus on ESG principles.", sentiment: "positive", affectsBondPrice: null },
  { industry: "Technology", news: "Global tech giants announce strategic partnerships, fostering innovation and market growth.", sentiment: "positive", affectsBondPrice: "positive" },
  { industry: "Energy/Oil", news: "Advancements in renewable energy technology lead to increased investments in clean energy projects.", sentiment: "positive", affectsBondPrice: "positive" },
  { industry: "Financial Services", news: "Central banks implement measures to stabilize financial markets, providing reassurance to investors.", sentiment: "neutral", affectsBondPrice: null },
  { industry: "Healthcare", news: "Regulatory approval delays impact pharmaceutical companies, leading to uncertainty in the sector.", sentiment: "negative", affectsBondPrice: null },
  { industry: "Real Estate", news: "Commercial property vacancies rise as remote work trends persist, affecting real estate investments.", sentiment: "negative", affectsBondPrice: null },
  { industry: "ESG", news: "Companies face criticism for inadequate progress in achieving environmental goals, impacting investor confidence.", sentiment: "negative", affectsBondPrice: null },
  { industry: "Technology", news: "Tech industry grapples with a high-profile data breach, causing a decline in market trust.", sentiment: "negative", affectsBondPrice: "negative" },
  { industry: "Energy/Oil", news: "Geopolitical tensions disrupt global oil supply chains, negatively affecting energy stocks.", sentiment: "negative", affectsBondPrice: "negative" },
  { industry: "Financial Services", news: "Increasing interest rates lead to concerns about the affordability of loans, impacting financial institutions.", sentiment: "negative", affectsBondPrice: null },
  { industry: "Healthcare", news: "Global health crisis triggers panic selling in healthcare stocks, leading to market volatility.", sentiment: "negative", affectsBondPrice: null },
  { industry: "Real Estate", news: "Stringent zoning regulations hinder real estate development, impacting property values.", sentiment: "negative", affectsBondPrice: null },
  { industry: "ESG", news: "Companies accused of greenwashing face legal repercussions, negatively affecting ESG investments.", sentiment: "negative", affectsBondPrice: null },
];

const usedIndustryStories = Array.from({ length: industryNewsWithBondEffect.length }, () => false);

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
    }else{
      let fluctuate = Math.random();
      //randomly fluctuates between 15% 
      const randomAmount = Math.floor(Math.random() * (stockData[i].cost * 0.15));
      
      if(fluctuate < 0.5){
        //fluctuated increase
        stockData[i].cost += randomAmount;
        return;
      }
      //fluctuates decrease
      stockData[i].cost -= randomAmount;
      }
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
      }else{
        let fluctuate = Math.random();
        //randomly fluctuates between 15% 
        const randomAmount = Math.floor(Math.random() * (marketFunds[i].cost * 0.15));
        if(fluctuate < 0.7){
          //fluctuated increase
          marketFunds[i].cost += randomAmount;
          return;
        }
        //fluctuates decrease
        marketFunds[i].cost -= randomAmount;
        return;
      }
    }
  }

  for (let i = 0; i < bonds.length; i++) {
    if (bonds[i].industry === industry) {
      if (sentiment === 'positive') {
        const randomAmount = Math.floor(Math.random() * (bonds[i].cost * maxAmount)) + 1;
        bonds[i].cost += randomAmount;

        // Adjust bond price based on affectsBondPrice
        adjustBondPrice(bonds[i], affectsBondPrice);
        return;
      } else if (sentiment === 'negative') {
        const randomAmount = Math.floor(Math.random() * (bonds[i].cost * maxAmount)) + 1;
        bonds[i].cost -= randomAmount;

        // Adjust bond price based on affectsBondPrice
        adjustBondPrice(bonds[i], affectsBondPrice);
        return;
      } else {
        let fluctuate = Math.random();
        const randomAmount = Math.floor(Math.random() * (bonds[i].cost * 0.15));

        if (fluctuate < 0.7) {
          bonds[i].cost += randomAmount;
        } else {
          bonds[i].cost -= randomAmount;
        }

        // Adjust bond price based on affectsBondPrice
        adjustBondPrice(bonds[i], affectsBondPrice);
        return;
      }
    }
  }
}

function adjustBondPrice(bond, affectsBondPrice) {
  // Adjust bond price based on affectsBondPrice
  if (affectsBondPrice === 'positive') {
    bond.cost *= 1.05; // Increase bond price by 5%
  } else if (affectsBondPrice === 'negative') {
    bond.cost *= 0.95; // Decrease bond price by 5%
  }
}

let cash = 100000;
let earnings = [];
let stocksOwned = 0;
let marketFundsOwned = 0;
let bondsOwned = 0;
let listofNews = [];

function run(){
    listofNews = [];
    // This for loop will initialize the news where there can only exist 1 news story for one stock
    // and one news story for an industry. 
    for(let i = 0; i < 5; i++){
        let index = Math.floor(Math.random() * stockNews.length);
        if(i < 2){
            if(i == 1 && stockNews[index].company != listofNews[i-1].company){
                if(usedStockStories[index] == false){
                    usedStockStories[i] = true;
                    listofNews[i] = stockNews[index];
                }else{
                    i--;
                }
            }else if(i == 0){
                if(usedStockStories[index] == false){
                    usedStockStories[i] = true;
                    listofNews[i] = stockNews[index];
                }else{
                    i--;
                }
            }else{
                i--;
            }
        }else{
            index = Math.floor(Math.random() * industryNewsWithBondEffect.length);
            if(i == 4 && industryNewsWithBondEffect[index].industry != listofNews[i-1].industry 
                && industryNewsWithBondEffect[index].industry != listofNews[i-2].industry){
                if(usedIndustryStories[index] == false){
                    usedIndustryStories[i] = true;
                    listofNews[i] = industryNewsWithBondEffect[index];
                }else{
                    i--;
                }
            }else if(i == 3 && industryNewsWithBondEffect[index].industry != listofNews[i-1].industry){
                if(usedIndustryStories[index] == false){
                    usedIndustryStories[i] = true;
                    listofNews[i] = industryNewsWithBondEffect[index];
                }else{
                    i--;
                }
            }else if(i == 2){
                if(usedIndustryStories[index] == false){
                    usedIndustryStories[i] = true;
                    listofNews[i] = industryNewsWithBondEffect[index];
                }else{
                    i--;
                }
            }else{
                i--;
            }
        }
    }
    // localStorage.setItem("earnings", JSON.stringify(earnings));
    // localStorage.setItem("cash", JSON.stringify(cash));
    // localStorage.setItem("earnings", JSON.stringify(earnings));
    // localStorage.setItem("cash", JSON.stringify(stocksOwned));
    // localStorage.setItem("earnings", JSON.stringify(marketFundsOwned));
    // localStorage.setItem("cash", JSON.stringify(stockData));
    // localStorage.setItem("earnings", JSON.stringify(marketFunds));
    // localStorage.setItem("cash", JSON.stringify(stockNews));
    // localStorage.setItem("industryNewsWithBondEffect", JSON.stringify(industryNewsWithBondEffect));
}

function results(){
  let a = 0;
    // This for loop will change the price of the stock, mutual funds, or bonds affected by the news
  for(let i = 0; i < listofNews.length; i++){
    if(i < 2){
      let c = findStockByName(listofNews[i].company);
      let temp = c.cost;
      changeStock(listofNews[i].company, listofNews[i].sentiment, 0.3);
      const stockPrices = generateNoisyArray(temp, c.cost, 12);
      c.data.pop;
      c.data = c.data.concat(stockPrices);
      a = c.data.length;
    }else{
      let c = findMarketFundsByIndustry(listofNews[i].industry);
      let temp = c.cost;
      changeIndustry(listofNews[i].industry, listofNews[i].sentiment, 0.2, listofNews[i].affectsBondPrice);
      const marketFundPrices = generateNoisyArray(temp, c.cost, 12);
      c.data.pop;
      c.data = c.data.concat(marketFundPrices);
    }
  }

    // Fluctuate all the other stocks and market funds not affected by the news
  for(let i = 0; i < stockData.length; i++){
    if(stockData[i].data.length < a){
      let temp = stockData[i].cost;
      changeStock(stockData[i].name, "neutral", 0);
      const stockPrices = generateNoisyArray(temp, stockData[i].cost, 12);
      stockData[i].data.pop;
      stockData[i].data = stockData[i].data.concat(stockPrices);
    }
    if(marketFunds[i].data.length < a){
      let temp = marketFunds[i].cost;
      changeIndustry(marketFunds[i].industry, "neutral", 0, "neutral");
      const marketFundPrices = generateNoisyArray(temp, marketFunds[i].cost, 12);
      marketFunds[i].data.pop;
      marketFunds[i].data = marketFunds[i].data.concat(marketFundPrices);
    }
  }

    // Update Changes to Total Earnings and Total Stocks performance along with 
    // Funds performance
  updateEarnings(true);
}

function updateEarnings(changes){
  if(changes){
    let tempTotal = Array.from({ length: 12 }, () => cash);
    let tempStock = Array.from({ length: 12 }, () => 0);
    let tempFunds = Array.from({ length: 12 }, () => 0);
    for(let i = 0; i < stockData.length; i++){
      if(stockData[i].owned > 0){
        for(let j = stockData[i].data.length - 1; j > stockData[i].data.length - 13; j--){
          tempStock[(j)%12] += (stockData[i].data[j] * stockData[i].owned);
        }
        stocksOwned += stockData[i].cost;
      }
      if(marketFunds[i].owned > 0){
        for(let j = marketFunds[i].data.length - 1; j > marketFunds[i].data.length - 13; j--){
          tempFunds[(j)%12] += (marketFunds[i].data[j] * marketFunds[i].owned);
        }
        marketFundsOwned +=  marketFunds[i].cost;
      }
    }
    for(let i = 0; i < 12; i++){
      tempTotal[i] += tempStock[i] + tempFunds[i];
    }
    earnings = earnings.concat(tempTotal);
    if(tempStock.length > 0){
      stocksOwned = tempStock[tempStock.length - 1];
    }
    if(tempFunds.length > 0){
      marketFundsOwned = tempFunds[tempFunds.length - 1];   
    }
  }else{
    stocksOwned = 0;
    marketFundsOwned = 0;
    bondsOwned = 0;
    for(let i = 0; i < stockData.length; i++){
      if(stockData[i].owned > 0){
        stocksOwned += stockData[i].owned * stockData[i].cost;
      }
      if(marketFunds[i].owned > 0){
        marketFundsOwned += marketFunds[i].owned * marketFunds[i].cost;
      }
      if(i < 2 && bonds[i].owned){
        bondsOwned = 0;
      }
    }
  }
}

function generateNoisyArray(first, last, length) {
    // Calculate the step size between elements
    const step = (last - first) / (length - 1);
  
    // Generate random noise for each element between first and last
    const noisyArray = Array.from({ length }, (_, index) => {
      if (index === 0) {
        return first;
      } else if (index === length - 1) {
        return last;
      } else {
        // Introduce random noise in both positive and negative directions
        const noise = (Math.random() - 0.5) * step * 2;
        return Math.floor(first + index * step + noise);
      }
    });
  
    return noisyArray;
}

function findStockByName(companyName) {
    return stockData.find(company => company.name === companyName);
}

function findMarketFundsByIndustry(marketFundName) {
    return marketFunds.find(marketFund => marketFund.industry === marketFundName);
}

function stocksOperations(companyName, numStocks, buy){
    let company = findStockByName(companyName);
    let price = company.cost * numStocks;
    if(buy && price <= cash){
        company.owned += numStocks;
        cash -= price;
    }else if(numStocks <= company.owned){
        company.owned -= numStocks;
        cash += price;
    }
}

function fundsOperations(marketFundName, numStocks, buy){
    let fund = findMarketFundsByIndustry(marketFundName);
    let price = fund.cost * numStocks;
    if(buy && price <= cash){
        fund.owned += numStocks;
        cash -= price;
    }else if(numStocks <= fund.owned){
        fund.owned -= numStocks;
        cash += price;
    }
}

function bondsOperations(){
  return;
}

function toggleVisibility(element) {
  setTimeout(() => {
    // Code to execute after the specified delay
    if (element.classList.contains("d-none")) {
      element.classList.remove("d-none");
      element.classList.add("d-block");
    } else {
      element.classList.remove("d-block");
      element.classList.add("d-none");
    }
  }, 250);
}

const start = document.getElementById("start");
const startWindow = document.getElementById("startWindow");
const gameWindow = document.getElementById("gameWindow");
const endWindow = document.getElementById("endWindow");
const gameResults1 = document.getElementById("gameResults1");
const gameResults2 = document.getElementById("gameResults2");
const gameResults3 = document.getElementById("gameResults3");

const nextPeriod = document.getElementById("nextPeriod");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const s5 = document.getElementById("s5");
const performance = document.getElementById("Portfolio");
const change = document.getElementById("Change");
const rangeData = document.getElementById("modalRange");
const modal = document.getElementById("myModal");
const currentValueSpan = document.getElementById('currentValue');
const closeModal = document.getElementById("close");
const execute = document.getElementById("execute");
const selectStock = document.getElementById("selectStock");
const selectFund = document.getElementById("selectFund");
const selectBond = document.getElementById("selectBond");
const stockSection = document.getElementById("stockSection");
const fundSection = document.getElementById("fundSection");
const bondSection = document.getElementById("bondSection");

const stock1Symbol = document.getElementById("stock1Symbol");
const stock1Owned = document.getElementById("stock1Owned");
const stock1Price = document.getElementById("stock1Price");
const toggle1 = document.getElementById("toggle1");
const descript1 = document.getElementById("descript1");
const DStock1 = document.getElementById("DStock1");

const stock2Symbol = document.getElementById("stock2Symbol");
const stock2Owned = document.getElementById("stock2Owned");
const stock2Price = document.getElementById("stock2Price");
const toggle2 = document.getElementById("toggle2");
const descript2 = document.getElementById("descript2");
const DStock2 = document.getElementById("DStock2");

const stock3Symbol = document.getElementById("stock3Symbol");
const stock3Owned = document.getElementById("stock3Owned");
const stock3Price = document.getElementById("stock3Price");
const toggle3 = document.getElementById("toggle3");
const descript3 = document.getElementById("descript3");
const DStock3 = document.getElementById("DStock3");

const stock4Symbol = document.getElementById("stock4Symbol");
const stock4Owned = document.getElementById("stock4Owned");
const stock4Price = document.getElementById("stock4Price");
const toggle4 = document.getElementById("toggle4");
const descript4 = document.getElementById("descript4");
const DStock4 = document.getElementById("DStock4");

const stock5Symbol = document.getElementById("stock5Symbol");
const stock5Owned = document.getElementById("stock5Owned");
const stock5Price = document.getElementById("stock5Price");
const toggle5 = document.getElementById("toggle5");
const descript5 = document.getElementById("descript5");
const DStock5 = document.getElementById("DStock5");

const stock6Symbol = document.getElementById("stock6Symbol");
const stock6Owned = document.getElementById("stock6Owned");
const stock6Price = document.getElementById("stock6Price");
const toggle6 = document.getElementById("toggle6");
const descript6 = document.getElementById("descript6");
const DStock6 = document.getElementById("DStock6");

const tradef1 = document.getElementById("tradef1");
const buyf1 = document.getElementById("buyf1");
const sellf1 = document.getElementById("sellf1");
const togglef1 = document.getElementById("togglef1");
const descriptf1 = document.getElementById("descriptf1");
const DFund1 = document.getElementById("DFund1");

const tradef2 = document.getElementById("tradef2");
const buyf2 = document.getElementById("buyf2");
const sellf2 = document.getElementById("sellf2");
const togglef2 = document.getElementById("togglef2");
const descriptf2 = document.getElementById("descriptf2");
const DFund2 = document.getElementById("DFund2");

const tradef3 = document.getElementById("tradef3");
const buyf3 = document.getElementById("buyf3");
const sellf3 = document.getElementById("sellf3");
const togglef3 = document.getElementById("togglef3");
const descriptf3 = document.getElementById("descriptf3");
const DFund3 = document.getElementById("DFund3");

const tradef4 = document.getElementById("tradef4");
const buyf4 = document.getElementById("buyf4");
const sellf4 = document.getElementById("sellf4");
const togglef4 = document.getElementById("togglef4");
const descriptf4 = document.getElementById("descriptf4");
const DFund4 = document.getElementById("DFund4");

const tradef5 = document.getElementById("tradef5");
const buyf5 = document.getElementById("buyf5");
const sellf5 = document.getElementById("sellf5");
const togglef5 = document.getElementById("togglef5");
const descriptf5 = document.getElementById("descriptf5");
const DFund5 = document.getElementById("DFund5");

const tradef6 = document.getElementById("tradef6");
const buyf6 = document.getElementById("buyf6");
const sellf6 = document.getElementById("sellf6");
const togglef6 = document.getElementById("togglef6");
const descriptf6 = document.getElementById("descriptf6");
const DFund6 = document.getElementById("DFund6");

start.addEventListener('click', function(){
  startWindow.classList.add("d-none");
  startWindow.classList.remove("d-block");
  gameWindow.classList.remove("d-none");
  gameWindow.classList.add("d-block");
  nextPeriod.classList.remove("d-none");
  nextPeriod.classList.add("d-block");
});

selectStock.addEventListener('mouseover', function(){
  selectStock.style.opacity = 0.5;
})

selectStock.addEventListener('mouseout', function(){
  selectStock.style.opacity = 1;
})

selectStock.addEventListener('click', function(){
  if(stockSection.classList.contains("d-none")){
    stockSection.classList.remove("d-none");
    stockSection.classList.add("d-block");
    selectStock.style.color = "rgb(0, 200, 5)";
  }
  if(fundSection.classList.contains("d-block")){
    fundSection.classList.remove("d-block");
    fundSection.classList.add("d-none");
    selectFund.style.color = "white";
  }
  if(bondSection.classList.contains("d-block")){
    bondSection.classList.remove("d-block");
    bondSection.classList.add("d-none");
    selectBond.style.color = "white";
  }
})

selectFund.addEventListener('mouseover', function(){
  selectFund.style.opacity = 0.5;
})

selectFund.addEventListener('mouseout', function(){
  selectFund.style.opacity = 1;
})

selectFund.addEventListener('click', function(){
  if(fundSection.classList.contains("d-none")){
    fundSection.classList.remove("d-none");
    fundSection.classList.add("d-block");
    selectFund.style.color = "rgb(0, 200, 5)";
  }
  if(stockSection.classList.contains("d-block")){
    stockSection.classList.remove("d-block");
    stockSection.classList.add("d-none");
    selectStock.style.color = "white";
  }
  if(bondSection.classList.contains("d-block")){
    bondSection.classList.remove("d-block");
    bondSection.classList.add("d-none");
    selectBond.style.color = "white";
  }
})

selectBond.addEventListener('mouseover', function(){
  selectBond.style.opacity = 0.5;
})

selectBond.addEventListener('mouseout', function(){
  selectBond.style.opacity = 1;
})

selectBond.addEventListener('click', function(){
  if(bondSection.classList.contains("d-none")){
    bondSection.classList.remove("d-none");
    bondSection.classList.add("d-block");
    selectBond.style.color = "rgb(0, 200, 5)";
  }
  if(stockSection.classList.contains("d-block")){
    stockSection.classList.remove("d-block");
    stockSection.classList.add("d-none");
    selectStock.style.color = "white";
  }
  if(fundSection.classList.contains("d-block")){
    fundSection.classList.remove("d-block");
    fundSection.classList.add("d-none");
    selectFund.style.color = "white";
  }
})

DStock1.textContent = stockData[0].description;
DStock2.textContent = stockData[1].description;
DStock3.textContent = stockData[2].description;
DStock4.textContent = stockData[3].description;
DStock5.textContent = stockData[4].description;
DStock6.textContent = stockData[5].description;
DFund1.textContent = marketFunds[0].description;
DFund2.textContent = marketFunds[1].description;
DFund3.textContent = marketFunds[2].description;
DFund4.textContent = marketFunds[3].description;
DFund5.textContent = marketFunds[4].description;
DFund6.textContent = marketFunds[5].description;

let xValues = Array.from({ length: earnings.length }, (_, index) => ((index + 1) % 12) + 1);
let storyArray = [s1,s2,s3,s4,s5];

let what = [];
var color;
if(earnings[earnings.length - 1] < earnings[0]){
    color = "rgb(255, 80, 0)";
}else{
    color = "rgb(0, 200, 5)";
}
change.style.color = color;

let mainChart = new Chart("mainChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: "Portfolio Performance",
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: earnings,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, earnings),
          max: Math.max.apply(null, earnings),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

var barColors = [
  "rgb(0, 200, 5)",
  "rgb(200, 50, 0)",
  "rgb(0, 50, 200)",
  "rgb(200, 0, 190)",
];

let firstPie = new Chart("portfolio", {
  type: "doughnut",
  data: {
    labels: ["Cash", "Stocks", "Mutual Funds", "Bonds"],
    datasets: [{
      backgroundColor: barColors,
      data: [cash, stocksOwned, marketFundsOwned, bondsOwned]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Portfolio',
        color: 'white', // Set the title color to white
        font: {
          family: 'Avenir',
        }
      }
    }
  }
});

var barColors = [
  "rgb(48, 167, 191)",
  "rgb(191, 48, 168)",
  "rgb(76, 48, 191)",
  "rgb(255, 64, 64)",
  "rgb(191, 117, 48)",
  "rgb(94, 191, 48)",
  "rgb(23, 77, 32)",
  "rgb(77, 59, 23)",
  "rgb(77, 23, 23)",
  "rgb(32, 23, 77)",
  "rgb(77, 23, 77)",
  "rgb(23, 68, 77)",
];

let legendStockNames = [];
let secondPieData = [];

let secondPie = new Chart("specificPortfolio", {
  type: "pie",
  data: {
    labels: legendStockNames,
    datasets: [{
      backgroundColor: barColors,
      data: secondPieData
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Equity Portfolio',
        color: 'white', 
        font: {
          family: 'Avenir',
        }
      }
    }
  }
});
if(secondPie.data.labels.length == 0){
  secondPie.options.plugins.title.display = false;
  secondPie.update();
}
  
rangeData.addEventListener('input', function() {
  currentValueSpan.textContent = this.value + " shares";
  what[2] = Number(rangeData.value);
});

closeModal.addEventListener('click', function(){
  currentValueSpan.textContent = "0 shares";
});

execute.addEventListener('click', function(){
  if(stockData.some(obj => obj.name === what[0])){
    stocksOperations(what[0], what[2], what[3]);
  }else if(marketFunds.some(obj => obj.industry === what[0])){
    fundsOperations(what[0], what[2], what[3]);
  }else{
    bondsOperations();
  }
  updatePieCharts();
  currentValueSpan.textContent = "0 shares";
  what[1].click();
});

// STOCK 1
if(stockData[0].data[stockData[0].data.length -1] < stockData[0].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
var trade1 = document.getElementById("trade1");
var buy1 = document.getElementById("buy1");
var sell1 = document.getElementById("sell1");
stock1Symbol.textContent = stockData[0].name + " (" + stockData[0].symbol + ")";
stock1Owned.textContent = stockData[0].owned + " shares";
stock1Price.textContent = "$" + stockData[0].cost;
trade1.style.backgroundColor = color;
buy1.style.backgroundColor = color;
sell1.style.backgroundColor = color;
stock1Symbol.addEventListener('mouseover', function() {
  toggleVisibility(toggle1);
  toggleVisibility(descript1);
});
stock1Symbol.addEventListener('mouseout', function(){
  toggleVisibility(toggle1);
  toggleVisibility(descript1);
});
buy1.addEventListener('click', function() {
  what[0] = stockData[0].name;
  what[3] = true;
  what[1] = trade1;
  rangeData.max = Math.floor(cash/findStockByName(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sell1.addEventListener('click', function(){
  what[0] = stockData[0].name;
  what[3] = false;
  what[1] = trade1;
  rangeData.max = findStockByName(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
trade1.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buy1);
  toggleVisibility(sell1);
});
let stock1 = new Chart("stock1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: stockData[0].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: stockData[0].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[0].data),
          max: Math.max.apply(null, stockData[0].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

//STOCK 2
if(stockData[1].data[stockData[1].data.length -1] < stockData[1].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
var trade2 = document.getElementById("trade2");
var buy2 = document.getElementById("buy2");
var sell2 = document.getElementById("sell2");
stock2Symbol.textContent = stockData[1].name + " (" + stockData[1].symbol + ")";
stock2Owned.textContent = stockData[1].owned + " shares";
stock2Price.textContent = "$" + stockData[1].cost;
trade2.style.backgroundColor = color;
buy2.style.backgroundColor = color;
sell2.style.backgroundColor = color;
stock2Symbol.addEventListener('mouseover', function() {
  toggleVisibility(toggle2);
  toggleVisibility(descript2);
});
stock2Symbol.addEventListener('mouseout', function(){
  toggleVisibility(toggle2);
  toggleVisibility(descript2);
});
buy2.addEventListener('click', function() {
  what[0] = stockData[1].name;
  what[3] = true;
  what[1] = trade2;
  rangeData.max = Math.floor(cash/findStockByName(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sell2.addEventListener('click', function(){
  what[0] = stockData[1].name;
  what[3] = false;
  what[1] = trade2;
  rangeData.max = findStockByName(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
trade2.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buy2);
  toggleVisibility(sell2);
});
let stock2 = new Chart("stock2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: stockData[1].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: stockData[1].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[1].data),
          max: Math.max.apply(null, stockData[1].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

//STOCK 3
if(stockData[2].data[stockData[2].data.length -1] < stockData[2].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
var trade3 = document.getElementById("trade3");
var buy3 = document.getElementById("buy3");
var sell3 = document.getElementById("sell3");
stock3Symbol.textContent = stockData[2].name + " (" + stockData[2].symbol + ")";
stock3Owned.textContent = stockData[2].owned + " shares";
stock3Price.textContent = "$" + stockData[2].cost;
trade3.style.backgroundColor = color;
buy3.style.backgroundColor = color;
sell3.style.backgroundColor = color;
stock3Symbol.addEventListener('mouseover', function() {
  toggleVisibility(toggle3);
  toggleVisibility(descript3);
});
stock3Symbol.addEventListener('mouseout', function(){
  toggleVisibility(toggle3);
  toggleVisibility(descript3);
});
buy3.addEventListener('click', function() {
  what[0] = stockData[2].name;
  what[3] = true;
  what[1] = trade3;
  rangeData.max = Math.floor(cash/findStockByName(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sell3.addEventListener('click', function(){
  what[0] = stockData[2].name;
  what[3] = false;
  what[1] = trade3;
  rangeData.max = findStockByName(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
trade3.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buy3);
  toggleVisibility(sell3);
});
let stock3 = new Chart("stock3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: stockData[2].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: stockData[2].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[2].data),
          max: Math.max.apply(null, stockData[2].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

//STOCK 4
if(stockData[3].data[stockData[3].data.length -1] < stockData[3].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
var trade4 = document.getElementById("trade4");
var buy4 = document.getElementById("buy4");
var sell4 = document.getElementById("sell4");
stock4Symbol.textContent = stockData[3].name + " (" + stockData[3].symbol + ")";
stock4Owned.textContent = stockData[3].owned + " shares";
stock4Price.textContent = "$" + stockData[3].cost;
trade4.style.backgroundColor = color;
buy4.style.backgroundColor = color;
sell4.style.backgroundColor = color;
stock4Symbol.addEventListener('mouseover', function() {
  toggleVisibility(toggle4);
  toggleVisibility(descript4);
});
stock4Symbol.addEventListener('mouseout', function(){
  toggleVisibility(toggle4);
  toggleVisibility(descript4);
});
buy4.addEventListener('click', function() {
  what[0] = stockData[3].name;
  what[3] = true;
  what[1] = trade4;
  rangeData.max = Math.floor(cash/findStockByName(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sell4.addEventListener('click', function(){
  what[0] = stockData[3].name;
  what[3] = false;
  what[1] = trade4;
  rangeData.max = findStockByName(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
trade4.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buy4);
  toggleVisibility(sell4);
});
let stock4 = new Chart("stock4", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: stockData[3].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: stockData[3].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[3].data),
          max: Math.max.apply(null, stockData[3].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

//STOCK 5
if(stockData[4].data[stockData[4].data.length -1] < stockData[4].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
var trade5 = document.getElementById("trade5");
var buy5 = document.getElementById("buy5");
var sell5 = document.getElementById("sell5");
stock5Symbol.textContent = stockData[4].name + " (" + stockData[4].symbol + ")";
stock5Owned.textContent = stockData[4].owned + " shares";
stock5Price.textContent = "$" + stockData[4].cost;
trade5.style.backgroundColor = color;
buy5.style.backgroundColor = color;
sell5.style.backgroundColor = color;
stock5Symbol.addEventListener('mouseover', function() {
  toggleVisibility(toggle5);
  toggleVisibility(descript5);
});
stock5Symbol.addEventListener('mouseout', function(){
  toggleVisibility(toggle5);
  toggleVisibility(descript5);
});
buy5.addEventListener('click', function() {
  what[0] = stockData[4].name;
  what[3] = true;
  what[1] = trade5;
  rangeData.max = Math.floor(cash/findStockByName(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sell5.addEventListener('click', function(){
  what[0] = stockData[4].name;
  what[3] = false;
  what[1] = trade5;
  rangeData.max = findStockByName(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
trade5.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buy5);
  toggleVisibility(sell5);
});
let stock5 = new Chart("stock5", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: stockData[4].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: stockData[4].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[4].data),
          max: Math.max.apply(null, stockData[4].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

//STOCK 6
if(stockData[5].data[stockData[5].data.length -1] < stockData[5].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
var trade6 = document.getElementById("trade6");
var buy6 = document.getElementById("buy6");
var sell6 = document.getElementById("sell6");
stock6Symbol.textContent = stockData[5].name + " (" + stockData[5].symbol + ")";
stock6Owned.textContent = stockData[5].owned + " shares";
stock6Price.textContent = "$" + stockData[5].cost;
trade6.style.backgroundColor = color;
buy6.style.backgroundColor = color;
sell6.style.backgroundColor = color;
stock6Symbol.addEventListener('mouseover', function() {
  toggleVisibility(toggle6);
  toggleVisibility(descript6);
});
stock6Symbol.addEventListener('mouseout', function(){
  toggleVisibility(toggle6);
  toggleVisibility(descript6);
});
buy6.addEventListener('click', function() {
  what[0] = stockData[5].name;
  what[3] = true;
  what[1] = trade6;
  rangeData.max = Math.floor(cash/findStockByName(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sell6.addEventListener('click', function(){
  what[0] = stockData[5].name;
  what[3] = false;
  what[1] = trade6;
  rangeData.max = findStockByName(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
trade6.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buy6);
  toggleVisibility(sell6);
});
let stock6 = new Chart("stock6", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: stockData[5].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: stockData[5].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[5].data),
          max: Math.max.apply(null, stockData[5].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

// Market Fund 1 
if(marketFunds[0].data[marketFunds[0].data.length -1] < marketFunds[0].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
fund1Symbol.textContent = marketFunds[0].name + " (" + marketFunds[0].symbol + ")";
fund1Owned.textContent = marketFunds[0].owned + " shares";
fund1Price.textContent = "$" + marketFunds[0].cost;
tradef1.style.backgroundColor = color;
buyf1.style.backgroundColor = color;
sellf1.style.backgroundColor = color;
fund1Symbol.addEventListener('mouseover', function() {
  toggleVisibility(togglef1);
  toggleVisibility(descriptf1);
});
fund1Symbol.addEventListener('mouseout', function(){
  toggleVisibility(togglef1);
  toggleVisibility(descriptf1);
});
buyf1.addEventListener('click', function() {
  what[0] = marketFunds[0].industry;
  what[3] = true;
  what[1] = tradef1;
  rangeData.max = Math.floor(cash/findMarketFundsByIndustry(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sellf1.addEventListener('click', function(){
  what[0] = marketFunds[0].industry;
  what[3] = false;
  what[1] = tradef1;
  rangeData.max = findMarketFundsByIndustry(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
tradef1.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buyf1);
  toggleVisibility(sellf1);
});
let fund1 = new Chart("fund1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: marketFunds[0].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: marketFunds[0].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, marketFunds[0].data),
          max: Math.max.apply(null, marketFunds[0].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

// Market Fund 2 
if(marketFunds[1].data[marketFunds[1].data.length -1] < marketFunds[1].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
fund2Symbol.textContent = marketFunds[1].name + " (" + marketFunds[1].symbol + ")";
fund2Owned.textContent = marketFunds[1].owned + " shares";
fund2Price.textContent = "$" + marketFunds[1].cost;
tradef2.style.backgroundColor = color;
buyf2.style.backgroundColor = color;
sellf2.style.backgroundColor = color;
fund2Symbol.addEventListener('mouseover', function() {
  toggleVisibility(togglef2);
  toggleVisibility(descriptf2);
});
fund2Symbol.addEventListener('mouseout', function(){
  toggleVisibility(togglef2);
  toggleVisibility(descriptf2);
});
buyf2.addEventListener('click', function() {
  what[0] = marketFunds[1].industry;
  what[3] = true;
  what[1] = tradef2;
  rangeData.max = Math.floor(cash/findMarketFundsByIndustry(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sellf2.addEventListener('click', function(){
  what[0] = marketFunds[1].industry;
  what[3] = false;
  what[1] = tradef2;
  rangeData.max = findMarketFundsByIndustry(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
tradef2.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buyf2);
  toggleVisibility(sellf2);
});
let fund2 = new Chart("fund2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: marketFunds[1].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: marketFunds[1].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, marketFunds[1].data),
          max: Math.max.apply(null, marketFunds[1].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

// Market Fund 3
if(marketFunds[2].data[marketFunds[2].data.length -1] < marketFunds[2].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
fund3Symbol.textContent = marketFunds[2].name + " (" + marketFunds[2].symbol + ")";
fund3Owned.textContent = marketFunds[2].owned + " shares";
fund3Price.textContent = "$" + marketFunds[2].cost;
tradef3.style.backgroundColor = color;
buyf3.style.backgroundColor = color;
sellf3.style.backgroundColor = color;
fund3Symbol.addEventListener('mouseover', function() {
  toggleVisibility(togglef3);
  toggleVisibility(descriptf3);
});
fund3Symbol.addEventListener('mouseout', function(){
  toggleVisibility(togglef3);
  toggleVisibility(descriptf3);
});
buyf3.addEventListener('click', function() {
  what[0] = marketFunds[2].industry;
  what[3] = true;
  what[1] = tradef3;
  rangeData.max = Math.floor(cash/findMarketFundsByIndustry(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sellf3.addEventListener('click', function(){
  what[0] = marketFunds[2].industry;
  what[3] = false;
  what[1] = tradef3;
  rangeData.max = findMarketFundsByIndustry(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
tradef3.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buyf3);
  toggleVisibility(sellf3);
});
let fund3 = new Chart("fund3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: marketFunds[2].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: marketFunds[2].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, marketFunds[2].data),
          max: Math.max.apply(null, marketFunds[2].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

// Market Fund 4
if(marketFunds[3].data[marketFunds[3].data.length -1] < marketFunds[3].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
fund4Symbol.textContent = marketFunds[3].name + " (" + marketFunds[3].symbol + ")";
fund4Owned.textContent = marketFunds[3].owned + " shares";
fund4Price.textContent = "$" + marketFunds[3].cost;
tradef4.style.backgroundColor = color;
buyf4.style.backgroundColor = color;
sellf4.style.backgroundColor = color;
fund4Symbol.addEventListener('mouseover', function() {
  toggleVisibility(togglef4);
  toggleVisibility(descriptf4);
});
fund4Symbol.addEventListener('mouseout', function(){
  toggleVisibility(togglef4);
  toggleVisibility(descriptf4);
});
buyf4.addEventListener('click', function() {
  what[0] = marketFunds[3].industry;
  what[3] = true;
  what[1] = tradef4;
  rangeData.max = Math.floor(cash/findMarketFundsByIndustry(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sellf4.addEventListener('click', function(){
  what[0] = marketFunds[3].industry;
  what[3] = false;
  what[1] = tradef4;
  rangeData.max = findMarketFundsByIndustry(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
tradef4.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buyf4);
  toggleVisibility(sellf4);
});
let fund4 = new Chart("fund4", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: marketFunds[3].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: marketFunds[3].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, marketFunds[3].data),
          max: Math.max.apply(null, marketFunds[3].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

// Market Fund 5
if(marketFunds[4].data[marketFunds[4].data.length -1] < marketFunds[4].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
fund5Symbol.textContent = marketFunds[4].name + " (" + marketFunds[4].symbol + ")";
fund5Owned.textContent = marketFunds[4].owned + " shares";
fund5Price.textContent = "$" + marketFunds[4].cost;
tradef5.style.backgroundColor = color;
buyf5.style.backgroundColor = color;
sellf5.style.backgroundColor = color;
fund5Symbol.addEventListener('mouseover', function() {
  toggleVisibility(togglef5);
  toggleVisibility(descriptf5);
});
fund5Symbol.addEventListener('mouseout', function(){
  toggleVisibility(togglef5);
  toggleVisibility(descriptf5);
});
buyf5.addEventListener('click', function() {
  what[0] = marketFunds[4].industry;
  what[3] = true;
  what[1] = tradef5;
  rangeData.max = Math.floor(cash/findMarketFundsByIndustry(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sellf5.addEventListener('click', function(){
  what[0] = marketFunds[4].industry;
  what[3] = false;
  what[1] = tradef5;
  rangeData.max = findMarketFundsByIndustry(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
tradef5.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buyf5);
  toggleVisibility(sellf5);
});
let fund5 = new Chart("fund5", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: marketFunds[4].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: marketFunds[4].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, marketFunds[4].data),
          max: Math.max.apply(null, marketFunds[4].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});

// Market Fund 6
if(marketFunds[5].data[marketFunds[5].data.length -1] < marketFunds[5].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
fund6Symbol.textContent = marketFunds[5].name + " (" + marketFunds[5].symbol + ")";
fund6Owned.textContent = marketFunds[5].owned + " shares";
fund6Price.textContent = "$" + marketFunds[5].cost;
tradef6.style.backgroundColor = color;
buyf6.style.backgroundColor = color;
sellf6.style.backgroundColor = color;
fund6Symbol.addEventListener('mouseover', function() {
  toggleVisibility(togglef6);
  toggleVisibility(descriptf6);
});
fund6Symbol.addEventListener('mouseout', function(){
  toggleVisibility(togglef6);
  toggleVisibility(descriptf6);
});
buyf6.addEventListener('click', function() {
  what[0] = marketFunds[5].industry;
  what[3] = true;
  what[1] = tradef6;
  rangeData.max = Math.floor(cash/findMarketFundsByIndustry(what[0]).cost);
  rangeData.value = rangeData.max / 2;
})
sellf6.addEventListener('click', function(){
  what[0] = marketFunds[5].industry;
  what[3] = false;
  what[1] = tradef6;
  rangeData.max = findMarketFundsByIndustry(what[0]).owned;
  rangeData.value = Math.floor(rangeData.max / 2);
});
tradef6.addEventListener("click", function() {
  // Toggle the display property of the Buy and Sell buttons
  toggleVisibility(buyf6);
  toggleVisibility(sellf6);
});
let fund6 = new Chart("fund6", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: marketFunds[5].name,
      fill: false,
      lineTension: 0,
      backgroundColor: color,
      borderColor: color,
      data: marketFunds[5].data,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, marketFunds[5].data),
          max: Math.max.apply(null, marketFunds[5].data),
        }
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    }
  }
});


nextPeriod.addEventListener('click', function() {
  results();
  updatePerformances();
  updatePieCharts();
  console.log(period);
  if(period == year.length){
    gameWindow.classList.add("d-none");
    gameWindow.classList.remove("d-block");
    endWindow.classList.remove("d-none");
    endWindow.classList.add("d-block");
    nextPeriod.classList.remove("d-block");
    nextPeriod.classList.add("d-none");
    gameResults1.textContent = "Your porfolio in 2030 is now at " + earnings[earnings.length - 1];
    let percentageChange = 100 * (earnings[earnings.length - 1] - earnings[0])/earnings[0] 
    if(earnings[earnings.length - 1] < earnings[0]){
      gameResults2.textContent = "This is at a loss of $" + (earnings[earnings.length - 1] - earnings[0]) + " or " + percentageChange + "%";
    }else{
      gameResults2.textContent = "This is at a gain of $" + (earnings[earnings.length - 1] - earnings[0]) + " or " + percentageChange + "%";
    }
      gameResults3.textContent = "Overall, you invested in " + numStocksInvested.size + " stocks, " + numFundsInvested.size + " ETFs, and " + numBondsInvested.size + " bonds.";
  }else{
    run();
    for(let i = 0; i < 5; i++){
      if(i < 2){
        storyArray[i].textContent = listofNews[i].company + " " + listofNews[i].news;
      }else{
        storyArray[i].textContent = listofNews[i].industry + " Industry: " + listofNews[i].news;
      }
    }
  }
});

run();
nextPeriod.click();

function updatePerformances(){
  if(earnings[earnings.length - 1] < earnings[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  performance.textContent = "$" + earnings[earnings.length - 1];
  if(earnings[earnings.length -1] - earnings[0] >= 0){
    change.textContent = "+ $" + (earnings[earnings.length -1] - earnings[0]).toLocaleString();
  }else{
    change.textContent = "- $" + Math.abs((earnings[earnings.length -1] - earnings[0])).toLocaleString();
  }
  change.style.color = color;
  xValues = mainChart.data.labels.concat(Array.from({ length: 12 }, (_, index) => ((index + 1) % 12) + 1).map((month, index) => `${month}/${year[period]}`));
  mainChart.data.datasets[0].data = earnings;
  mainChart.data.datasets[0].backgroundColor = color;
  mainChart.data.datasets[0].borderColor = color;
  mainChart.data.labels = xValues;
  mainChart.scales.y.ticks.min = Math.min.apply(null, earnings);
  mainChart.scales.y.ticks.max = Math.max.apply(null, earnings);
  mainChart.update();

  //Stock 1
  if(stockData[0].data[stockData[0].data.length -1] < stockData[0].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  stock1.data.datasets[0].data = stockData[0].data;
  stock1.data.datasets[0].backgroundColor = color;
  stock1.data.datasets[0].borderColor = color;
  stock1.data.labels = xValues;
  stock1.scales.y.ticks.min = Math.min.apply(null, stockData[0]);
  stock1.scales.y.ticks.max = Math.max.apply(null, stockData[0]);
  stock1.update();
  stock1Price.textContent = "$" + stockData[0].cost;
  trade1.style.backgroundColor = color;
  buy1.style.backgroundColor = color;
  sell1.style.backgroundColor = color;
  
  //Stock 2
  if(stockData[1].data[stockData[1].data.length -1] < stockData[1].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  stock2.data.datasets[0].data = stockData[1].data;
  stock2.data.datasets[0].backgroundColor = color;
  stock2.data.datasets[0].borderColor = color;
  stock2.data.labels = xValues;
  stock2.scales.y.ticks.min = Math.min.apply(null, stockData[1]);
  stock2.scales.y.ticks.max = Math.max.apply(null, stockData[1]);
  stock2.update();
  stock2Price.textContent = "$" + stockData[1].cost;
  trade2.style.backgroundColor = color;
  buy2.style.backgroundColor = color;
  sell2.style.backgroundColor = color; 

  //Stock 3
  if(stockData[2].data[stockData[2].data.length -1] < stockData[2].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  stock3.data.datasets[0].data = stockData[2].data;
  stock3.data.datasets[0].backgroundColor = color;
  stock3.data.datasets[0].borderColor = color;
  stock3.data.labels = xValues;
  stock3.scales.y.ticks.min = Math.min.apply(null, stockData[2]);
  stock3.scales.y.ticks.max = Math.max.apply(null, stockData[2]);
  stock3.update();
  stock3Price.textContent = "$" + stockData[2].cost;
  trade3.style.backgroundColor = color;
  buy3.style.backgroundColor = color;
  sell3.style.backgroundColor = color; 

  //Stock 4
  if(stockData[3].data[stockData[3].data.length -1] < stockData[3].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  stock4.data.datasets[0].data = stockData[3].data;
  stock4.data.datasets[0].backgroundColor = color;
  stock4.data.datasets[0].borderColor = color;
  stock4.data.labels = xValues;
  stock4.scales.y.ticks.min = Math.min.apply(null, stockData[3]);
  stock4.scales.y.ticks.max = Math.max.apply(null, stockData[3]);
  stock4.update();
  stock4Price.textContent = "$" + stockData[3].cost;
  trade4.style.backgroundColor = color;
  buy4.style.backgroundColor = color;
  sell4.style.backgroundColor = color; 

  //Stock 5
  if(stockData[4].data[stockData[4].data.length -1] < stockData[4].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  stock5.data.datasets[0].data = stockData[4].data;
  stock5.data.datasets[0].backgroundColor = color;
  stock5.data.datasets[0].borderColor = color;
  stock5.data.labels = xValues;
  stock5.scales.y.ticks.min = Math.min.apply(null, stockData[4]);
  stock5.scales.y.ticks.max = Math.max.apply(null, stockData[4]);
  stock5.update();
  stock5Price.textContent = "$" + stockData[4].cost;
  trade5.style.backgroundColor = color;
  buy5.style.backgroundColor = color;
  sell5.style.backgroundColor = color; 
  
  //Stock 6
  if(stockData[5].data[stockData[5].data.length -1] < stockData[5].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  stock6.data.datasets[0].data = stockData[5].data;
  stock6.data.datasets[0].backgroundColor = color;
  stock6.data.datasets[0].borderColor = color;
  stock6.data.labels = xValues;
  stock6.scales.y.ticks.min = Math.min.apply(null, stockData[5]);
  stock6.scales.y.ticks.max = Math.max.apply(null, stockData[5]);
  stock6.update();
  stock6Price.textContent = "$" + stockData[5].cost;
  trade6.style.backgroundColor = color;
  buy6.style.backgroundColor = color;
  sell6.style.backgroundColor = color; 

  //Fund 1
  if(marketFunds[0].data[marketFunds[0].data.length -1] < marketFunds[0].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  fund1.data.datasets[0].data = marketFunds[0].data;
  fund1.data.datasets[0].backgroundColor = color;
  fund1.data.datasets[0].borderColor = color;
  fund1.data.labels = xValues;
  fund1.scales.y.ticks.min = Math.min.apply(null, marketFunds[0]);
  fund1.scales.y.ticks.max = Math.max.apply(null, marketFunds[0]);
  fund1.update();
  fund1Price.textContent = "$" + marketFunds[0].cost;
  tradef1.style.backgroundColor = color;
  buyf1.style.backgroundColor = color;
  sellf1.style.backgroundColor = color; 

  //Fund 2
  if(marketFunds[1].data[marketFunds[1].data.length -1] < marketFunds[1].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  fund2.data.datasets[0].data = marketFunds[1].data;
  fund2.data.datasets[0].backgroundColor = color;
  fund2.data.datasets[0].borderColor = color;
  fund2.data.labels = xValues;
  fund2.scales.y.ticks.min = Math.min.apply(null, marketFunds[1]);
  fund2.scales.y.ticks.max = Math.max.apply(null, marketFunds[1]);
  fund2.update();
  fund2Price.textContent = "$" + marketFunds[1].cost;
  tradef2.style.backgroundColor = color;
  buyf2.style.backgroundColor = color;
  sellf2.style.backgroundColor = color; 

  //Fund 3
  if(marketFunds[2].data[marketFunds[2].data.length -1] < marketFunds[2].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  fund3.data.datasets[0].data = marketFunds[2].data;
  fund3.data.datasets[0].backgroundColor = color;
  fund3.data.datasets[0].borderColor = color;
  fund3.data.labels = xValues;
  fund3.scales.y.ticks.min = Math.min.apply(null, marketFunds[2]);
  fund3.scales.y.ticks.max = Math.max.apply(null, marketFunds[2]);
  fund3.update();
  fund3Price.textContent = "$" + marketFunds[2].cost;
  tradef3.style.backgroundColor = color;
  buyf3.style.backgroundColor = color;
  sellf3.style.backgroundColor = color; 

  //Fund 4
  if(marketFunds[3].data[marketFunds[3].data.length -1] < marketFunds[3].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  fund4.data.datasets[0].data = marketFunds[3].data;
  fund4.data.datasets[0].backgroundColor = color;
  fund4.data.datasets[0].borderColor = color;
  fund4.data.labels = xValues;
  fund4.scales.y.ticks.min = Math.min.apply(null, marketFunds[3]);
  fund4.scales.y.ticks.max = Math.max.apply(null, marketFunds[3]);
  fund4.update();
  fund4Price.textContent = "$" + marketFunds[3].cost;
  tradef4.style.backgroundColor = color;
  buyf4.style.backgroundColor = color;
  sellf4.style.backgroundColor = color; 

  //Fund 5
  if(marketFunds[4].data[marketFunds[4].data.length -1] < marketFunds[4].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  fund5.data.datasets[0].data = marketFunds[4].data;
  fund5.data.datasets[0].backgroundColor = color;
  fund5.data.datasets[0].borderColor = color;
  fund5.data.labels = xValues;
  fund5.scales.y.ticks.min = Math.min.apply(null, marketFunds[4]);
  fund5.scales.y.ticks.max = Math.max.apply(null, marketFunds[4]);
  fund5.update();
  fund5Price.textContent = "$" + marketFunds[4].cost;
  tradef5.style.backgroundColor = color;
  buyf5.style.backgroundColor = color;
  sellf5.style.backgroundColor = color; 

  //Fund 6
  if(marketFunds[5].data[marketFunds[5].data.length -1] < marketFunds[5].data[0]){
    color = "rgb(255, 80, 0)";
  }else{
    color = "rgb(0, 200, 5)";
  }
  fund6.data.datasets[0].data = marketFunds[5].data;
  fund6.data.datasets[0].backgroundColor = color;
  fund6.data.datasets[0].borderColor = color;
  fund6.data.labels = xValues;
  fund6.scales.y.ticks.min = Math.min.apply(null, marketFunds[5]);
  fund6.scales.y.ticks.max = Math.max.apply(null, marketFunds[5]);
  fund6.update();
  fund6Price.textContent = "$" + marketFunds[5].cost;
  tradef6.style.backgroundColor = color;
  buyf6.style.backgroundColor = color;
  sellf6.style.backgroundColor = color; 

  period++;
  if(period == year.length - 1){
    nextPeriod.innerHTML = "End Game";
  }
}

function updatePieCharts(){
  let legendStockNames = [];
  let secondPieData = [];
  for(let i = 0; i < 12; i++){
    if(i < 6 && stockData[i].owned > 0){
      legendStockNames.push(stockData[i].name);
      secondPieData.push(stockData[i].owned * stockData[i].cost);
    }else if(i >= 6 && marketFunds[i%6].owned > 0){
      legendStockNames.push(marketFunds[i%6].name);
      secondPieData.push(marketFunds[i%6].owned * marketFunds[i%6].cost);
    }
  }
  secondPie.data.labels = legendStockNames;
  secondPie.data.datasets[0].data = secondPieData;
  if(secondPie.data.datasets[0].data.length > 0){
    secondPie.options.plugins.title.display = true;
  }
  secondPie.update();
  updateEarnings(false);
  firstPie.data.datasets[0].data = [cash, stocksOwned, marketFundsOwned, bondsOwned];
  firstPie.update();
  stock1Owned.textContent = stockData[0].owned + " shares";
  stock2Owned.textContent = stockData[1].owned + " shares";
  stock3Owned.textContent = stockData[2].owned + " shares";
  stock4Owned.textContent = stockData[3].owned + " shares";
  stock5Owned.textContent = stockData[4].owned + " shares";
  stock6Owned.textContent = stockData[5].owned + " shares";

  fund1Owned.textContent = marketFunds[0].owned + " shares";
  fund2Owned.textContent = marketFunds[1].owned + " shares";
  fund3Owned.textContent = marketFunds[2].owned + " shares";
  fund4Owned.textContent = marketFunds[3].owned + " shares";
  fund5Owned.textContent = marketFunds[4].owned + " shares";
  fund6Owned.textContent = marketFunds[5].owned + " shares";
}
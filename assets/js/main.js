const stockData = [
  { 
    name: 'BioPharm Corp.',
    symbol: 'BPC',
    industry: 'Biotechnology',
    description: 'Leading the way in innovative biopharmaceutical research and development.',
    cost: 235,
    data: [],
    owned: 0
  },
  { 
    name: 'CloudCom Systems',
    symbol: 'CCS',
    industry: 'Technology',
    description: 'A cutting-edge technology company providing cloud-based solutions for businesses.',
    cost: 70,
    data: [],
    owned: 0
  },
  { 
    name: 'DeltaEnergy Ltd.',
    symbol: 'DEL',
    industry: 'Energy',
    description: 'A key player in the energy sector, specializing in sustainable and efficient energy production.',
    cost: 325,
    data: [],
    owned: 0
  },
  { 
    name: 'EcoFoods Group',
    symbol: 'EFG',
    industry: 'Food and Beverage',
    description: 'Dedicated to providing eco-friendly and sustainable food and beverage products.',
    cost: 107,
    data: [],
    owned: 0
  },
  { 
    name: 'Fusion Motors Inc.',
    symbol: 'FMI',
    industry: 'Automotive',
    description: 'Innovators in the automotive industry, creating cutting-edge and environmentally friendly vehicles.',
    cost: 135,
    data: [],
    owned: 0
  },
  { 
    name: 'GreenTech Solutions',
    symbol: 'GTS',
    industry: 'Renewable Energy',
    description: 'Pioneering sustainable solutions in renewable energy to combat climate change.',
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
    riskLevel: "Moderate-High",
    cost: 1000,
    data: [],
    owned: 0
  },
  {
    name: "Healthcare Growth Fund",
    industry: "Healthcare",
    description: "Support healthcare breakthroughs and advancements with this fund.",
    riskLevel: "Moderate",
    cost: 545,
    data: [],
    owned: 0
  },
  {
    name: "Global Real Estate Opportunities Fund",
    industry: "Real Estate",
    description: "Diversify your portfolio with global real estate investments.",
    riskLevel: "Moderate",
    cost: 267,
    data: [],
    owned: 0
  },
  {
    name: "Sustainable Future Fund",
    industry: "ESG",
    description: "Invest in companies committed to Environmental, Social, and Governance principles.",
    riskLevel: "Low-Moderate",
    cost: 35,
    data: [],
    owned: 0
  },
  {
    name: "Energy Leaders Fund",
    industry: "Energy/Oil",
    description: "Participate in the growth of leading energy and oil companies.",
    riskLevel: "High",
    cost: 98,
    data: [],
    owned: 0
  },
  {
    name: "Financial Services Fund",
    industry: "Financial Services",
    description: "Strengthen your portfolio with stable and reliable financial industry investments.",
    riskLevel: "Moderate",
    cost: 132,
    data: [],
    owned: 0
  },
];

const bonds = [
  {
    name: "Tech Innovators Corp",
    industry: "Technology",
    cost: 1000,
    yield: 3.8,
    rating: "AAA",
    data: [],
    owned: 0
  },
  {
    name: "EcoSolutions Green Bond",
    industry: "Energy/Oil",
    cost: 1500,
    yield: 4.2,
    rating: "AA",
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
];

const usedStockStories = Array.from({ length: stockNews.length }, () => false);

const industryNewsWithBondEffect = [
  { industry: "Technology", news: "Cybersecurity legislation enhances data protection, boosting tech sector confidence.", sentiment: "positive", affectsBondPrice: "neutral" },
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
    }
    let fluctuate = Math.random < 0.5;
    //randomly fluctuates between 15% 
    const randomAmount = Math.floor(Math.random() * (stockData[i].cost * 0.15));
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
      break;
    }else if(sentiment === 'negative'){
      //random amount decrease between $1 and maxAmount * Current Price
      const randomAmount = Math.floor(Math.random() * (marketFunds[i].cost * maxAmount)) + 1;
      marketFunds[i].cost -= randomAmount;
      break;
    }else{
      let fluctuate = Math.random < 0.5;
      //randomly fluctuates between 15% 
      const randomAmount = Math.floor(Math.random() * (marketFunds[i].cost * 0.15));
      if(fluctuate){
        //fluctuated increase
        marketFunds[i].cost += randomAmount;
        break;
      }
      //fluctuates decrease
      marketFunds[i].cost -= randomAmount;
      break;
    }
  }
}
// for(let i = 0; i < bonds.length; i++){
//   if(bonds[i].industry === industry){
//     // Assume a simple linear relationship in bond yields
//     const yieldChange = percentageChange * 0.2; 

//     // Adjust bond yields based on the affectsBondPrice property
//   if (sentiment === 'positive' && affectsBondPrice === 'positive') {
//     bonds[i].yield -= yieldChange;
//   } else if (sentiment === 'negative' && affectsBondPrice === 'negative') {
//     bonds[i].yield += yieldChange;
//   }
//     annualCouponPayment = bonds[i].yield * bonds[i].cost;
//     recalculateBondPrice(bonds[i].yield, annualCouponPayment, bonds[i].cost, 5);
//     return;
//   } 
// }  
}

// function recalculateBondPrice(newYield, annualCouponPayment, faceValue, numberOfYears) {
//   const presentValueFactor = 1 / Math.pow(1 + newYield, numberOfYears);
//   const newPresentValue = annualCouponPayment * ((1 - presentValueFactor) / newYield) + faceValue * presentValueFactor;
//   return newPresentValue;
// }

let cash = 100000;
let earnings = [];
let stocksOwned = 0;
let marketFundsOwned = 0;
let bondsOwned = 0;
let listofNews = [];

//Get Elements By ID -> Stories outlet
//Get Elements By ID -> Data set for Stocks, Mutual Funds, and Bonds

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

    //Add Story to the HTML Elements

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
    updateEarnings();

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

function updateEarnings(){
    let tempTotal = Array.from({ length: 12 }, () => cash);
    let tempStock = Array.from({ length: 12 }, () => 0);
    let tempFunds = Array.from({ length: 12 }, () => 0);
    for(let i = 0; i < stockData.length; i++){
        if(stockData[i].owned > 0){
            for(let j = stockData[i].data.length - 1; j > stockData[i].data.length - 13; j--){
                let a = stockData[i].data;
                tempStock[(j)%12] += (stockData[i].data[j] * stockData[i].owned);
            }
        }
        if(marketFunds[i].owned > 0){
            for(let j = marketFunds[i].data.length - 1; j > marketFunds[i].data.length - 13; j--){
                tempFunds[(j)%12] += (marketFunds[i].data[j] * marketFunds[i].owned);
            }
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

const performance = document.getElementById("Portfolio");
const change = document.getElementById("Change");

stocksOperations('BioPharm Corp.', 100, true);
stocksOperations('DeltaEnergy Ltd.', 50, true);
fundsOperations('Technology', 40, true);
fundsOperations('Healthcare', 20, true);
fundsOperations('Real Estate', 30, true);
run();

var color;
if(earnings[earnings.length - 1] < earnings[0]){
    color = "rgb(255, 80, 0)";
}else{
    color = "rgb(0, 200, 5)";
}

performance.textContent = "$" + earnings[earnings.length - 1].toLocaleString();
if(earnings[earnings.length -1] - earnings[0] >= 0){
  change.textContent = "+ $" + (earnings[earnings.length -1] - earnings[0]).toLocaleString();
}else{
  change.textContent = "- $" + Math.abs((earnings[earnings.length -1] - earnings[0])).toLocaleString();
}
change.style.color = color;

function addData(chart, label, newData) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(newData);
  });
  chart.update();
}

let xValues = Array.from({ length: earnings.length }, (_,index) => index);

// Create main chart displaying portfolio performance
let mainChart = new Chart("mainChart", {
  type: "line",
  data: {
      labels: xValues,
      datasets: [{
        label: 'Portfolio Performance',
        fill: false,
        lineTension: 0,
        backgroundColor: color,
        borderColor: color,
        data: earnings
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
      }
    },
    scales: {
      x: {
        display: false, // Hide x-axis
        ticks: {
          color: "black", // Set the color of x-axis ticks
        },
        grid: {
          color: "black", // Set the color of x-axis grid lines
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, earnings), 
          max: Math.max.apply(null, earnings)
        }
      }
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
        text: 'Portfolio Diversity'
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
for(let i = 0; i < 12; i++){
  if(i < 6 && stockData[i].owned > 0){
    legendStockNames.push(stockData[i].name);
    secondPieData.push(stockData[i].owned);
  }else if(i >= 6 && marketFunds[i%6].owned > 0){
    legendStockNames.push(marketFunds[i%6].name);
    secondPieData.push(marketFunds[i%6].owned);
  }
}

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
        text: 'Equity Portfolio'
      }
    }
  }
});

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const s5 = document.getElementById("s5");
let storyArray = [s1,s2,s3,s4,s5];
for(let i = 0; i < 5; i++){
  if(i < 2){
    storyArray[i].textContent = listofNews[i].company + " " + listofNews[i].news;
  }else{
    storyArray[i].textContent = listofNews[i].industry + " Industry: " + listofNews[i].news;
  }
}

// STOCK 1
if(stockData[0].data[stockData[0].data.length -1] < stockData[0].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
const stock1Symbol = document.getElementById("stock1Symbol");
const stock1Owned = document.getElementById("stock1Owned");
const stock1Price = document.getElementById("stock1Price");
stock1Symbol.textContent = stockData[0].symbol;
stock1Owned.textContent = stockData[0].owned + " shares";
stock1Price.textContent = "$" + stockData[0].cost;
stock1Price.style.backgroundColor = color;
stock1Price.style.color = "rgb(255,255,255)";
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
        data: stockData[0].data
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
          max: Math.max.apply(null, stockData[0].data)
        }
      }
    }
  }
});


//STOCK 2
if(stockData[1].data[stockData[1].data.length -1] < stockData[1].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
const stock2Symbol = document.getElementById("stock2Symbol");
const stock2Owned = document.getElementById("stock2Owned");
const stock2Price = document.getElementById("stock2Price");
stock2Symbol.textContent = stockData[1].symbol;
stock2Owned.textContent = stockData[1].owned + " shares";
stock2Price.textContent = "$" + stockData[1].cost;
stock2Price.style.backgroundColor = color;
stock2Price.style.color = "rgb(255,255,255)";
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
        data: stockData[1].data
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
      }
    },
    scales: {
      x: {
        display: false, // Hide x-axis
        ticks: {
          color: "black", // Set the color of x-axis ticks
        },
        grid: {
          color: "black", // Set the color of x-axis grid lines
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[1].data), 
          max: Math.max.apply(null, stockData[1].data)
        }
      }
    }
  }
});

//STOCK 3
if(stockData[2].data[stockData[2].data.length -1] < stockData[2].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
const stock3Symbol = document.getElementById("stock3Symbol");
const stock3Owned = document.getElementById("stock3Owned");
const stock3Price = document.getElementById("stock3Price");
stock3Symbol.textContent = stockData[2].symbol;
stock3Owned.textContent = stockData[2].owned + " shares";
stock3Price.textContent = "$" + stockData[2].cost;
stock3Price.style.backgroundColor = color;
stock3Price.style.color = "rgb(255,255,255)";
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
        data: stockData[2].data
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
      }
    },
    scales: {
      x: {
        display: false, // Hide x-axis
        ticks: {
          color: "black", // Set the color of x-axis ticks
        },
        grid: {
          color: "black", // Set the color of x-axis grid lines
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[2].data), 
          max: Math.max.apply(null, stockData[2].data)
        }
      }
    }
  }
});

//STOCK 4
if(stockData[3].data[stockData[3].data.length -1] < stockData[3].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
const stock4Symbol = document.getElementById("stock4Symbol");
const stock4Owned = document.getElementById("stock4Owned");
const stock4Price = document.getElementById("stock4Price");
stock4Symbol.textContent = stockData[3].symbol;
stock4Owned.textContent = stockData[3].owned + " shares";
stock4Price.textContent = "$" + stockData[3].cost;
stock4Price.style.backgroundColor = color;
stock4Price.style.color = "rgb(255,255,255)";
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
        data: stockData[3].data
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
      }
    },
    scales: {
      x: {
        display: false, // Hide x-axis
        ticks: {
          color: "black", // Set the color of x-axis ticks
        },
        grid: {
          color: "black", // Set the color of x-axis grid lines
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[3].data), 
          max: Math.max.apply(null, stockData[3].data)
        }
      }
    }
  }
});

//STOCK 5
if(stockData[4].data[stockData[4].data.length -1] < stockData[4].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
const stock5Symbol = document.getElementById("stock5Symbol");
const stock5Owned = document.getElementById("stock5Owned");
const stock5Price = document.getElementById("stock5Price");
stock5Symbol.textContent = stockData[4].symbol;
stock5Owned.textContent = stockData[4].owned + " shares";
stock5Price.textContent = "$" + stockData[4].cost;
stock5Price.style.backgroundColor = color;
stock5Price.style.color = "rgb(255,255,255)";
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
        data: stockData[4].data
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
      }
    },
    scales: {
      x: {
        display: false, // Hide x-axis
        ticks: {
          color: "black", // Set the color of x-axis ticks
        },
        grid: {
          color: "black", // Set the color of x-axis grid lines
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[4].data), 
          max: Math.max.apply(null, stockData[4].data)
        }
      }
    }
  }
});

//STOCK 6
if(stockData[5].data[stockData[5].data.length -1] < stockData[5].data[0]){
  color = "rgb(255, 80, 0)";
}else{
  color = "rgb(0, 200, 5)";
}
const stock6Symbol = document.getElementById("stock6Symbol");
const stock6Owned = document.getElementById("stock6Owned");
const stock6Price = document.getElementById("stock6Price");
stock6Symbol.textContent = stockData[5].symbol;
stock6Owned.textContent = stockData[5].owned + " shares";
stock6Price.textContent = "$" + stockData[5].cost;
stock6Price.style.backgroundColor = color;
stock6Price.style.color = "rgb(255,255,255)";
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
        data: stockData[5].data
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
      }
    },
    scales: {
      x: {
        display: false, // Hide x-axis
        ticks: {
          color: "black", // Set the color of x-axis ticks
        },
        grid: {
          color: "black", // Set the color of x-axis grid lines
        },
      },
      y: {
        display: false,
        ticks: {
          min: Math.min.apply(null, stockData[5].data), 
          max: Math.max.apply(null, stockData[5].data)
        }
      }
    }
  }
});
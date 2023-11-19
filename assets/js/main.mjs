import { getStock, getMarketFund, getBond, getIndustryNews, getStockStories, changeIndustry, changeStock } from "./data.mjs";

let cash = 100000;
let earnings = [];
let stocksOwned = 0;
let marketFundsOwned = 0;
let bondsOwned = 0;
var {stockNews, usedStockStories} = getStockStories();
var {industryNewsWithBondEffect, usedIndustryStories} = getIndustryNews();
var stockData = getStock();
var marketFunds = getMarketFund();
var bonds = getBond();

//Get Elements By ID -> Stories outlet
//Get Elements By ID -> Data set for Stocks, Mutual Funds, and Bonds

export function run(){
    var listofNews = [];
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

    return {earnings, cash, stocksOwned, marketFundsOwned, stockData, marketFunds, stockNews, industryNewsWithBondEffect};
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

export function stocksOperations(companyName, numStocks, buy){
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

export function fundsOperations(marketFundName, numStocks, buy){
    let fund = findMarketFundsByIndustry(marketFundName);
    let price = fund.cost * numStocks;
    if(buy && price <= cash){
        fund.owned += numStocks;
        cash -= price;
    }else if(numStocks <= company.owned){
        fund.owned -= numStocks;
        cash += price;
    }
}
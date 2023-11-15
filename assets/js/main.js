import { getStock, getMarketFund, getBond, changeStock, changeIndustry, getStockStories, getIndustryNews } from 'assets/js/data.js';

var {stockNews, usedNews} = getStockStories();
var {industryNews, usedINews} = getIndustryNews();

//Get Elements By ID -> Stories outlet
//Get Elements By ID -> Data set for Stocks, Mutual Funds, and Bonds

function run(){
    var listofNews = [];
    for(let i = 0; i < 5; i++){
        if(i < 3){
            index = Math.random * stockNews.length;
            if(usedNews[index] == false){
                usedNews[i] = true;
                listofNews[i] = stockNews[index];
            }else{
                i--;
            }
        }else{
            index = Math.random * industryNews.length;
            if(usedNews[index] == false){
                industryNews[i] = true;
                listofNews[i] = industryNews[index];
            }else{
                i--;
            }
        }
    }

    //Add Story to the HTML Elements

    for(let i = 0; i < listofNews.length; i++){
        if(i < 3){
            changeStock(listofNews[i].company, listofNews[i].sentiment, 0.2);
        }else{
            changeIndustry(listofNews[i].industry, listofNews[i].sentiment, 0.1, listofNews[i].affectsBondPrice);
        }
    }

    //Create new Dataset for each of the stock, market funds, and bonds

    //
}
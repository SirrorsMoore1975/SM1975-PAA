const express = require('express');
const path = require('path');
const db = require('../db/index');
const average = require('./utils/average');


function setupServer () {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, '../client/build')))

  // add endpoints here

  app.get('/api/hello', (req, res) => {
    res.send('world')
  });

  app.get('/api/providers', async (req, res) => {
    const providerInfo = await db('provider')
      .select('*')
      .timeout(1500);

    const overallScores = await Promise.all([
      db('review_detail')
        .select('overall')
        .where('provider_id', 1),
      db('review_detail')
        .select('overall')
        .where('provider_id', 2),
      db('review_detail')
        .select('overall')
        .where('provider_id', 3),
      db('review_detail')
        .select('overall')
        .where('provider_id', 4),
      db('review_detail')
        .select('overall')
        .where('provider_id', 5),
      db('review_detail')
        .select('overall')
        .where('provider_id', 6),
      db('review_detail')
        .select('overall')
        .where('provider_id', 7),
      db('review_detail')
        .select('overall')
        .where('provider_id', 8),
      db('review_detail')
        .select('overall')
        .where('provider_id', 9)
    ]).catch((err) => console.error(err));

    const arrOfArrOfOverallScores = overallScores.map((element) => {
      return element.map((subelement) => subelement['overall'])
    })

    const arrOfAverageScores = arrOfArrOfOverallScores.map((element) => Number(average(element).toFixed(2)));

    for (let i = 0; i < arrOfAverageScores.length; i++) {

      providerInfo[i].overall = arrOfAverageScores[i]
    }

    res.send(providerInfo); 
  });

  app.get('/api/provider/:providerid', async (req, res) => {
    const provideId = Number(req.params.providerid);
    let providerInfo = await db('provider')
      .select('*')
      .where('id', provideId)
      .timeout(1500);

      // console.log('🍒', providerInfo)
    if (providerInfo.length === 0) {
      res.status(404).send("providerId not found")
    } else {
      providerInfo = providerInfo[0]
      const reviews = await db('review_detail')
        .select('reviewer_name', 'overall', 'ease_of_use', 'coverage','price', 'customer_service', 'customer_review')
        .where('provider_id', provideId)
        .orderBy('id', 'desc')
        .timeout(1500);
  
      let averageOverall = Number(average(reviews.map((element) => {
        return element.overall;
      })).toFixed(2));
      let averageEOU = Number(average(reviews.map((element) => {
        return element.ease_of_use;
      })).toFixed(2));
      let averageCoverage = Number(average(reviews.map((element) => {
        return element.coverage;
      })).toFixed(2));
      let averagePrice = Number(average(reviews.map((element) => {
        return element.price;
      })).toFixed(2));
      let averageService = Number(average(reviews.map((element) => {
        return element.customer_service;
      })).toFixed(2));
  
      providerInfo.overall = averageOverall;
      providerInfo.ease_of_use = averageEOU;
      providerInfo.coverage = averageCoverage;
      providerInfo.price = averagePrice;
      providerInfo.customer_service = averageService;
      
      // console.log(provideId);
      // console.log(providerInfo);
      // console.log(reviews);
      // console.log(averageOverall);
  
      res.send([providerInfo, reviews]);

    }
  });

  app.post('/api/review', async (req,res) => {
    const review = req.body;
    const testEmail = await db('review_detail')
      .select('*')
      .where('email', review.email)
      .timeout(1500);
      const payload_reviewAdded = {
        "usedWithProvider": false,
        "message": "Your review has been added."
      };
      const payload_reviewRejected = {
        "usedWithProvider": true,
        "message": "This email has already been used for this provider."
      };

    // console.log(testEmail);
    // console.log(review.email);
    // const payload = { usedWithProvider, message } ;
    if(testEmail.length === 0) { // this email has never been used
      const insertion = await db('review_detail')
        .insert(review);

        // console.log(review);
        // console.log(insertion);
        
        res.status(200).json(payload_reviewAdded);
    } else {
        // console.log('line 143', review.provider_id, testEmail[0].provider_id);

        let hasUsedWithProvider = false;

        for (let i = 0; i < testEmail.length; i++) {
          if(review.provider_id === testEmail[i].provider_id) {
            hasUsedWithProvider = true;
          }
        }

      if(hasUsedWithProvider) { // this email has already been used to review the current provider.

        res.status(400).json(payload_reviewRejected);
      } else { // this email has been used, but for a different provider
        const insertion = await db('review_detail')
          .insert(review);
          
        res.status(200).json(payload_reviewAdded);
      }
    }
  });
  
  return app;
}

module.exports = setupServer;
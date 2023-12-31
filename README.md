# Machine Learning the NBA Most Valuable Player Award
![Screenshot 2023-12-01 at 12 20 58 AM](https://github.com/Hensonkk/Machine-Learning-NBA-MVP/assets/133677209/feba1b8f-d434-4469-9493-0f9d62aa50d6)

*SMU Data Science Bootcamp Project #4*

## Project Title
**A Machine Learning Model to Predict the Winner of the NBA Most Valuable Player Award**

## Team Members
Devin Streeter, Sullivan Shave, Christopher Baker, KeyShawn Henson, and Jack Hayes

## Project Description/Outline
Utilizing the NBA MVP scoring system, historical NBA player's statistics, and past NBA MVP winner results, we will aim to create a machine-learning model that can predict the 2023-24 NBA MVP.

## Research Questions
- What statistics have the most impact on MVP voting?


- How does the previous season's performance affect the current season's MVP voting?
- How confident should we be with the results of the model? 
- How does previous MVP voting affect current-year voting?
- What position is most likely to win the MVP?
- How do gambling odds impact MVP voting?
- Does a player who accumulates more revenue for a team have a better chance of getting MVP? (ex:Media spotlight, seating)


## Datasets
- [NBA MVP Voting Results](https://www.kaggle.com/justinas/nba-mvp-voting-results-from-19802019)
- [Historical NBA Raptor and PREDATOR Data](https://github.com/fivethirtyeight/data/blob/master/nba-raptor/historical_RAPTOR_by_team.csv)
- [Latest NBA RAPTOR and PREDATOR Data](https://projects.fivethirtyeight.com/nba-model/2023/latest_RAPTOR_by_team.csv)
- [Archived Sportsbetting Odds (Lines by BetMGM)](https://www.sportsoddshistory.com/nba-awd-champs/)

## Breakdown of Tasks

#### Data Collection
Gather historical data on past NBA seasons, including player statistics, team performance, and previous MVP winners.

#### Feature Selection
Identify the most relevant features that could influence the MVP award. This could be based on statistical analysis or common knowledge. For instance, points per game, assists, rebounds, team success, and player popularity could be significant factors.

#### Data Preprocessing
Clean and pre-process the data. This involves handling missing values, normalizing or standardizing the data, and possibly creating new features that could help in prediction (like player impact estimates).

#### Model Selection:
Choose a suitable machine learning algorithm. For MVP prediction, consider regression models, classification models, or neural networks. The choice of model varies based on the dataset we decide to use and the specific approach we take (e.g., predicting the probability of a player winning MVP vs. classifying players into MVP and non-MVP categories).

#### Training the Model:
Use historical data to train the machine learning model. This process involves feeding the model with the features and corresponding outcomes (whether or not a player won the MVP award in each season).

#### Model Evaluation:
Evaluate the model's performance using metrics such as accuracy, precision, recall, or F1-score. Splitting the data into a training set and a test set, or using cross-validation techniques to ensure that the model generalizes new data.
Model Tuning: Optimize the model by tuning hyperparameters and possibly refining the feature set based on the performance.

#### Prediction:
Once the model is trained and evaluated, we will use current season data to predict the likelihood of each player winning the MVP award.

#### Continuous Learning:
As each season concludes, we’ll incorporate new data into the model to improve its predictions for future seasons. This can involve retraining the model or employing techniques like online learning.
Interpretation and Presentation: Understand and present the model's predictions in a meaningful way, possibly identifying which features most strongly influence the likelihood of a player winning the MVP award.



# imports 
import pandas as pd
import numpy as np
from pandas.core import groupby

# open csv file 
df = pd.read_csv("ByCity_Agg_Rolling.csv")

# cleaning data set 
df = df[(df.Year != 1743) & (df.Year != 1744) & (df.Year != 1745) & (df.Year != 1746) & (df.Year != 1747) & (df.Year != 1748)& (df.Year != 1749)]
df = df.sort_values(by='Year', ascending = True)
df = df.drop(columns="Unnamed: 0")

# calculate base values for each city  
grouped_df_city = df[df['AverageTemperature'].notna()]
grouped_df_city = df.groupby(['City', 'Latitude', 'Longitude'], as_index = False).head(10)
grouped_df_city = grouped_df_city.groupby(['City', 'Latitude', 'Longitude'])[['AverageTemperature']].mean()
grouped_df_city = grouped_df_city.reset_index()

# print grouped_df_city 
print(grouped_df_city)
print(df[df.City == 'Aba'].head(20))

# Convert to csv file 
grouped_df_city.to_csv(index = False)


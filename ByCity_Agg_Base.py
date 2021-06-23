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
df = df.loc[df["Year"] <= 1880]

# calculate base values for each city  
grouped_df_city = df.groupby(['City', 'Latitude', 'Longitude'])[['AverageTemperature']].mean()
grouped_df_city = grouped_df_city.reset_index()

# calculate the average of each country 
grouped_df_country = df.groupby(['Country'])[['AverageTemperature']].mean()
grouped_df_country = grouped_df_country.reset_index()

# print grouped_df_country & grouped_df_city 
print(grouped_df_country)
print(grouped_df_city)

# set longitude & latitude values for country calculations



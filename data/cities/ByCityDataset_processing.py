# Dataset preperation


# Import neccessary modules
from mapboxgl.utils import *
import numpy as np
import pandas as pd
import os

# Import the data & drop unneccessary columns
df = pd.read_csv('GlobalLandTemperaturesByCity.csv',
                 parse_dates=True,
                 index_col='dt')

df = df.drop(columns=['AverageTemperatureUncertainty'])

# Slice the dataset for 1900 to 2013 only
df.tail()

df = df.loc['1900-01-01':, :]
# Calculate the average yearly temperature for each city and each year
# old way
cities = df.City.unique()

#cols = list(df.columns)
# cols.append('Rolling_Avg')

#df_yearly = pd.DataFrame(columns=cols)

# for i in cities:
# subset = df[df.City == i]
# agg = subset.groupby('Year').agg(
# {'AverageTemperature': 'mean', 'Latitude': 'first', 'Longitude': 'first', 'Country': 'first', 'City': 'first'})
#agg = agg.reset_index()
#df_yearly = df_yearly.append(agg, ignore_index=True)

#df_yearly.drop(columns=['AverageTemperatureUncertainty', 'Rolling_Avg'], inplace=True)

# new way
df_grouped = df.groupby([df.index.year, "City"]).agg(
    {"AverageTemperature": "mean", "Latitude": "first", "Longitude": "first"}).reset_index()

# Calculate the rolling average
df_rolling = pd.DataFrame(columns=df_grouped.columns)

rolling_period = 3

for i in cities:
    subset1 = df_grouped[df_grouped.City == i]
    for i in range(0, subset1.shape[0]-(rolling_period-1)):
        subset1.loc[subset1.index[i+(rolling_period-1)], 'Rolling_Avg'] = np.round(
            ((subset1.iloc[i, 2] + subset1.iloc[i+1, 2] + subset1.iloc[i+2, 2])/rolling_period), 2)
    df_rolling = df_rolling.append(subset1, ignore_index=True)

# Function to convert latitude and longitude figures (preliminary step before loading the right coordinates via the API)


def coord_numeric(coord):
    """Converts the string object in the latitude column to a numeric scale"""
    if coord[-1] == 'N' or coord[-1] == 'E':
        numeric = float(coord[:-1])
    else:
        numeric = float(coord[:-1])*-1
    return numeric


df_rolling.loc[:, 'lat'] = df_rolling.loc[:, 'Latitude'].apply(coord_numeric)
df_rolling.loc[:, 'lon'] = df_rolling.loc[:, 'Longitude'].apply(coord_numeric)

df_rolling.drop(columns=['Latitude', 'Longitude'], inplace=True)

#df_rolling.drop(columns=['Latitude', 'Longitude'], inplace=True)

# Calculate the benchmark values (use the first 10 available years for every country)

# old way
#benchmark = []

#benchmark_period = 10

# for i in cities:
#subset2 = df_rolling[df_rolling.City == i]
#subset2 = subset2[subset2['AverageTemperature'].notna()]
# subset2.reset_index(inplace=True)
#subset2 = subset2.loc[0:benchmark_period,:]

#liste = []
# liste.extend((subset2.loc[0,'City'],
# subset2['AverageTemperature'].mean(),
# subset2.loc[0,'Year'],
# subset2.loc[benchmark_period,'Year']))

# benchmark.append(liste)

#benchmark_data = pd.DataFrame(benchmark, columns=['City', 'Benchmark_Value', 'Bench_Period_Start', 'Bench_Period_End'])

# new way

grouped_df_city = df_rolling[df_rolling['AverageTemperature'].notna()]
grouped_df_city = grouped_df_city.groupby(['City'], as_index=False).head(10)
grouped_df_city = grouped_df_city.groupby(
    'City')[['AverageTemperature']].mean()
grouped_df_city = grouped_df_city.reset_index()

grouped_df_city.columns = ['City', 'Base_Temp']
# combine benchmark value with the whole dataset
df_merged = df_rolling.merge(
    right=grouped_df_city, how='left', left_on='City', right_on='City')

# calculate the temp change
df_merged.loc[:, 'Temp_Change'] = round(
    (df_merged.loc[:, 'Rolling_Avg'] / df_merged.loc[:, 'Base_Temp']) - 1, 4)

df_final = df_merged.drop(
    columns=['AverageTemperature', 'Rolling_Avg', 'Base_Temp', 'City'])

df_final.columns = ['year', 'lat', 'lon', 'temp']

# drop nan values
df_final.dropna(axis=0, how='any', inplace=True)

df_final.info()

# create a subset for testing purposes
countries_subset = ['Berlin', 'London', 'Tokio', 'Seoul',
                    'Paris', 'Los Angeles', 'New York', 'Buenos Aires']
df_subset = df_final[df_final.city.isin(countries_subset)]


# data = df_to_geojson(
#     df_final,
#     properties=['temp', 'year'],
#     lat='lat',
#     lon='lon',
#     precision=4,
#     filename='ByCityDataset_Sliced.json'
# )
df_final.to_json("cities.json")

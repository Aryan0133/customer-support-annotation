
import pandas as pd

df = pd.read_csv('../annotations/annotateddata.csv')

print("Intent Distribution:")
print(df['intent'].value_counts())

print("\nSentiment Distribution:")
print(df['sentiment'].value_counts())

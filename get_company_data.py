#!/usr/bin/env python3

import csv
import json
from urllib.request import Request, urlopen

class Company:
  def __init__(self, name, booth):
    self.name = name
    self.booth = booth
    self.industry = ''
    self.description = ''
    self.url = ''

  def add_info(self, industry, description, url):
    self.industry = industry
    self.description = description
    self.url = url

def main():
  names = {}
  with open('ExhibitorList.csv') as f:
    reader = csv.DictReader(f)
    for row in reader:
      names[row['Company']] = Company(row['Company'], row['Booth'])

  print(names)

if __name__ == '__main__':
  main()
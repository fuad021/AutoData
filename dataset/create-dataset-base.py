import os
import numpy as np
import matplotlib.pyplot as plt

data = open('dataset.csv', 'w')

directory = './src/'
image_list = sorted(os.listdir(directory))
image_list = [img for img in image_list] 

images = []
for img in image_list:
  # img_arr = plt.imread(img)
  data.write(f'{img},,,,,,,false,false\n')


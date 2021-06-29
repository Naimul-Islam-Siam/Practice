# ========================================
# Modules
# ========================================

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import cv2
import os

def show_image(image, title='Image', cmap_type='gray'):
    plt.imshow(image, cmap=cmap_type)
    plt.title(title)
    plt.axis('off')

image_path = "/content/drive/MyDrive/imgae processing lab/"


# ========================================
# Function: Get Image Size
# ========================================

# Image Size in Byte
def image_size(img):
  return os.path.getsize(img)

img = cv2.imread(f'{image_path}image.png')
show_image(img, "Original Image");

image_size(f'{image_path}image.png')


# ========================================
# Convert To GrayScale
# ========================================

gray_original = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

show_image(gray_original, "Gray")

image_size(f'{image_path}gray.png')

gray_original.shape[0], gray_original.shape[1]


# ========================================
# Function: Calculate Bit Rate
# ========================================

def find_bit_rate(gray_image):
  cv2.imwrite(f'{image_path}gray.png', gray_image)
  gray_width, gray_height = gray_image.shape[0], gray_image.shape[1]
  gray_size = image_size(f'{image_path}gray.png')
  bit_rate = (gray_size * 8) / (gray_width * gray_height)

  return bit_rate

# get bit rate
find_bit_rate(gray_original)


# ========================================
# Function: Calculate Entropy
# ========================================

def find_entropy(img):
  marg = np.histogramdd(np.ravel(img), bins=256)[0]/img.size
  marg = list(filter(lambda p: p > 0, np.ravel(marg)))
  entropy = -np.sum(np.multiply(marg, np.log2(marg)))
  
  return entropy

# get entropy
entropy = find_entropy(gray_original)

entropy


# ========================================
# Function: spatial
# ========================================

def splt2(img):
  const = 18
  [row, col] = np.shape(img)
  pred1 = np.zeros((row+1, col+1))
  pred11 = np.zeros((row+1, col+1))

  pred1[0, :] = const * np.ones((1, col+1))
  pred1[1: row+1, 0] = const
  pred1[1: row+1, 1: col+1] = img

  for i in range(1, row):
    for j in range(1, col):
      pred11[i, j] = 0.5*(pred1[i, j-1] + pred1[i-1, j])

  pred11 = pred11[1: row+1, 1:col+1]
  pred11 = img - np.fix(pred11)

  return pred11

# compress
compressed_img = splt2(gray_original)

# get entopy
find_entropy(compressed_img)


# ========================================
# Function: Temporal Spatial
# ========================================

def temporal_sptl2(img, c):
    const = 5
    case_name = '';
    [row, col] = np.shape(img)
    pred1 = np.zeros((row+1, col+1))
    pred11 = np.zeros((row+1, col+1))

    pred1[0, :] = const * np.ones((1, col+1))
    pred1[1: row+1, 0] = const
    pred1[1: row+1, 1:col+1] = img
    
    #X=B
    if c==1:
        case_name = 'X=B'
        for i in range(1, row):
            for j in range(1, col):
                pred11[i][j] = pred1[i-1][j]

    #X=C
    if c==2:
        case_name = 'X=C'
        for i in range(1, row):
            for j in range(1, col):
                pred11[i][j] = pred1[i-1][j-1]

    #X=A
    if c==3:
        case_name = 'X=A'
        for i in range(1, row):
            for j in range(1, col):
                pred11[i][j] = pred1[i][j-1]

    #X=(A+B)/2
    if c==4:
        case_name = 'X=(A+B)/2'    
        for i in range(1, row):
            for j in range(1, col):
                pred11[i][j] = 0.5 * (pred1[i][j-1] + pred1[i-1][j])

    #X=A+B-C
    if c==5:
        case_name = 'X=A+B-C'
        for i in range(1, row):
            for j in range(1, col):
                pred11[i][j] = pred1[i][j-1] + pred1[i-1][j] - pred1[i-1][j-1]

    #X=A+(B-C)/2            
    if c==6:
        case_name = 'X=A+(B-C)/2'
        for i in range(1, row):
            for j in range(1, col):
                pred11[i][j] = pred1[i][j-1] + (0.5 * (pred1[i-1][j] - pred1[i-1][j-1]))
                
    #X=B+(A-C)/2
    if c==7:
        case_name = 'X=B+(A-C)/2'
        for i in range(1, row):
            for j in range(1, col):
                pred11[i][j] = pred1[i-1][j] + (0.5 * (pred1[i][j-1] - pred1[i-1][j-1]))
    
    pred11 = pred11[1:row+1, 1:col+1]
    pred11 = img - np.fix(pred11)
    pred11 = pred11.astype('double')

    return {'case_name': case_name, 'value': pred11}

for i in range(1, 8):
  vars()[f'temp_comp_{i}'] = temporal_sptl2(gray_original, i)

results = []

for i in range(1, 8):
  vars()[f'entropy_temp_comp_{i}'] = find_entropy(vars()[f'temp_comp_{i}']['value'])

  results.append({'case_name': vars()[f'temp_comp_{i}']['case_name'], 'entropy': vars()[f'entropy_temp_comp_{i}']})

  print('Case Name: ', vars()[f'temp_comp_{i}']['case_name'], '= ', vars()[f'entropy_temp_comp_{i}'])

results

results_pd = pd.DataFrame(results)


# ========================================
# Final Entropy
# ========================================

results_pd
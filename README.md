# Pneumonia-Detection-System
A machine learning model to detect pneumonia from chest X-ray images, leveraging convolutional neural networks (CNNs) and transfer learning. Implemented and compared two approaches: 
```
1. A VGG16 pre-trained model 
2. A custom CNN architecture
```
# Dataset 
Mooney, P. T. (2019). Chest X-Ray Images (Pneumonia) Dataset. Kaggle.


https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia 


# Model Architecture 
Using vgg16 


![image](https://github.com/Rudra-KT/Pneumonia-Detection-System/assets/96310018/11834741-8faa-4d68-9955-bac27ec57666)

Custom CNN 

![image](https://github.com/Rudra-KT/Pneumonia-Detection-System/assets/96310018/db1657cd-f65a-4f70-8c79-0c879d3590fe)

# Model Performance

Using Vgg16 architecture

```
Classification Report:

              precision    recall  f1-score   support

           0       0.90      0.87      0.88       234
           1       0.92      0.94      0.93       390

    accuracy                           0.91       624
   macro avg       0.91      0.90      0.91       624
weighted avg       0.91      0.91      0.91       624
```

Metric
VGG16 Model	
       Custom CNN Model



 # Model Comparison

| Model           | Accuracy | Precision (NORMAL) | Precision (PNEUMONIA) | Recall (NORMAL) | Recall (PNEUMONIA) | F1-score (NORMAL) | F1-score (PNEUMONIA) |
|-----------------|----------|--------------------|-----------------------|-----------------|--------------------|-------------------|----------------------|
| VGG16           | 0.91     | 0.90               | 0.92                  | 0.87            | 0.94               | 0.88              | 0.93                 |
| Custom CNN Model| 0.58     | 0.34               | 0.62                  | 0.13            | 0.85               | 0.19              | 0.72                 |


#  Demo Run 
![image](https://github.com/Rudra-KT/Pneumonia-Detection-System/assets/96310018/1b391912-468c-47a9-8547-47c13d8ca79f)



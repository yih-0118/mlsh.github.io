import os
import pandas as pd

def merge_csv_files(folder_path, output_file):
    # 获取文件夹中的所有CSV文件
    csv_files = [file for file in os.listdir(folder_path) if file.endswith('.csv')]
    
    # 如果文件夹中没有CSV文件，则返回
    if not csv_files:
        print("文件夹中没有CSV文件.")
        return
    
    # 创建一个空DataFrame来存储合并后的数据
    merged_data = pd.DataFrame()
    
    # 逐个读取CSV文件并合并到DataFrame中
    for file in csv_files:
        file_path = os.path.join(folder_path, file)
        data = pd.read_csv(file_path)
        merged_data = pd.concat([merged_data, data], ignore_index=True)
    
    # 将合并后的数据写入到输出文件中
    merged_data.to_csv(output_file, index=False)
    print("合併完成.")

# 指定包含CSV文件的文件夹路径和输出文件的路径
folder_path = '/Users/yih_0118/Documents/GitHub/mlsh.github.io/單字/非現行版本/單字json製作'
output_file = '/Users/yih_0118/Documents/GitHub/mlsh.github.io/merged_file.csv'

# 合并CSV文件
merge_csv_files(folder_path, output_file)

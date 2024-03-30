import os
import csv

def insert_text_to_csv(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".csv"):  # 确保文件是CSV格式
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', newline='') as csvfile:
                csvreader = csv.reader(csvfile)
                rows = list(csvreader)

            # 在列表的开头插入",,,"这一行
            rows.insert(0, [])

            with open(filepath, 'w', newline='') as csvfile:
                csvwriter = csv.writer(csvfile)
                csvwriter.writerows(rows)

# 指定包含CSV文件的目录路径
directory_path = '/Users/yih_0118/Documents/GitHub/mlsh.github.io/單字/單字製作（勿打包）/單字場csv'

# 调用函数将",,,"插入到每个CSV文件的开头
insert_text_to_csv(directory_path)

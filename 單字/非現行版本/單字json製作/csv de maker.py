from json import dumps
import csv

result = {
    "vocabularies": []
}

if __name__ == "__main__":
    with open("B4 L3.csv", "r", encoding="utf-8") as csvfile:
        reader = csv.reader(csvfile)
        next(reader)
        for row in reader:
            dictionary = {
                "vocabulary": row[0],
                "partOfSpeech": row[1],
                "chinese": row[2]
            }
            result["vocabularies"].append(dictionary)

    with open("B4 L3.json", 'w', encoding="utf-8") as file:
        file.write(dumps(result, ensure_ascii=False))

# from json import dumps
# import csv
# import os

# def f(csv_file, json_file):
#     result = {"vocabularies": []}
#     with open(csv_file, "r", encoding="utf-8") as csvfile:
#         reader = csv.reader(csvfile)
#         next(reader)
#         for row in reader:
#             dictionary = {
#                 "vocabulary": row[0],
#                 "partOfSpeech": row[1],
#                 "chinese": row[2]
#             }
#             result["vocabularies"].append(dictionary)

#     with open(json_file, 'w', encoding="utf-8") as file:
#         file.write(dumps(result, ensure_ascii=False))

# if __name__ == "__main__":
#     csv_files = [filename for filename in os.listdir() if filename.endswith(".csv")]
#     for csv_file in csv_files:
#         json_file = os.path.splitext(csv_file)[0] + ".json"
#         f(csv_file, json_file)

import csv
import random

# Step 1: Load series data from CSV
def load_series_data(csv_file):
    series_data = {}
    with open(csv_file, mode="r", encoding="utf-8-sig") as file:  # Use utf-8-sig to handle BOM
        reader = csv.DictReader(file)
        for row in reader:
            series = row["Series"]  # Now "Series" won't include \ufeff
            season = int(row["Season"])
            episodes = int(row["Episodes"])
            excluded = list(map(int, row["Excluded"].split(";"))) if row["Excluded"] else []
            
            if series not in series_data:
                series_data[series] = {}
            series_data[series][season] = {"episodes": episodes, "excluded": excluded}
    return series_data



# Step 2: Random episode generator
def get_random_episode(series_name, series_data):
    seasons = series_data[series_name]
    random_season = random.choice(list(seasons.keys()))
    
    total_episodes = seasons[random_season]["episodes"]
    excluded_episodes = seasons[random_season]["excluded"]
    available_episodes = [
        episode for episode in range(1, total_episodes + 1) if episode not in excluded_episodes
    ]
    
    if not available_episodes:
        return f"All episodes from Season {random_season} of '{series_name}' are excluded!"
    
    random_episode = random.choice(available_episodes)
    return f"Random pick for '{series_name}': Season {random_season}, Episode {random_episode}"

# Step 3: Main program
series_data = load_series_data("series_data.csv")

while True:
    print("\nAvailable series:")
    series_list = list(series_data.keys())
    for i, name in enumerate(series_list, start=1):
        print(f"{i}. {name}")
    
    try:
        user_choice = input("\nEnter the number of the series you want to choose (or '0' to exit): ")
        if user_choice == "0":
            print("Goodbye!")
            break
        
        series_index = int(user_choice) - 1
        if 0 <= series_index < len(series_list):
            selected_series = series_list[series_index]
            print(get_random_episode(selected_series, series_data))
        else:
            print("Invalid number. Please choose from the list.")
    
    except ValueError:
        print("Invalid input. Please enter a number.")

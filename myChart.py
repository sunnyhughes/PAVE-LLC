import matplotlib.pyplot as plt

# Create a list of months
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]

# Create a list of attendance counts
attendance_counts = [0, 18, 40, 12, 3, 94, 75, 85, 80, 102, 85, ]

# Create a bar chart
plt.figure(figsize=(10, 6))
plt.bar(months, attendance_counts, color='skyblue')
plt.xlabel("Months")
plt.ylabel("Attendance Counts")
plt.title("Attendance Counts by Month in 2023")
plt.xticks(rotation=45)
plt.grid(True)
plt.show()

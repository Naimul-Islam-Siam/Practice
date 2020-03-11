class Person:
    def __init__(self, name, year_of_birth, job):
        self.name = name
        self.year_of_birth = year_of_birth
        self.job = job

    def calculate_age(self):
        age = 2020 - self.year_of_birth
        return age


Person1 = Person("John", 1997, "Soccer Player")

print(Person1.calculate_age())

class Student:
    def __init__(self, name, subject, gpa, is_passed):
        self.name = name
        self.subject = subject
        self.gpa = gpa
        self.is_passed = is_passed


mohsin = Student("Mohsin", "CSE", 3.15, True)
jamil = Student("Jamil", "ME", 2.9, True)


def compare(obj1, obj2):
    if obj1.gpa > obj2.gpa:
        better_one = obj1
        worse_one = obj2
    else:
        better_one = obj2
        worse_one = obj1

    print(f"{better_one.name} did better than {worse_one.name}")


compare(mohsin, jamil)

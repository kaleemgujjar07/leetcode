class MyStack:

    def __init__(self):
        self.q1 = []
        self.q2 = []

    def push(self, x: int) -> None:
        # New element ko q2 mein daalo
        self.q2.append(x)

        # q1 ke saare elements q2 mein transfer karo
        while self.q1:
            self.q2.append(self.q1.pop(0))

        # q1 aur q2 ko swap kar do
        self.q1, self.q2 = self.q2, self.q1

    def pop(self) -> int:
        # q1 ka first element Stack ka top hai
        return self.q1.pop(0)

    def top(self) -> int:
        # q1 ka first element Stack ka top hai
        return self.q1[0]

    def empty(self) -> bool:
        return len(self.q1) == 0
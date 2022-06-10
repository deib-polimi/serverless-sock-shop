import base64
from time import sleep
from locust import HttpUser, TaskSet, task
from random import randint, choice, getrandbits


class WebTasks(TaskSet):


    @task
    def load(self):
        user = f"u{getrandbits(64)}"
        password = f"p{getrandbits(64)}"
        session = bytes(f"{user}:{password}", "utf-8")
        base64string = base64.encodebytes(session)[:-1].decode('ascii')

        catalogue = self.client.get("/catalogue").json()
        category_item = choice(catalogue)
        item_id = category_item["id"]

        self.client.get("/")
        self.client.post("/register", json={"username":user,"password":password,"email":"davidehu@Live.it","firstName":"davidehu@Live.it","lastName":"davidehu@Live.it"})
        self.client.get("/login", headers={"Authorization":f"Basic {base64string}"})
        self.client.post("/addresses", json={"number":"24","street":"Via gorizia","city":"Sesto san giovanni","postcode":"20099","country":"Germany"})
        self.client.post("/cards", json={"longNum":"123123123123","expires":"1231231","ccv":"12312312"})
        self.client.get("/category.html")
        self.client.get("/detail.html?id={}".format(item_id))
        self.client.delete("/cart")
        self.client.post("/cart", json={"id": item_id, "quantity": 1})
        self.client.get("/basket.html")
        sleep(1)
        self.client.post("/orders")


class Web(HttpUser):
    tasks = [WebTasks]
    min_wait = 0.1
    max_wait = 0.6

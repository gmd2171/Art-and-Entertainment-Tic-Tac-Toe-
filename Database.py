import pymongo
def main():
    d = Database()
    db = d.createConnection()
class Database:
    def _init_(self):
        self.db = None
        self.client = None
    def createConnection(self):
        self.client = pymongo.MongoClient("mongodb+srv://FrankCastle:Mdb2171@cluster0.gutv6.mongodb.net/Guru?retryWrites=true&w=majority")
        self.db = self.client.test()
        return self.db


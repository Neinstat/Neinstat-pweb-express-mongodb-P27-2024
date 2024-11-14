# Pweb-express-mongodb-P27-2024

cara kerja :
1. npm init.
![image](https://github.com/user-attachments/assets/5317ec31-01c4-4472-a47d-ce411bc890d1)
![image](https://github.com/user-attachments/assets/1cf056f1-9fe8-4684-a40d-cabbb245db33)
2. npm install express.
![image](https://github.com/user-attachments/assets/ba50b842-6f97-44bc-b07c-f31d6c8e7a8c)
3. npm install -D typescript @types/node @types/express ts-node nodemon.
![image](https://github.com/user-attachments/assets/50cc3aea-c23b-4f61-923d-89c52facbe06)
4. npx tsc --init.
![image](https://github.com/user-attachments/assets/d0ace5f6-2aca-4075-b470-77fe20689160)
5. npm i --save-dev @types/bcrypt.
![image](https://github.com/user-attachments/assets/aa695f28-bdee-49a8-b997-8e716ce7d393)
6. npm i --save-dev @types/jsonwebtoken.
![image](https://github.com/user-attachments/assets/ba79ec78-d9c5-44c2-9ad9-5f9942aeb95e)
7. setelah itu buatlah file `.env`.
```
MONGODB_URI=mongodb://daniwahyuaa:6WN3vZZeeJJWSOSM@cluster0-shard-00-00.mongodb.net:27017,cluster0-shard-00-01.mongodb.net:27017,cluster0-shard-00-02.mongodb.net:27017/sample_mflix?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true
PORT=2727
JWT_SECRET=Dawa287
```
8. setelah itu jalankan dengan
```
npm run start:dev
```
![image](https://github.com/user-attachments/assets/7df9a934-8d18-499b-9ac7-4e3f01433ecd)

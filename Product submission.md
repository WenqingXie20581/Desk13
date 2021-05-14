# Product submission

## Link to our repo

[WenqingXie20581/Desk13: Project of Desk13 (github.com)](https://github.com/WenqingXie20581/Desk13)

**version:  ???????**



## Running Instructions 

#### Database on the cloud (Recommend!)

1. Change directory to the folder containing Dockerfile

   ```
   cd .\Desk13\DishMap
   ```

2. Build Docker image

   ```
   docker build .
   ```

3. Start the container based on the built image

   ```
   docker run --publish 3000:3000 <nameofimage>
   ```

   <nameofimage> was included in the return information of  **step 2**, like "Successfully built <nameofimage>".

#### Database in the Docker Container (Not Recommend : No preload data!!)

1. Change directory to the folder containing Dockerfile and docker-compose.yml

   ```
   cd .\Desk13\DishMap
   ```

2. Start the service

   ```
   docker-compose up -d
   ```

### 

## Environment 

**Docker?**


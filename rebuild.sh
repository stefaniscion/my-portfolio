sudo docker stop my-portfolio
sudo docker rm my-portfolio
sudo docker rmi my-portfolio
sudo docker prune --volumens --all
sudo docker build -t my-portfolio .
sudo docker run -d -p 8080:80 --name my-portfolio my-portfolio
sudo docker system prune
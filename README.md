# My Portfolio
My portfolio written whit SvelteKit and TailwindCSS.

## Installation

### Via npm
To run the app locally, you need to launch the following commands:
```bash
npm install
npm run dev
```
This will install all the dependencies and run the app in development mode.

If you want to build the app, you can run:
```bash
npm run build
```

### Via Docker (recommended)
To use the app via Docker, you need to launch the following commands:
```bash
docker build -t my-portfolio .
docker run -d -p 5000:80 my-portfolio
```
This will build the image and run the container on port 5000.

## Todo
- [ ] Fix loading time always showing "0" on the docker version.
- [ ] Add images to the projects.
- [ ] Easter eggs.

## Some Credits
- [Calendly](https://calendly.com/) to book appointments in the portfolio.
- [Egg.js](https://mikeflynn.github.io/egg.js/) because why not?

## Installation on Oracle Linux 9
My instance is running on Oracle Linux 9 on Oralce Cloud (because is free yay), so here are the steps to install the necessary components:

### Git
Install Git by launching the following commands:

```bash
dnf install -y git
```

Then clone the repository:

```bash
git clone https://github.com/stefaniscion/my-portfolio.git
cd my-portfolio
```

### Docker
Install Docker by launching the following commands:
```bash
dnf install -y dnf-utils zip unzip
dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
dnf remove -y runc
dnf install -y docker-ce --nobest
sudo systemctl enable docker.service
sudo systemctl start docker.service
```

Then launch the following commands to launch the container:
```bash
sudo rebuild.sh
```

### Nginx
Install Nginx by launching the following commands:

```bash
dnf install -y nginx
systemctl enable nginx.service
systemctl start nginx.service
``` 

Then create a configuration file for the app in `/etc/nginx/conf.d/my-portfolio.conf` with the following content:

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Certbot
Install Certbot on Nginx with pip by launching the following commands:

```bash
sudo dnf install python3 python-devel augeas-devel gcc
sudo python3 -m venv /opt/certbot/
sudo /opt/certbot/bin/pip install --upgrade pip 
sudo /opt/certbot/bin/pip install certbot certbot-nginx
sudo ln -s /opt/certbot/bin/certbot /usr/bin/certbot
sudo certbot --nginx
```

### Firewall
If you have a firewall enabled, you need to allow HTTP and HTTPS traffic:
```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

### SELinux
If you have SELinux enabled, you need to allow Nginx to connect to the Docker
container:
```bash
sudo setsebool -P httpd_can_network_connect on
sudo systemctl restart nginx.service
```
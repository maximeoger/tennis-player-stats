
resource "aws_instance" "node_api_instance_nginx" {
  ami               = "ami-05b457b541faec0ca"
  instance_type     = "t2.micro"
  availability_zone = "eu-west-3a"
  key_name          = "eu-west-3-main-key"

  network_interface {
    device_index         = 0
    network_interface_id = aws_network_interface.web-server.id
  }

  user_data = <<-EOF
                #!/bin/bash
                sudo apt update -y
                sudo apt install nginx -y
                service nginx start

                # Install node19 and yarn
                curl -sL https://deb.nodesource.com/setup_19.x | sudo -E bash - && sudo apt install nodejs
                curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
                echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
                sudo apt update
                sudo apt install --no-install-recommends yarn

                # Cloning repository and installing server
                git clone https://github.com/maximeoger/tennis-player-stats.git
                mv tennis-player-stats/server . && sudo rm -rf tennis-player-stats

                # Install server dependencies and pm2 to manage process
                cd server && npm install
                npm install -g pm2
                touch .env && echo "origin_url=http://tennis-player-stats.s3-website.eu-west-3.amazonaws.com" > .env

                # Start the server and show logs
                npx pm2 start yarn --interpreter bash --name api -- start
                npx pm2 log
              EOF
}
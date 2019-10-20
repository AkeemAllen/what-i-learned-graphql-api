if [ $1 = "develop" ]; then
    ip=50.116.27.177
    server=admin@50.116.27.177
  elif [ $1 = "master" ]; then
    ip=74.207.224.133
    server=akeem@74.207.224.133
fi

if [ -z `ssh-keygen -F $ip` ]; then
  ssh-keyscan -H $ip >> ~/.ssh/known_hosts
fi

yes | sudo apt-get install expect

# Successfuly logs me into server
if [ $server = "akeem@74.207.224.133" ]; then
    .circleci/scripts/cpyToServer.sh
  elif [ $server = "admin@50.116.27.177" ]; then
    .circleci/scripts/cpyToDevelopServer.sh
fi
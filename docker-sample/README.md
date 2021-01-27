# docker-sample/README

# 設定を変更する
## Dockerfile内で作成されるユーザ名は変更しよう
- ap/Dockerfile
    ```Dockerfile
    RUN useradd -u <<ユーザIDは指定しなくてもいい>> -m -d /home/<<ユーザ名>> <<ユーザ名>> \
     && chmod 755 /home/<<ユーザ名>> \
     && mkdir -p /home/<<ユーザ名>>/www
    ```
- foward-proxy/Dockerfile
    ```Dockerfile
    RUN useradd -u <<ユーザIDは指定しなくてもいい>> -m -d /home/<<ユーザ名>> <<ユーザ名>>
    ```

## LB, APのサーバ名くらいは変更しよう
- lb/nginx.conf
    ```Nginx
    upstream <<LBのFQDN>> {
        server <<APのコンテナ名>>:80;
    }
    
    server {
        listen 80;
        server_name localhost;
        location / {
            proxy_pass http://<<LBのFQDN>>;
        }
    }
    ```
- ap/httpd/conf/httpd.conf
    ```ApacheConf
    ServerName <<ApacheのServerName（任意）>>
    ```
- ap/httpd/conf.d/877-example-ap.conf：ファイル名も変えるといいよ！
    ```ApacheConf
    <VirtualHost *:80>
        ServerName <<ApacheのServerName（任意）>>
        # Dockerfileで指定したユーザにするといいよ！
        DocumentRoot  /home/<<ユーザ名>>/www/
        <Directory " /home/<<ユーザ名>>/www/">
        ...
        </Directory>
    </VirtualHost>
    ```

# docker-compose.ymlを作成する
## docker-compose.ymlの作成
```bash
$ cp docker-compose.yml.example docker-compose.yml
```

## コンテナ名くらいは編集してほしい
docker-compose.yml内で、`877-docker-example-*`となっているところを修正しましょう。

また、これまでに変更してきたそれの影響で、うまくマウントできない`volumes`などがあるので、そこも自分が変更したものに合わせて修正してみましょう。

それだけでもコピペするよりずっと理解を深めることができます。
また、あなたの中の **「もっと知りたい！！」** を育てることができます。

# Dockerコンテナ作成
「どん！どん！！どん！！！どん！！！！」でたぶん成功。
一応psも確認し、全部が`Up`となっていればOK。
```
$ docker-compose up -d
$ docker-compose ps
```


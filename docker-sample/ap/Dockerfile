# base image
FROM centos:7

# yum install needed packages
RUN yum install -y iproute \
                   net-tools \
                   bind-utils \
                   vim-enhanced \
                   epel-release http://rpms.famillecollet.com/enterprise/remi-release-7.rpm \
                   httpd \
                   mysql \
                   zip \
                   unzip \
 && yum install -y --enablerepo=remi-php72 \
                   php72 \
                   php72-php \
 && ln -s /usr/bin/php72 /usr/bin/php \
 && sed -i -e '/override_install_langs/s/$/,ja_JP.utf8/g' /etc/yum.conf \
 && yum update -y \
 && echo 'LANG="ja_JP.UTF-8"' > /etc/locale.conf

ENV LANG="ja_JP.UTF-8" \
    LANGUAGE="ja_JP:ja"

RUN rm -f /etc/localtime \
 && ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN useradd -u 1000 -m -d /home/mr.877 mr.877 \
 && chmod 755 /home/mr.877 \
 && mkdir -p /home/mr.877/www

EXPOSE 80
CMD /usr/sbin/httpd -D FOREGROUND

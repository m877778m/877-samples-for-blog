# base image
FROM centos:7

# yum install needed packages
RUN yum install -y iproute \
                   net-tools \
                   bind-utils \
                   vim-enhanced \
                   squid \
                   zip \
                   unzip \
 && sed -i -e '/override_install_langs/s/$/,ja_JP.utf8/g' /etc/yum.conf \
 && yum update -y \
 && echo 'LANG="ja_JP.UTF-8"' > /etc/locale.conf

ENV LANG="ja_JP.UTF-8" \
    LANGUAGE="ja_JP:ja"

RUN rm -f /etc/localtime \
 && ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN useradd -u 1000 -m -d /home/mr.877 mr.877

EXPOSE 3128
CMD /usr/sbin/squid -f /etc/squid/squid.conf -N

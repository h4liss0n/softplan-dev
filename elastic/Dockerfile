FROM openjdk:11-jre-slim

LABEL maintainer "dliocode <developer.dlio@gmail.com>"

ENV EK_VERSION=7.11.0

RUN apt-get update -y && apt-get upgrade -y && apt-get dist-upgrade -y \
    && apt-get install -y --no-install-recommends --no-install-suggests wget sudo \
    && useradd -m -s /bin/bash elasticsearch \
    && echo elasticsearch ALL=NOPASSWD: ALL >/etc/sudoers.d/elasticsearch \
    && chmod 440 /etc/sudoers.d/elasticsearch \
    && apt-get remove --purge --auto-remove -y gnupg1 && rm -rf /var/lib/apt/lists/*

USER elasticsearch  

WORKDIR /home/elasticsearch  

RUN wget --no-check-certificate -q -O - https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${EK_VERSION}-linux-x86_64.tar.gz | tar -zx \
    && mkdir -p elasticsearch-${EK_VERSION}/data \
    && wget --no-check-certificate -q -O - https://artifacts.elastic.co/downloads/kibana/kibana-${EK_VERSION}-linux-x86_64.tar.gz | tar -zx

CMD elasticsearch-${EK_VERSION}/bin/elasticsearch -E http.host=0.0.0.0 --quiet & kibana-${EK_VERSION}-linux-x86_64/bin/kibana --allow-root --host 0.0.0.0 -Q

EXPOSE 9200 5601
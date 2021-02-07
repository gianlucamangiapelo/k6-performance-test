FROM debian AS base
RUN apt-get update
RUN apt-get -y upgrade influxdb gnupg2

#GRAFANA
RUN apt-get install -y apt-transport-https && \
apt-get install -y software-properties-common wget && \
wget -q -O - https://packages.grafana.com/gpg.key | apt-key add - && \
echo "deb https://packages.grafana.com/oss/deb stable main" | tee -a /etc/apt/sources.list.d/grafana.list && \
apt-get update && apt-get -y install grafana

#K6
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
RUN echo "deb https://dl.bintray.com/loadimpact/deb stable main" | tee -a /etc/apt/sources.list
RUN apt-get update && apt-get -y install k6

#NPM
RUN apt-get -y install npm
RUN npm install -g k6-to-junit


ENV filek6="k6.js"

COPY k6.js .
COPY k6-journey.js .
COPY startup.sh .
EXPOSE 3000

CMD ./startup.sh $filek6
service influxdb start
service grafana-server start

k6 run -o influxdb=http://localhost:8086/load $1 | k6-to-junit junit-$1.xml

while true;
do
	sleep 60
done
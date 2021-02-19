## Build image
docker build -f Dockerfile -t k6:0.1 .

## Push image
docker tag k6:0.1 k6registry.azurecr.io/k6:0.1
docker push k6registry.azurecr.io/k6:0.1

## Run container
docker run --name k6 -i -t --rm -p 3000:3000 -e filek6={k6-filename} k6:0.1

example:

```docker run --name k6 -i -t --rm -p 3000:3000 -e filek6=k6-journey.js k6:0.1```

## Deploy on k8s
kubectl apply -f k8.yaml

## Grafana
Open grafana to : http://localhost:3000/


Credentials:

- admin
- admin


Setup Grafana datasource -> **load** **http://localhost:8086** db


Import Dashboard: number **4411** or **13719**

---

Run locally and push data on remote Grafana(http://51.103.146.238:1000/)
```k6 run -o influxdb=http://51.103.143.178:1001/load "C:\Users\gianluca.mangiapelo\Documents\DESK\QAteam\k6-performance-test\k6.js"```


### Reference:
https://k6.io/docs/results-visualization/influxdb-+-grafana
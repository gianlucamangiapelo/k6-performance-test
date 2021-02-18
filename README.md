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

### Reference:
https://k6.io/docs/results-visualization/influxdb-+-grafana
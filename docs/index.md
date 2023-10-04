# POI Map Component Documentation

The POI map component represents a web application which is composed of the following two parts:

## 1. Web frontend

The web frontend is built as single page application. It's written in [TypeScript](https://www.typescriptlang.org/) with [Angular](https://angular.io) and renders points of interests on a world map based on [LeafletJS](https://github.com/Leaflet/Leaflet).

Click [here](frontend/application.md) for details.

## 2. Proxy / facade

The web frontend is hosted and served from within a [Java](https://dev.java/) application written with [Quarkus](https://quarkus.io). This Java app acts as a proxy/facade towards an actual backend application which serves the points of interests from a relational database.

Click [here](proxy/application.md) for details.
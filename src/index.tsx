import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

const apiObjects = [
    {
        id: 1,
        title: "Foundie",
        amount: 200,
        type: "withdraw",
        category: "comida",
        createdAt: "2021-02-12",
        active: "yes",
    },
    {
        id: 2,
        title: "Freela PC",
        amount: 200,
        type: "deposit",
        category: "trabalho",
        createdAt: "2021-02-12",
        active: "yes",
    },
    {
        id: 3,
        title: "Aluguel",
        amount: 200,
        type: "deposit",
        category: "renda passiva",
        createdAt: "2021-02-12",
        active: "yes",
    },
];

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: apiObjects,
        });
    },

    routes() {
        this.namespace = "api";

        this.get("/transactions", () => {
            return this.schema.all("transaction");
        });

        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create("transaction", data);
        });
    },
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

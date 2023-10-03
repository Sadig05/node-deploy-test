import express from "express";

const pets = [
  {
    id: 1,
    name: "cnap",
    type: "cat",
    age: "3",
  },

  {
    id: 2,
    name: "nippon",
    type: "dog",
    age: "5",
  },
];

const app = express();

app.get("/pets", (req, res) => {
  return res.json(pets);
});

app.get("/pets/:id", (req, res) => {
    return res.json(pets.find(({id}) => id === +res.params.id));
  });

app.listen(10000, () => {
  console.log("aaaaaaa");
});

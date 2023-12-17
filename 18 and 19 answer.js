var person = {
    id: 100,
    name: "Ahmad",
    favoritebooks:[
        {id: 1, name: "Java script", pages: 1320},
        {id: 2, name: "React.js", pages: 1320},
    ],
    address: { country: "Afghanistan", province: "Herat", disrict: "Ghurian"},
    friends:[
        {
        id: 1098,
        name: "Karim",
        favoritebooks:[
            {id: 1, name: "Nodde,js", pages: 1120},
            {id: 2, name: "React.js", pages: 720},
        ],
        address: { country: "Afghanistan", province: "Herat", disrict: "Karukh"},
    },
    {
        id: 1098,
        name: "Karim",
        favoritebooks:[
            {id: 1, name: "J#", pages: 3420},
            {id: 2, name: "Java", pages: 450},
        ],
        address: { country: "Afghanistan", province: "Herat", disrict: "Guzarah"},
    },

    ]
};
// for (const x of person.favoritebooks) {
//     console.log(x);
// };
for (const x of person.friends[0].favoritebooks) {
    console.log(x);
}
for (const x of person.friends[1].favoritebooks) {
    console.log(x);
}
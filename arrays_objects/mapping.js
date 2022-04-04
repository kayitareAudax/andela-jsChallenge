const nestedObject = (arr) => {
    let nestedobject = {};
    for (let i = 0; i < arr.length; i++) {
        nestedobject[arr[i].split(",")[0].split(" ")[0]] = {
            second_name: arr[i].split(",")[0].split(" ")[1],
            age: parseInt(arr[i].split(",")[1]),
        };
    }
    console.log(nestedobject);
};
nestedObject(["Patrick wyne, 30", "Kayitare Audax, 28"]);
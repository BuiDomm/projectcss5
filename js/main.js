var sum = 1;

var listUsers = [{ name: 'Bui Nhan', age: 20, salary: 100 },
{ name: 'Hgiang', age: 90, salary: 300 },
{ name: 'NhiLe', age: 30, salary: 250 },
{ name: 'VjetDuong', age: 26, salary: 80 }
]

listUsers.map((user, index) => {
    if (user.salary > 100) {
        sum = sum + 1;
    }
}
)

console.log(sum)




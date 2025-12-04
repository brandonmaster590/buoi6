let students = [
    { name: "An", score: 8 },
    { name: "Bình", score: 7 }
];

// 1. Thêm 5 sinh viên
students.push(
    { name: "Cường", score: 9 },
    { name: "Dũng", score: 6 },
    { name: "Hà", score: 10 },
    { name: "Lan", score: 8 },
    { name: "Minh", score: 5 }
);

// 2. Xóa sinh viên cuối
students.pop();

// 3. Sắp xếp giảm dần theo điểm
students.sort((a, b) => b.score - a.score);

console.log(students);

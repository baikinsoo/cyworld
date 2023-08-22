let classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈히']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.length
// 3
classmates.push("맹구")
4
classmates.pop()
// '맹구'

let developer = ["노력", "즐거움", "협업", "목표", "행복"]
// undefined
developer[4]
// '행복'

let dream = ["커리어점프", "성공", "할수있다"]
// undefined
let developer = ["노력", "즐거움", "협업", "목표", "행복"]
// undefined
developer.concat(dream)
// (8) ['노력', '즐거움', '협업', '목표', '행복', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
console.log(result)
// VM1568:1 (8) ['노력', '즐거움', '협업', '목표', '행복', '커리어점프', '성공', '할수있다']


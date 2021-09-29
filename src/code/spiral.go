func SpiralTraverse(array [][]int) []int {
	// x x y
	// 00 01 02 03 -> increase x to len(m)
	// 13 23 33 -> increase x to len(n)
	// 32 31 30 -> decrease y to 0
	// 20 10 -> decrease x to 0+1
	// 11 12 ->  increase y len(m)-1
	// 22 -> increase x len(n)-1
	// 21 -> decrease y 0+1
	// Traverse -> O(n + m)
	// test case 6
	// [4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
	// [12, 19, 15, 16, 20, 18, 13, 17, 11, 14]
	
	// 4 ways -> left, down, up, right
	x, y := 0, 0
	n := len(array) // 7
	m := len(array[0]) // 1
	smallerX := 0
	greaterX := m - 1
	smallerY := 0
	greaterY := n - 1
	right, up, down, left := true, false, false, false
	
	result := []int{}
	nxm := n * m
	if m == 1 {
		right = false
		down = true
	}
	//for len(result) < nxm {
	for i := 0; i < nxm; {//len(result) < nxm {
		i++
		log.Println("y=",y,"    x=",x)
		result = append(result, array[y][x])

		if right {
			x++
			if x == greaterX {
				down = true
				right = false
				smallerY++
			}
		} else if down {
			y++
			if y == greaterY {
				down = false
				left = true
				greaterY--
			}
		} else if left {
			x--
			if x == smallerX {
				left = false
				up = true
				greaterX--
			}
		} else if up {
			y--
			if y == smallerY {
				up = false
				right = true
				smallerX++
			}
		}
	}
	
	// Control the corners
	// 	smallerX
	// 	smallerY
		
	// 	greaterY
	
	return result
}
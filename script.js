// 과목 순서별 학점 가중치 설정
const creditsMap = [3,3,3,3,3,3,2,2,2,2,2,2,2]; // 수I ~ 체육

// 등급별 평점 매핑 (IASA 기준)
const gradePoint = {
  'A+': 4.3,
  'A' : 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B' : 3.0,
  'B-': 2.7
};

// GPA 계산 함수 + 체크 상태별 시각 효과
function calculateGPA() {
  const rows = document.querySelectorAll('.subject-row');

  let totalPoints = 0;
  let totalCredits = 0;

  rows.forEach((row, i) => {
    const checkbox = row.querySelector('.include-checkbox');
    const select = row.querySelector('.grade');

    // 체크 안 된 항목은 비활성화 스타일 적용
    row.classList.toggle('inactive', !checkbox.checked);

    if (checkbox.checked) {
      const grade = select.value;
      const gp = gradePoint[grade] || 0;
      const cr = creditsMap[i];
      totalPoints += gp * cr;
      totalCredits += cr;
    }
  });

  const gpa = totalCredits ? (totalPoints / totalCredits) : 0;
  document.getElementById('gpa').textContent = gpa.toFixed(2);
}

// 변경 이벤트 등록
document.querySelectorAll('.grade, .include-checkbox').forEach(el =>
  el.addEventListener('change', calculateGPA)
);

// 초기 계산 실행
calculateGPA();

# React Router 테스트 결과 보고서

> **테스트 일시:** 2026-06-02  
> **테스트 도구:** Playwright MCP  
> **테스트 대상:** http://localhost:5173  
> **기술 스택:** React 19 + Vite 8 + React Router 7

---

## 테스트 요약

| 테스트 | 항목 | 결과 | 스크린샷 |
|--------|------|------|---------|
| 테스트1 | EmpManager 링크 클릭 → 홈페이지(대시보드) 출력 | ✅ 통과 | test1/test1_home.png |
| 테스트2 | Departments 링크 클릭 → 부서 목록 출력 | ✅ 통과 | test2/test2_departments.png |
| 테스트3 | Employees 링크 클릭 → 직원 목록 출력 | ✅ 통과 | test3/test3_employees.png |

---

## 테스트 상세 결과

### 테스트1 — EmpManager 링크 클릭 → 홈페이지

- **동작:** Departments 페이지에서 NavBar의 `EmpManager` 로고 링크 클릭
- **이동 URL:** `http://localhost:5173/`
- **확인 내용:**
  - 페이지 제목 "대시보드" 출력 확인
  - 총 부서 수 카드 (4개) 출력 확인
  - 총 직원 수 카드 (4명) 출력 확인
- **결과:** ✅ 통과
- **스크린샷:** `test1/test1_home.png`

---

### 테스트2 — Departments 링크 클릭 → 부서 목록

- **동작:** NavBar의 `Departments` 링크 클릭
- **이동 URL:** `http://localhost:5173/departments`
- **확인 내용:**
  - 페이지 제목 "부서 목록" 출력 확인
  - 부서 카드 4개 (HR, Marketing, Sales, IT) 출력 확인
  - "+ 부서 등록" 버튼 출력 확인
  - 각 카드에 수정/삭제 버튼 확인
- **결과:** ✅ 통과
- **스크린샷:** `test2/test2_departments.png`

---

### 테스트3 — Employees 링크 클릭 → 직원 목록

- **동작:** NavBar의 `Employees` 링크 클릭
- **이동 URL:** `http://localhost:5173/employees`
- **확인 내용:**
  - 페이지 제목 "직원 목록" 출력 확인
  - 직원 카드 4명 출력 확인
  - 각 카드에 이름, 이메일, 부서 뱃지 표시 확인
  - "+ 직원 등록" 버튼 출력 확인
- **결과:** ✅ 통과
- **스크린샷:** `test3/test3_employees.png`

---

## 결론

React Router 7 기반 라우팅이 정상 동작합니다.  
NavBar의 모든 링크(EmpManager, Departments, Employees)가 올바른 URL로 이동하며 해당 페이지를 정상 렌더링합니다.

| 항목 | 상태 |
|------|------|
| 전체 테스트 수 | 3 |
| 통과 | 3 |
| 실패 | 0 |
| 통과율 | 100% |

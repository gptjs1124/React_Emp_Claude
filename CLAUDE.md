# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 안내 문서입니다.

## 프로젝트 개요

React 학습 목적으로 구축하는 직원(Employee) & 부서(Department) 관리 SPA. 프론트엔드(미생성)는 기존 Node.js/Express 백엔드와 REST API로 통신한다.

## 저장소 구조

```
vibecoding_emp_react/
├── backend/                    # Node.js/Express REST API 서버 (포트 8080)
│   └── emp_dept.js             # 단일 파일 서버, 인메모리 데이터
├── PRD_EmpDept_Frontend.md     # 전체 요구사항 및 단계별 구현 가이드
└── CLAUDE.md
```

React 프론트엔드(`emp-dept-app/`)는 아직 생성되지 않았으며, PRD의 단계별 계획에 따라 scaffolding해야 한다.

## 백엔드 실행 명령어

```bash
cd backend
npm install          # 의존성 설치 (express, cors, nodemon)
npm start            # nodemon으로 포트 8080 실행 (자동 재시작)
node emp_dept.js     # 자동 재시작 없이 실행
```

서버 동작 확인: `http://localhost:8080/api/departments`

## 프론트엔드 실행 명령어 (scaffolding 이후)

```bash
cd emp-dept-app
npm install
npm run dev          # 개발 서버 http://localhost:5173
npm run build        # 프로덕션 빌드
```

## 백엔드 아키텍처

`backend/emp_dept.js`는 **인메모리 데이터**를 사용하는 단일 파일 Express 서버다 (서버 재시작 시 데이터 초기화). 주요 설계 결정사항:

- `/api/employees/departments`와 `/api/employees/email/:email` 라우트는 라우팅 충돌 방지를 위해 `/api/employees/:id`보다 **먼저** 등록되어 있음
- 부서는 `PATCH`로 수정, 직원은 `PUT`으로 수정
- ID는 모듈 레벨 카운터(`nextDeptId`, `nextEmpId`)로 자동 증가

## 계획된 프론트엔드 아키텍처

기술 스택: React 19 + Vite 8 + React Router 7 + Zustand 5 + Tailwind CSS 4 + Axios 1

**데이터 흐름:**
```
페이지 컴포넌트
  → Zustand 스토어 액션 (src/store/)
    → API 함수 (src/api/)
      → Axios 인스턴스 (src/api/axiosInstance.js)
        → 백엔드 http://localhost:8080/api
```

**상태 관리:** `useDepartmentStore`와 `useEmployeeStore` 두 개의 Zustand 스토어. 각각 `{ items[], isLoading, error }`를 보유하며, CRUD 액션은 API 호출 후 상태를 로컬에서 직접 갱신한다 (뮤테이션 후 재조회 없음).

**라우팅:** `App.jsx`에서 `createBrowserRouter` 사용, 공통 `Layout` 래퍼(NavBar + Outlet)로 감싼다. `DepartmentFormPage`와 `EmployeeFormPage`는 등록·수정을 하나의 컴포넌트에서 처리하며, `useParams().id` 유무로 모드를 구분한다.

**직원 수정 특이사항:** `EmployeeFormPage`는 전용 GET-by-id 엔드포인트 대신 이미 조회된 Zustand 스토어의 employees 배열에서 수정 대상을 찾는다. `EmployeeForm`은 부서 드롭다운 구성을 위해 `useDepartmentStore`를 통해 독립적으로 부서 목록을 조회한다.

## API 참조

| 메서드 | 경로 | 비고 |
|--------|------|------|
| GET | `/api/departments` | |
| GET | `/api/departments/:id` | |
| POST | `/api/departments` | body: `{ departmentName, departmentDescription }` |
| PATCH | `/api/departments/:id` | 부분 수정 |
| DELETE | `/api/departments/:id` | |
| GET | `/api/employees` | 부서 정보 미포함 |
| GET | `/api/employees/departments` | 중첩된 `department` 객체 포함 |
| GET | `/api/employees/email/:email` | |
| POST | `/api/employees` | body: `{ firstName, lastName, email, departmentId }` |
| PUT | `/api/employees/:id` | 전체 수정 |
| DELETE | `/api/employees/:id` | |

### PRD 문서와  CLAUDE.md 문서 항상 최신화 규칙
* @PRD_EmpeDept_Frountend.md의 각 단계 (Phase)가 완료되면 CheckBox에 x를 표시하여 완료되었음을 체크한다.
* Source code가 변경되거나 라이브러리 버전이 변경 되면 반드시 md 문서도 반드시 업데이트 하세요. 
* @PRD_EmpDept_Frontend.md의 각 단계(Phase)에서 조사를 먼저 처리할 때 Context7 MCP를 반드시 사용하여 최신 문서와 샘플 코드를 먼저 확인합니다.






